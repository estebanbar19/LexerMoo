@{%
const moo = require('moo');
const {compile} = moo;

const lexer = compile({
    asignacion: ['<<<'],
    tipoVariable: ['entero', 'logico', 'decimalL', 'decimalC'],
    operadores: ['+', '-', '*', '/'],
    operadoresCortos: ["mas mas", "menos menos"],
    keyword: ['Para', 'mientrasQue', 'si', "sin't", 'caso', 'retornar', 'impresion#', 'salto'],
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

input -> statement {% (d) => eval(''+d[0]+';') %}

statement -> operacion | impStatement | declaracion | declaracion statement findelinea {% (d) => ''+d[0]+''+d[1] %} | statement impStatement findelinea {% (d) => ''+d[0]+''+d[1] %} 

impStatement -> "impresion#" imp {% (d) => 'console.log('+d[1]+')' %}

imp -> findelinea | %stringQuotes findelinea {% (d) => d[0] %} | imp "#" %string findelinea {% (d) => d[0]+'+'+d[2] %} | imp "#" %string "#" imp findelinea {% (d) => d[0]+'+'+d[2]+'+'+d[4] %} | imp "#" operacion findelinea {% (d) => ''+d[0]+'+('+d[2]+')' %}
# | imp "#" operacion findelinea {% (d) => d[0]+'+'+eval('+d[2]+')+''  %} | imp "#" operacion "#" imp findelinea {% (d) => d[0]+'+'+d[2]+'+'+d[4] %}

operacion -> %string espacioEnBlanco "+" espacioEnBlanco %string findelinea {% (d) => ''+d[0]+'+'+d[4]+'' %} | %string espacioEnBlanco "-" espacioEnBlanco %string findelinea {% (d) => ''+d[0]+'-'+d[4]+'' %} | %string espacioEnBlanco "*" espacioEnBlanco %string findelinea {% (d) => ''+d[0]+'*'+d[4]+'' %} | %string espacioEnBlanco "/" espacioEnBlanco %string findelinea {% (d) => ''+d[0]+'/'+d[4]+'' %}

declaracion -> "entero" espacioEnBlanco %string espacioEnBlanco "<<<" espacioEnBlanco %number findelinea {% (d) => 'let '+d[2]+' = '+d[6]+';'  %}

findelinea -> espacioEnBlanco | %NL | %finLinea findelinea

espacioEnBlanco -> null | espacioEnBlanco %WS