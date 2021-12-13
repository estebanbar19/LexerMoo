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
    characterKey: ['#', ',' , '~', '.'],
    NL:      { match: /\n/, lineBreaks: true },
});
%}

@lexer lexer

input -> "~" findelinea "entero" (espacioEnBlanco | null) "genesis" (espacioEnBlanco | null) %lparen (espacioEnBlanco | null) %rparen (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* "apocalipsis" (espacioEnBlanco | null) (findelinea | null ) %rbracket (%NL | %WS):* findelinea "~" {% (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[12]+';') %} 
        | "~" findelinea %NL:* statements (%NL | %WS):* "entero" (espacioEnBlanco | null) "genesis" (espacioEnBlanco | null) %lparen (espacioEnBlanco | null) %rparen (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* "apocalipsis" (espacioEnBlanco | null) (findelinea | null ) %rbracket (%NL | %WS):* findelinea "~" {% (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[3]+'; '+d[15]+';') %} 
        | "~" findelinea "entero" (espacioEnBlanco | null) "genesis" (espacioEnBlanco | null) %lparen (espacioEnBlanco | null) %rparen (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* "apocalipsis" (espacioEnBlanco | null) (findelinea | null ) %rbracket (espacioEnBlanco | null) (findelinea | null ) %NL:* statements (%NL | %WS):* findelinea "~" {% (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[12]+'; '+d[21]+';') %} 
#"~" findelinea statements findelinea "~" {% (d) => console.log(''+d[2]+';') %}
#"~" findelinea statements findelinea "~" {% (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[2]+';') %} 

statement -> ifStatement {% (d) => d[0] %} 
        | whileStatement {% (d) => d[0] %} 
        | forStatement {% (d) => d[0] %} 
        | doWhileStatement {% (d) => d[0] %} 
        | funcionStatement {% (d) => d[0] %}
        | returnStatement {% (d) => d[0] %}
        | callFuncionStatement (findelinea | null) {% (d) => d[0] %}

imp -> callFuncionStatement {% (d) => d[0] %}

ifStatement -> "si" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'if('+d[3]+'){\n'+d[10]+'\n}' %} | ifStatement (espacioEnBlanco | null) "sin't" (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'else{\n'+d[6]+'\n}' %}
        | "si" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'if('+d[3]+'){}' %} | ifStatement (espacioEnBlanco | null) "sin't" (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'else{}' %}

whileStatement -> "mientrasQue" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'while('+d[3]+'){\n'+d[10]+'\n}' %}
        | "mientrasQue" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'while('+d[3]+'){}' %}

doWhileStatement -> "hacer" (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) "mientrasQue" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) (findelinea | null) {% (d) => 'do{\n'+d[4]+'\n}while('+d[11]+')' %}
        | "hacer" (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) "mientrasQue" (espacioEnBlanco | null) %lparen operacionlogica %rparen (espacioEnBlanco | null) (findelinea | null) {% (d) => 'do{}while('+d[11]+')' %}

forStatement -> "Para" (espacioEnBlanco | null) %lparen (espacioEnBlanco | null) declaracion (espacioEnBlanco | null) "|" (espacioEnBlanco | null) operacionlogica (espacioEnBlanco | null) "|" (espacioEnBlanco | null) (operacion | operacionCorta | operacionlogica) (espacioEnBlanco | null) %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'for('+d[4]+';'+d[8]+';'+d[12]+'){\n'+d[20]+'\n}' %} 
        | "Para" (espacioEnBlanco | null) %lparen (espacioEnBlanco | null) declaracion (espacioEnBlanco | null) "|" (espacioEnBlanco | null) operacionlogica (espacioEnBlanco | null) "|" (espacioEnBlanco | null) (operacion | operacionCorta | operacionlogica) (espacioEnBlanco | null) %rparen (espacioEnBlanco | null) "entonces" (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'for('+d[4]+';'+d[8]+';'+d[12]+'){}' %}

callFuncionStatement -> %lcorch (espacioEnBlanco | null) argumentos (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) {% (d) => ''+d[6]+'('+d[2]+')' %}
        | %lcorch (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) {% (d) => ''+d[4]+'()' %}

funcionStatement -> %tipoVariable (espacioEnBlanco | null) %lcorch (espacioEnBlanco | null) argumentos (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'function '+d[8]+'('+d[4]+'){\n'+d[12]+'\n}' %} 
        | %tipoVariable (espacioEnBlanco | null) %lcorch (espacioEnBlanco | null) argumentos (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'function '+d[8]+'('+d[4]+'){}' %}
        | %tipoVariable (espacioEnBlanco | null) %lcorch (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) %lbracket %NL:* statements (%NL | %WS):* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'function '+d[6]+'(){\n'+d[10]+'\n}' %} 
        | %tipoVariable (espacioEnBlanco | null) %lcorch (espacioEnBlanco | null) %rcorch (espacioEnBlanco | null) %string (espacioEnBlanco | null) %lbracket %NL:* %rbracket (espacioEnBlanco | null) (findelinea | null) {% (d) => 'function '+d[6]+'(){}' %}

returnStatement -> "retornar" (espacioEnBlanco | null) value (espacioEnBlanco | null) (findelinea | null) {% (d) => 'return '+d[2]+'' %} | "retornar" (espacioEnBlanco | null) variable (espacioEnBlanco | null) (findelinea | null) {% (d) => 'return '+d[2]+'' %}

argumentos -> (variable | %number) | argumentos (espacioEnBlanco | null) "," (espacioEnBlanco | null) (variable| %number) {% (d) => ''+d[0]+','+d[4]+'' %}

statements -> statement 
        | statements (%NL | null) statement {% (d) => d[0]+';\n'+d[2] %}

statement -> operacion
        | impStatement 
        | declaracion 
        | asignacion 
        | operacionCorta
        | espacioEnBlanco statement {% (d) => d[1] %}

impStatement -> "impresion#" imp (findelinea | null) {% (d) => 'textoEjecucion.innerHTML = textoEjecucion.innerHTML+'+d[1]+'' %}

imp -> variable {% (d) => d[0] %} 
        | (operacion | operacionCorta | operacionlogica) {% (d) => '('+d[0]+')' %} 
        | %stringQuotes {% (d) => d[0] %}  
        | (%number | numberDecimal) {% (d) => '('+d[0]+')' %} 
        | imp "#" imp {% (d) => d[0]+'+'+d[2] %}

asignacion -> %string (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) value findelinea {% (d) => ''+d[0]+' = '+d[4]+'' %}

value -> %number | %stringQuotes | "true" | "false" | operacion | operacionCorta | operacionlogica

operacion -> (%string | %number) (espacioEnBlanco | null) "+" (espacioEnBlanco | null) ( (%string | %number) | operacion) {% (d) => ''+d[0]+'+'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "-" (espacioEnBlanco | null) ((%string | %number) | operacion) {% (d) => ''+d[0]+'-'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "*" (espacioEnBlanco | null) ((%string | %number) | operacion) {% (d) => ''+d[0]+'*'+d[4]+'' %} 
        | (%string | %number) (espacioEnBlanco | null) "/" (espacioEnBlanco | null) ((%string | %number) | operacion) {% (d) => ''+d[0]+'/'+d[4]+'' %}

operacionlogica -> (%string | %number | numberDecimal) (espacioEnBlanco | null) "mayorQue" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | operacionlogica) (espacioEnBlanco | null) {% (d) => ''+d[0]+'>'+d[4]+'' %}
        | (%string | %number | numberDecimal) (espacioEnBlanco | null) "menorQue" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | operacionlogica) (espacioEnBlanco | null) {% (d) => ''+d[0]+'<'+d[4]+'' %}
        | (%string | %number | numberDecimal) (espacioEnBlanco | null) "mayorIgualQue" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | operacionlogica) (espacioEnBlanco | null) {% (d) => ''+d[0]+'>='+d[4]+'' %}
        | (%string | %number | numberDecimal) (espacioEnBlanco | null) "menorIgualQue" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | operacionlogica) (espacioEnBlanco | null) {% (d) => ''+d[0]+'<='+d[4]+'' %}
        | (%string | %number | numberDecimal) (espacioEnBlanco | null) "igualQue" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | operacionlogica) (espacioEnBlanco | null) {% (d) => ''+d[0]+'=='+d[4]+'' %}
        | (%string | %number | numberDecimal) (espacioEnBlanco | null) "diferenteQue" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | operacionlogica) (espacioEnBlanco | null) {% (d) => ''+d[0]+'!='+d[4]+'' %}

#comparacionLogica -> (%string | %number | numberDecimal) (espacioEnBlanco | null) "ooo" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | comparacionLogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'||'+d[4]+'' %}
#        | (%string | %number | numberDecimal) (espacioEnBlanco | null) "yyy" (espacioEnBlanco | null) ((%string | %number | numberDecimal) | comparacionLogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+d[0]+'&&'+d[4]+'' %}
#        | "!!" (%string | %number | numberDecimal | comparacionLogica) (espacioEnBlanco | null) (findelinea | null) {% (d) => ''+'!'+d[1]+'' %}

operacionCorta -> (%string | %number) "_mas mas" (espacioEnBlanco | null) {% (d) => ''+d[0]+'+=1' %}
        | (%string | %number) "_menos menos" (espacioEnBlanco | null) {% (d) => ''+d[0]+'-=1' %}

declaracion -> "entero" (espacioEnBlanco | null) variable (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) %number (espacioEnBlanco | null) (findelinea | null) {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | "logico" (espacioEnBlanco | null) variable (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) ("true" | "false") (espacioEnBlanco | null) (findelinea | null) {% (d) => 'let '+d[2]+' = '+d[6]+''  %} 
        | ("decimalC" | "decimalL") (espacioEnBlanco | null) variable (espacioEnBlanco | null) "<<<" (espacioEnBlanco | null) (numberDecimal | %number) (espacioEnBlanco | null) (findelinea | null) {% (d) => 'let '+d[2]+' = '+d[6]+''  %}

variable -> %string %number:* {% (d) => ''+d[0]+d[1]+'' %}

numberDecimal -> %number "." %number {% (d) => d[0]+'.'+d[2] %}

findelinea -> espacioEnBlanco 
        | %NL
        | %finLinea findelinea {% (d) => ';' %}

espacioEnBlanco -> %WS {% (d) => ' ' %}