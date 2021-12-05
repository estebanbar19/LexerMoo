@{%
const moo = require('moo');
const {compile} = moo;

const lexer = compile({
    asignacion: ['<<<', "="],
    tipoVariable: ['entero', 'logico', 'decimalL', 'decimalC'],
    operadoresCortos: ["mas mas", "menos menos"],
    keyword: ['Para', 'mientrasQue', 'si', "sin't", 'caso', 'retornar', 'impresion', 'salto'],
    comparadorNumerico: ['menorQue', 'mayorQue', 'igualQue', 'menorIgualQue', 'mayorIgualQue'],
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /[0-9]+/,
    stringQuotes:  /"(?:\\["\\]|[^\n"\\])*"/,
    string:  /[a-zA-Z]+/,
    lparen:  '(',
    rparen:  ')',
    lbracket: '{',
    rbracket: '}',
    finLinea: '|',
    characterKey: ['#', ','],
    NL:      { match: /\n/, lineBreaks: true },
});
%}

@lexer lexer

input -> statement | operacionlogica | funcionStatement | funcionCall

statement -> whileStatement | whileStatement statement

whileStatement -> "mientrasQue" espacioEnBlanco %lparen operacionlogica %rparen bloquecodigo

funcionStatement -> nombreFuncion espacioEnBlanco %lparen %rparen espacioEnBlanco bloquecodigo 
                    | nombreFuncion espacioEnBlanco %lparen values %rparen espacioEnBlanco bloquecodigo

funcionCall -> nombre espacioEnBlanco %lparen %rparen espacioEnBlanco | nombre espacioEnBlanco %lparen values %rparen espacioEnBlanco

statement -> ifStatement | ifStatement statement

ifStatement -> "si" espacioEnBlanco %lparen operacionlogica %rparen espacioEnBlanco "entonces" espacioEnBlanco bloquecodigo | "si" %lparen operacionlogica %rparen "entonces" bloquecodigo "sin't" bloquecodigo

statement -> bloquecodigo

bloquecodigo -> %lbracket statement %rbracket | %lbracket espacioEnBlanco %rbracket

statement -> value | value statement | declaraciones

values -> value | value values

value -> %string | %number | %WS | %keyword | %stringQuotes | %comment | %characterKey | %comparadorNumerico | operacionlogica 

#nombreVariable -> %string | %string %number | %string %number nombreVariable espacioEnBlanco

nombreFuncion -> %tipoVariable espacioEnBlanco nombre

nombre -> %string | %string espacioEnBlanco nombreFuncion

# ESTAMENTO COMPARADOR EX: 5 < 7 ---- A > B
operacionlogica -> %string %WS %comparadorNumerico %WS %string {% function(d){ return { operador: d[2], lOperador: d[0], rOperador: d[4] }; } %} | %number %WS %comparadorNumerico %WS %number {% function(d){ return { operador: d[2], lOperador: d[0], rOperador: d[4] }; } %}

declaraciones -> "entero" %string espacioEnBlanco %asignacion espacioEnBlanco %number | "string" %string espacioEnBlanco %asignacion espacioEnBlanco %string | "string" %string espacioEnBlanco %asignacion espacioEnBlanco %stringQuotes

espacioEnBlanco -> null | espacioEnBlanco %WS

