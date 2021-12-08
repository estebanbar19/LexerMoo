@{%
const moo = require('moo');
const {compile} = moo;

const lexer = compile({
    asignacion: ['<<<'],
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

ev -> input {% (d) => eval(''+d[0]) %} | input ev {% (d) => eval(''+d[1]+'; '+d[0]) %}

input -> statement | operacionlogica | funcionStatement | funcionCall

statement -> whileStatement | whileStatement statement

whileStatement -> "mientrasQue" espacioEnBlanco %lparen operacionlogica %rparen bloquecodigo

funcionStatement -> nombreFuncion espacioEnBlanco %lparen %rparen espacioEnBlanco bloquecodigo 
                    | nombreFuncion espacioEnBlanco %lparen values %rparen espacioEnBlanco bloquecodigo

funcionCall -> nombre espacioEnBlanco %lparen %rparen espacioEnBlanco | nombre espacioEnBlanco %lparen values %rparen espacioEnBlanco

statement -> ifStatement | ifStatement statement

#ifStatement -> "si" espacioEnBlanco %lparen operacionlogica %rparen espacioEnBlanco "entonces" espacioEnBlanco bloquecodigo {% function(d){ if(d[3] == true){return d[8]} } %} | "si" %lparen operacionlogica %rparen "entonces" bloquecodigo "sin't" bloquecodigo
ifStatement -> "si" espacioEnBlanco %lparen operacionlogica %rparen espacioEnBlanco "entonces" espacioEnBlanco bloquecodigo {% (d) => (d[8])[1] %} | "si" %lparen operacionlogica %rparen "entonces" bloquecodigo "sin't" bloquecodigo {% (d) => d[8] %}

statement -> bloquecodigo | bloquecodigo %finLinea

bloquecodigo -> %lbracket statement %rbracket %finLinea | %lbracket espacioEnBlanco %rbracket %finLinea

statement -> value | value statement | impresionStatement

impresionStatement -> "impresion" "#" impresion? cierreLinea {% (d) => d[2] %}

impresion? -> values | "#" impresion?

values -> value | value values

value -> %string | %number | %WS | %keyword | %stringQuotes | %comment | %characterKey | %comparadorNumerico | operacionlogica | operacionCorta | %NL | declaraciones | suma

#nombreVariable -> %string | %string %number | %string %number nombreVariable espacioEnBlanco

nombreFuncion -> %tipoVariable espacioEnBlanco nombre

nombre -> %string | %string espacioEnBlanco nombreFuncion

operacionCorta -> %number "mas mas" {% (d) => parseInt(d[0]) + 1 %} | %number "menos menos" {% (d) => parseInt(d[0]) - 1 %}

# ESTAMENTO COMPARADOR EX: 5 < 7 ---- A > B
#operacionlogica -> %string %WS %comparadorNumerico %WS %string {% function(d){ return { operador: d[2], lOperador: d[0], rOperador: d[4] }; } %} | %number %WS %comparadorNumerico %WS %number {% function(d){ return { operador: d[2], lOperador: d[0], rOperador: d[4] }; } %}
operacionlogica -> %number %WS "menorQue" %WS %number {% (d) => (d[0] < d[4]) %} | %number %WS "mayorQue" %WS %number {% (d) => (d[0] > d[4]) %} | %number %WS "igualQue" %WS %number {% (d) => (d[0] == d[4]) %} | %number %WS "menorIgualQue" %WS %number {% (d) => (d[0] <= d[4]) %} | %number %WS "mayorIgualQue" %WS %number {% (d) => (d[0] >= d[4]) %}

suma -> %string espacioEnBlanco "+" espacioEnBlanco %string %finLinea {% (d) => 'console.log('+d[0]+'+'+d[4]+');' %}

declaraciones -> "entero" espacioEnBlanco %string espacioEnBlanco %asignacion espacioEnBlanco %number espacioEnBlanco cierreLinea {% (d) => 'let '+d[2]+' = '+d[6]+'; console.log('+d[2]+')' %} | "logico" espacioEnBlanco %string espacioEnBlanco %asignacion espacioEnBlanco "true" espacioEnBlanco cierreLinea {% function(d){  } %}| "logico" espacioEnBlanco %string espacioEnBlanco %asignacion espacioEnBlanco "false" espacioEnBlanco cierreLinea {% function(d){  } %}

#inicializacion -> espacioEnBlanco %string espacioEnBlanco %asignacion espacioEnBlanco %number %finLinea | espacioEnBlanco %string espacioEnBlanco %asignacion espacioEnBlanco "false" %finLinea | espacioEnBlanco %string espacioEnBlanco %asignacion espacioEnBlanco "true" %finLinea

cierreLinea -> null | cierreLinea %finLinea

espacioEnBlanco -> null | espacioEnBlanco %WS

