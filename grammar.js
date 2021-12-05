// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

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
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input", "symbols": ["statement"]},
    {"name": "input", "symbols": ["operacionlogica"]},
    {"name": "input", "symbols": ["funcionStatement"]},
    {"name": "input", "symbols": ["funcionCall"]},
    {"name": "statement", "symbols": ["whileStatement"]},
    {"name": "statement", "symbols": ["whileStatement", "statement"]},
    {"name": "whileStatement", "symbols": [{"literal":"mientrasQue"}, "espacioEnBlanco", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "bloquecodigo"]},
    {"name": "funcionStatement", "symbols": ["nombreFuncion", "espacioEnBlanco", (lexer.has("lparen") ? {type: "lparen"} : lparen), (lexer.has("rparen") ? {type: "rparen"} : rparen), "espacioEnBlanco", "bloquecodigo"]},
    {"name": "funcionStatement", "symbols": ["nombreFuncion", "espacioEnBlanco", (lexer.has("lparen") ? {type: "lparen"} : lparen), "values", (lexer.has("rparen") ? {type: "rparen"} : rparen), "espacioEnBlanco", "bloquecodigo"]},
    {"name": "funcionCall", "symbols": ["nombre", "espacioEnBlanco", (lexer.has("lparen") ? {type: "lparen"} : lparen), (lexer.has("rparen") ? {type: "rparen"} : rparen), "espacioEnBlanco"]},
    {"name": "funcionCall", "symbols": ["nombre", "espacioEnBlanco", (lexer.has("lparen") ? {type: "lparen"} : lparen), "values", (lexer.has("rparen") ? {type: "rparen"} : rparen), "espacioEnBlanco"]},
    {"name": "statement", "symbols": ["ifStatement"]},
    {"name": "statement", "symbols": ["ifStatement", "statement"]},
    {"name": "ifStatement", "symbols": [{"literal":"si"}, "espacioEnBlanco", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "espacioEnBlanco", {"literal":"entonces"}, "espacioEnBlanco", "bloquecodigo"]},
    {"name": "ifStatement", "symbols": [{"literal":"si"}, (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), {"literal":"entonces"}, "bloquecodigo", {"literal":"sin't"}, "bloquecodigo"]},
    {"name": "statement", "symbols": ["bloquecodigo"]},
    {"name": "bloquecodigo", "symbols": [(lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "statement", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "bloquecodigo", "symbols": [(lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "espacioEnBlanco", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)]},
    {"name": "statement", "symbols": ["value"]},
    {"name": "statement", "symbols": ["value", "statement"]},
    {"name": "statement", "symbols": ["declaraciones"]},
    {"name": "values", "symbols": ["value"]},
    {"name": "values", "symbols": ["value", "values"]},
    {"name": "value", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "value", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "value", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "value", "symbols": [(lexer.has("keyword") ? {type: "keyword"} : keyword)]},
    {"name": "value", "symbols": [(lexer.has("stringQuotes") ? {type: "stringQuotes"} : stringQuotes)]},
    {"name": "value", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)]},
    {"name": "value", "symbols": [(lexer.has("characterKey") ? {type: "characterKey"} : characterKey)]},
    {"name": "value", "symbols": [(lexer.has("comparadorNumerico") ? {type: "comparadorNumerico"} : comparadorNumerico)]},
    {"name": "value", "symbols": ["operacionlogica"]},
    {"name": "nombreFuncion", "symbols": [(lexer.has("tipoVariable") ? {type: "tipoVariable"} : tipoVariable), "espacioEnBlanco", "nombre"]},
    {"name": "nombre", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "nombre", "symbols": [(lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", "nombreFuncion"]},
    {"name": "operacionlogica", "symbols": [(lexer.has("string") ? {type: "string"} : string), (lexer.has("WS") ? {type: "WS"} : WS), (lexer.has("comparadorNumerico") ? {type: "comparadorNumerico"} : comparadorNumerico), (lexer.has("WS") ? {type: "WS"} : WS), (lexer.has("string") ? {type: "string"} : string)], "postprocess": function(d){ return { operador: d[2], lOperador: d[0], rOperador: d[4] }; }},
    {"name": "operacionlogica", "symbols": [(lexer.has("number") ? {type: "number"} : number), (lexer.has("WS") ? {type: "WS"} : WS), (lexer.has("comparadorNumerico") ? {type: "comparadorNumerico"} : comparadorNumerico), (lexer.has("WS") ? {type: "WS"} : WS), (lexer.has("number") ? {type: "number"} : number)], "postprocess": function(d){ return { operador: d[2], lOperador: d[0], rOperador: d[4] }; }},
    {"name": "declaraciones", "symbols": [{"literal":"entero"}, (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", (lexer.has("asignacion") ? {type: "asignacion"} : asignacion), "espacioEnBlanco", (lexer.has("number") ? {type: "number"} : number)]},
    {"name": "declaraciones", "symbols": [{"literal":"string"}, (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", (lexer.has("asignacion") ? {type: "asignacion"} : asignacion), "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string)]},
    {"name": "declaraciones", "symbols": [{"literal":"string"}, (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", (lexer.has("asignacion") ? {type: "asignacion"} : asignacion), "espacioEnBlanco", (lexer.has("stringQuotes") ? {type: "stringQuotes"} : stringQuotes)]},
    {"name": "espacioEnBlanco", "symbols": []},
    {"name": "espacioEnBlanco", "symbols": ["espacioEnBlanco", (lexer.has("WS") ? {type: "WS"} : WS)]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
