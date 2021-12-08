@{%
const moo = require('moo');
const {compile} = moo;

const lexer = compile({
    asignacion: ['<<<'],
    tipoVariable: ['entero', 'logico', 'decimalL', 'decimalC'],
    operadores: ['+', '-', '*', '/'],
    operadoresLogicos: ['menorQue', 'mayorQue', 'igualQue', 'menorIgualQue', 'mayorIgualQue', 'diferenteQue'],
    operadoresCortos: ["mas mas", "menos menos"],
    keyword: ['Para', 'mientrasQue', 'si', "sin't", 'caso', 'retornar', 'impresion#', 'salto'],
    WS:      /[ \t]{1,}/,
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

input -> "," findelinea statements findelinea "," {% (d) => console.log(''+d[2]+';') %}
#"," findelinea statements findelinea "," {% (d) => console.log(''+d[2]+';') %}  
#statements {% (d) => eval(''+d[0]+';') %} 

statement -> ifStatement "|" {% (d) => d[0] %} 

ifStatement -> "si" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket {% (d) => 'if('+d[3]+'){'+d[10]+'}' %}

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

operacion -> (%string | %number) (espacioEnBlanco | null) "+" (espacioEnBlanco | null) ( (%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'+'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "-" (espacioEnBlanco | null) ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'-'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "*" (espacioEnBlanco | null) ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'*'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "/" (espacioEnBlanco | null) ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'/'+d[4]+'' %}

operacionlogica -> (%string | %number) (espacioEnBlanco | null) "mayorQue" (espacioEnBlanco | null) ((%string | %number) | operacionlogica) findelinea {% (d) => ''+d[0]+'>'+d[4]+'' %}
        | (%string | %number) (espacioEnBlanco | null) "menorQue" (espacioEnBlanco | null) ((%string | %number) | operacionlogica) findelinea {% (d) => ''+d[0]+'<'+d[4]+'' %}
        | (%string | %number) (espacioEnBlanco | null) "mayorIgualQue" (espacioEnBlanco | null) ((%string | %number) | operacionlogica) findelinea {% (d) => ''+d[0]+'>='+d[4]+'' %}
        | (%string | %number) (espacioEnBlanco | null) "menorIgualQue" (espacioEnBlanco | null) ((%string | %number) | operacionlogica) findelinea {% (d) => ''+d[0]+'<='+d[4]+'' %}
        | (%string | %number) (espacioEnBlanco | null) "igualQue" (espacioEnBlanco | null) ((%string | %number) | operacionlogica) findelinea {% (d) => ''+d[0]+'=='+d[4]+'' %}
        | (%string | %number) (espacioEnBlanco | null) "diferenteQue" (espacioEnBlanco | null) ((%string | %number) | operacionlogica) findelinea {% (d) => ''+d[0]+'!='+d[4]+'' %}

declaracion -> "entero" (espacioEnBlanco | null) %string (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) %number findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | "logico" (espacioEnBlanco | null) %string (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) ("true" | "false") findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | ("decimalC" | "decimalL") (espacioEnBlanco | null) %string (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) (%numberDecimal | %number) findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %}

findelinea -> espacioEnBlanco 
        | %NL:* {% (d) => '' %} 
        | %finLinea findelinea {% (d) => ';' %}

espacioEnBlanco -> %WS {% (d) => ' ' %}