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
    numberDecimal:  /[0-9]+\.{0,1}[0-9]+/,
    number: /[0-9]+/,
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

input -> statements {% (d) => eval(''+d[0]+';') %} 
#statements {% (d) => console.log(''+d[0]+';') %} 

statements -> statement 
        | statements (%NL | null) statement {% (d) => d[0]+'; '+d[2] %}

statement -> operacion 
        | impStatement 
        | declaracion

impStatement -> "impresion#" imp findelinea {% (d) => 'console.log('+d[1]+')' %}

imp -> %string {% (d) => d[0] %} 
        | operacion {% (d) => '('+d[0]+')' %} 
        | %stringQuotes {% (d) => d[0] %} 
        | imp "#" imp {% (d) => d[0]+'+'+d[2] %} 
#| imp "#" %string "#" imp findelinea {% (d) => d[0]+'+'+d[2]+'+'+d[4] %} | imp "#" operacion findelinea {% (d) => ''+d[0]+'+('+d[2]+')' %} | imp "#" operacion "#" imp findelinea {% (d) => ''+d[0]+'+('+d[2]+')+'+d[4] %}

operacion -> (%string | %number) espacioEnBlanco "+" espacioEnBlanco ( (%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'+'+d[4]+'' %} 
        | (%string | %number) espacioEnBlanco "-" espacioEnBlanco ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'-'+d[4]+'' %} 
        | (%string | %number) espacioEnBlanco "*" espacioEnBlanco ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'*'+d[4]+'' %} 
        | (%string | %number) espacioEnBlanco "/" espacioEnBlanco ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'/'+d[4]+'' %}

declaracion -> "entero" espacioEnBlanco %string espacioEnBlanco "<<<" espacioEnBlanco %number findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | "logico" espacioEnBlanco %string espacioEnBlanco "<<<" espacioEnBlanco ("true" | "false") findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | ("decimalC" | "decimalL") espacioEnBlanco %string espacioEnBlanco "<<<" espacioEnBlanco (%numberDecimal | %number) findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %}

findelinea -> espacioEnBlanco 
        | %NL {% (d) => '' %} 
        | %finLinea findelinea {% (d) => '' %}

espacioEnBlanco -> null | espacioEnBlanco %WS {% (d) => ' ' %}