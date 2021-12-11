@{%
const moo = require('moo');
const {compile} = moo;

const lexer = compile({
    asignacion: ['<<<'],
    tipoVariable: ['entero', 'logico', 'decimalL', 'decimalC'],
    operadores: ['+', '-', '*', '/'],
    operadoresLogicos: ['menorQue', 'mayorQue', 'igualQue', 'menorIgualQue', 'mayorIgualQue', 'diferenteQue'],
    operadoresCortos: ["_mas mas", "_menos menos"],
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
    lcorch: '[',
    rcorch: ']',
    finLinea: '|',
    characterKey: ['#', ',' , '~'],
    NL:      { match: /\n/, lineBreaks: true },
});
%}

@lexer lexer

input -> "~" findelinea statements findelinea "~" {% (d) => console.log(''+d[2]+';') %}
#"," findelinea statements findelinea "," {% (d) => console.log(''+d[2]+';') %}
#"," findelinea statements findelinea "," {% (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[2]+';') %} 

statement -> ifStatement {% (d) => d[0] %} 
        | whileStatement {% (d) => d[0] %} 
        | forStatement {% (d) => d[0] %} 
        | doWhileStatement {% (d) => d[0] %} 
        | funcionStatement {% (d) => d[0] %}
        | returnStatement {% (d) => d[0] %}

ifStatement -> "si" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'if('+d[3]+'){'+d[10]+'}' %} | ifStatement (espacioEnBlanco | null) "sin't" (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'else{'+d[6]+'}' %}

whileStatement -> "mientrasQue" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'while('+d[3]+'){'+d[10]+'}' %}

doWhileStatement -> "hacer" (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) "mientrasQue" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) (findelinea | null) {% (d) => 'do{'+d[4]+'}while('+d[11]+')' %}

forStatement -> "Para" (espacioEnBlanco | null) %lparen (espacioEnBlanco | null) declaracion (espacioEnBlanco | null) "|" (espacioEnBlanco | null) operacionlogica (espacioEnBlanco | null) "|" (espacioEnBlanco | null) (operacion | operacionCorta | operacionlogica) (espacioEnBlanco | null) %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'for('+d[4]+';'+d[8]+';'+d[12]+'){'+d[20]+'}' %}

funcionStatement -> %tipoVariable (espacioEnBlanco | null) %lcorch (espacioEnBlanco | null) argumentos (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) %lbracket (%NL | %WS):* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'function '+d[8]+'('+d[4]+'){'+d[12]+'}' %}

returnStatement -> "retornar" (espacioEnBlanco | null) value (espacioEnBlanco | null) (findelinea | null) {% (d) => 'return '+d[2]+'' %} | "retornar" (espacioEnBlanco | null) variable (espacioEnBlanco | null) (findelinea | null) {% (d) => 'return '+d[2]+'' %}

argumentos -> variable | argumentos (espacioEnBlanco | null) "," (espacioEnBlanco | null) variable {% (d) => ''+d[0]+','+d[4]+'' %}

statements -> statement 
        | statements (%NL | null) statement {% (d) => d[0]+'; '+d[2] %}

statement -> operacion
        | impStatement 
        | declaracion 
        | asignacion 
        | operacionCorta 

impStatement -> "impresion#" imp findelinea {% (d) => 'textoEjecucion.innerHTML = textoEjecucion.innerHTML+'+d[1]+'' %}
#"impresion#" imp findelinea {% (d) => 'console.log('+d[1]+')' %}

imp -> variable {% (d) => d[0] %} 
        | (operacion | operacionCorta) {% (d) => '('+d[0]+')' %} 
        | %stringQuotes {% (d) => d[0] %}  
        | imp "#" imp {% (d) => d[0]+'+'+d[2] %}

asignacion -> %string (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) value findelinea {% (d) => ''+d[0]+' = '+d[4]+'' %}

value -> %number | %stringQuotes | "true" | "false" | operacion | operacionCorta | operacionlogica

operacion -> (%string | %number) (espacioEnBlanco | null) "+" (espacioEnBlanco | null) ( (%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'+'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "-" (espacioEnBlanco | null) ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'-'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "*" (espacioEnBlanco | null) ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'*'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "/" (espacioEnBlanco | null) ((%string | %number) | operacion) findelinea {% (d) => ''+d[0]+'/'+d[4]+'' %}

operacionlogica -> (%string | %number | %numberDecimal) (espacioEnBlanco | null) "mayorQue" (espacioEnBlanco | null) ((%string | %number | %numberDecimal) | operacionlogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'>'+d[4]+'' %}
        | (%string | %number | %numberDecimal) (espacioEnBlanco | null) "menorQue" (espacioEnBlanco | null) ((%string | %number | %numberDecimal) | operacionlogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'<'+d[4]+'' %}
        | (%string | %number | %numberDecimal) (espacioEnBlanco | null) "mayorIgualQue" (espacioEnBlanco | null) ((%string | %number | %numberDecimal) | operacionlogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'>='+d[4]+'' %}
        | (%string | %number | %numberDecimal) (espacioEnBlanco | null) "menorIgualQue" (espacioEnBlanco | null) ((%string | %number | %numberDecimal) | operacionlogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'<='+d[4]+'' %}
        | (%string | %number | %numberDecimal) (espacioEnBlanco | null) "igualQue" (espacioEnBlanco | null) ((%string | %number | %numberDecimal) | operacionlogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'=='+d[4]+'' %}
        | (%string | %number | %numberDecimal) (espacioEnBlanco | null) "diferenteQue" (espacioEnBlanco | null) ((%string | %number | %numberDecimal) | operacionlogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'!='+d[4]+'' %}

operacionCorta -> (%string | %number) "_mas mas" findelinea {% (d) => ''+d[0]+'+=1' %}
        | (%string | %number) "_menos menos" findelinea {% (d) => ''+d[0]+'-=1' %}

declaracion -> "entero" (espacioEnBlanco | null) variable (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) %number findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | "logico" (espacioEnBlanco | null) variable (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) ("true" | "false") findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | ("decimalC" | "decimalL") (espacioEnBlanco | null) variable (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) (%numberDecimal | %number) findelinea {% (d) => 'let '+d[2]+' = '+d[6]+''  %}

variable -> %string %number:* {% (d) => ''+d[0]+d[1]+'' %}

findelinea -> espacioEnBlanco 
        | %NL
        | %finLinea findelinea {% (d) => ';' %}

espacioEnBlanco -> %WS {% (d) => ' ' %}