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
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input", "symbols": ["statements"], "postprocess": (d) => eval(''+d[0]+';')},
    {"name": "statements", "symbols": ["statement"]},
    {"name": "statements$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "statements$subexpression$1", "symbols": []},
    {"name": "statements", "symbols": ["statements", "statements$subexpression$1", "statement"], "postprocess": (d) => d[0]+'; '+d[2]},
    {"name": "statement", "symbols": ["operacion"]},
    {"name": "statement", "symbols": ["impStatement"]},
    {"name": "statement", "symbols": ["declaracion"]},
    {"name": "impStatement", "symbols": [{"literal":"impresion#"}, "imp", "findelinea"], "postprocess": (d) => 'console.log('+d[1]+')'},
    {"name": "imp", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": (d) => d[0]},
    {"name": "imp", "symbols": ["operacion"], "postprocess": (d) => '('+d[0]+')'},
    {"name": "imp", "symbols": [(lexer.has("stringQuotes") ? {type: "stringQuotes"} : stringQuotes)], "postprocess": (d) => d[0]},
    {"name": "imp", "symbols": ["imp", {"literal":"#"}, "imp"], "postprocess": (d) => d[0]+'+'+d[2]},
    {"name": "operacion$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$2$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$2$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$2", "symbols": ["operacion$subexpression$2$subexpression$1"]},
    {"name": "operacion$subexpression$2", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$1", "espacioEnBlanco", {"literal":"+"}, "espacioEnBlanco", "operacion$subexpression$2", "findelinea"], "postprocess": (d) => ''+d[0]+'+'+d[4]+''},
    {"name": "operacion$subexpression$3", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$3", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$4$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$4$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$4", "symbols": ["operacion$subexpression$4$subexpression$1"]},
    {"name": "operacion$subexpression$4", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$3", "espacioEnBlanco", {"literal":"-"}, "espacioEnBlanco", "operacion$subexpression$4", "findelinea"], "postprocess": (d) => ''+d[0]+'-'+d[4]+''},
    {"name": "operacion$subexpression$5", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$5", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$6$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$6$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$6", "symbols": ["operacion$subexpression$6$subexpression$1"]},
    {"name": "operacion$subexpression$6", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$5", "espacioEnBlanco", {"literal":"*"}, "espacioEnBlanco", "operacion$subexpression$6", "findelinea"], "postprocess": (d) => ''+d[0]+'*'+d[4]+''},
    {"name": "operacion$subexpression$7", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$7", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$8$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$8$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$8", "symbols": ["operacion$subexpression$8$subexpression$1"]},
    {"name": "operacion$subexpression$8", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$7", "espacioEnBlanco", {"literal":"/"}, "espacioEnBlanco", "operacion$subexpression$8", "findelinea"], "postprocess": (d) => ''+d[0]+'/'+d[4]+''},
    {"name": "declaracion", "symbols": [{"literal":"entero"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"<<<"}, "espacioEnBlanco", (lexer.has("number") ? {type: "number"} : number), "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "declaracion$subexpression$1", "symbols": [{"literal":"true"}]},
    {"name": "declaracion$subexpression$1", "symbols": [{"literal":"false"}]},
    {"name": "declaracion", "symbols": [{"literal":"logico"}, "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"<<<"}, "espacioEnBlanco", "declaracion$subexpression$1", "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "declaracion$subexpression$2", "symbols": [{"literal":"decimalC"}]},
    {"name": "declaracion$subexpression$2", "symbols": [{"literal":"decimalL"}]},
    {"name": "declaracion$subexpression$3", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "declaracion$subexpression$3", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "declaracion", "symbols": ["declaracion$subexpression$2", "espacioEnBlanco", (lexer.has("string") ? {type: "string"} : string), "espacioEnBlanco", {"literal":"<<<"}, "espacioEnBlanco", "declaracion$subexpression$3", "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "findelinea", "symbols": ["espacioEnBlanco"]},
    {"name": "findelinea", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": (d) => ''},
    {"name": "findelinea", "symbols": [(lexer.has("finLinea") ? {type: "finLinea"} : finLinea), "findelinea"], "postprocess": (d) => ''},
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
