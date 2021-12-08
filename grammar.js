// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

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
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input", "symbols": ["statement"], "postprocess": (d) => eval(''+d[0]+';')},
    {"name": "statement", "symbols": ["operacion"]},
    {"name": "statement", "symbols": ["impStatement"]},
    {"name": "statement", "symbols": ["declaracion"]},
    {"name": "statement", "symbols": ["declaracion", "statement", "findelinea"], "postprocess": (d) => ''+d[0]+''+d[1]},
    {"name": "statement", "symbols": ["statement", "impStatement", "findelinea"], "postprocess": (d) => ''+d[0]+''+d[1]},
    {"name": "statement", "symbols": ["statement", (lexer.has("NL") ? {type: "NL"} : NL), "statement"], "postprocess": (d) => d[0]+'; '+d[2]},
    {"name": "impStatement", "symbols": [{"literal":"impresion#"}, "imp"], "postprocess": (d) => 'console.log('+d[1]+')'},
    {"name": "imp", "symbols": [(lexer.has("stringQuotes") ? {type: "stringQuotes"} : stringQuotes), "findelinea"], "postprocess": (d) => d[0]},
    {"name": "imp", "symbols": ["imp", {"literal":"#"}, (lexer.has("string") ? {type: "string"} : string), "findelinea"], "postprocess": (d) => d[0]+'+'+d[2]},
    {"name": "imp", "symbols": ["imp", {"literal":"#"}, (lexer.has("string") ? {type: "string"} : string), {"literal":"#"}, "imp", "findelinea"], "postprocess": (d) => d[0]+'+'+d[2]+'+'+d[4]},
    {"name": "imp", "symbols": ["imp", {"literal":"#"}, "operacion", "findelinea"], "postprocess": (d) => ''+d[0]+'+('+d[2]+')'},
    {"name": "imp", "symbols": ["imp", {"literal":"#"}, "operacion", {"literal":"#"}, "imp", "findelinea"], "postprocess": (d) => ''+d[0]+'+('+d[2]+')+'+d[4]},
    {"name": "operacion", "symbols": [(lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"+"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "findelinea"], "postprocess": (d) => ''+d[0]+'+'+d[4]+''},
    {"name": "operacion", "symbols": [(lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"-"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "findelinea"], "postprocess": (d) => ''+d[0]+'-'+d[4]+''},
    {"name": "operacion", "symbols": [(lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"*"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "findelinea"], "postprocess": (d) => ''+d[0]+'*'+d[4]+''},
    {"name": "operacion", "symbols": [(lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"/"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "findelinea"], "postprocess": (d) => ''+d[0]+'/'+d[4]+''},
    {"name": "declaracion", "symbols": [{"literal":"entero"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"<<<"}, "espacioEnBlanco", (lexer.has("number") ? {type: "number"} : number), "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+';'},
    {"name": "findelinea", "symbols": ["espacioEnBlanco"]},
    {"name": "findelinea", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": (d) => ''},
    {"name": "findelinea", "symbols": [(lexer.has("finLinea") ? {type: "finLinea"} : finLinea), "findelinea"], "postprocess": (d) => ';'},
    {"name": "espacioEnBlanco", "symbols": []},
    {"name": "espacioEnBlanco", "symbols": ["espacioEnBlanco", (lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": (d) => ' '}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
