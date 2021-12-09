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
    finLinea: '|',
    characterKey: ['#', ','],
    NL:      { match: /\n/, lineBreaks: true },
});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input", "symbols": [{"literal":","}, "findelinea", "statements", "findelinea", {"literal":","}], "postprocess": (d) => eval(''+d[2]+';')},
    {"name": "statement", "symbols": ["ifStatement", {"literal":"|"}], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["whileStatement", {"literal":"|"}], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["forStatement", {"literal":"|"}], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["doWhileStatement", {"literal":"|"}], "postprocess": (d) => d[0]},
    {"name": "ifStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$1", "symbols": []},
    {"name": "ifStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$2", "symbols": []},
    {"name": "ifStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$3", "symbols": []},
    {"name": "ifStatement$ebnf$1", "symbols": []},
    {"name": "ifStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "ifStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ifStatement$ebnf$1", "symbols": ["ifStatement$ebnf$1", "ifStatement$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$ebnf$2", "symbols": []},
    {"name": "ifStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "ifStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ifStatement$ebnf$2", "symbols": ["ifStatement$ebnf$2", "ifStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement", "symbols": [{"literal":"si"}, "ifStatement$subexpression$1", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "ifStatement$subexpression$2", {"literal":"entonces"}, "ifStatement$subexpression$3", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "ifStatement$ebnf$1", "statements", "ifStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)], "postprocess": (d) => 'if('+d[3]+'){'+d[10]+'}'},
    {"name": "ifStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$4", "symbols": []},
    {"name": "ifStatement$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$5", "symbols": []},
    {"name": "ifStatement$ebnf$3", "symbols": []},
    {"name": "ifStatement$ebnf$3$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "ifStatement$ebnf$3$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ifStatement$ebnf$3", "symbols": ["ifStatement$ebnf$3", "ifStatement$ebnf$3$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$ebnf$4", "symbols": []},
    {"name": "ifStatement$ebnf$4$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "ifStatement$ebnf$4$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ifStatement$ebnf$4", "symbols": ["ifStatement$ebnf$4", "ifStatement$ebnf$4$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement", "symbols": ["ifStatement", "ifStatement$subexpression$4", {"literal":"sin't"}, "ifStatement$subexpression$5", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "ifStatement$ebnf$3", "statements", "ifStatement$ebnf$4", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)], "postprocess": (d) => ''+d[0]+'else{'+d[6]+'}'},
    {"name": "whileStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$1", "symbols": []},
    {"name": "whileStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$2", "symbols": []},
    {"name": "whileStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$3", "symbols": []},
    {"name": "whileStatement$ebnf$1", "symbols": []},
    {"name": "whileStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "whileStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "whileStatement$ebnf$1", "symbols": ["whileStatement$ebnf$1", "whileStatement$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "whileStatement$ebnf$2", "symbols": []},
    {"name": "whileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "whileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "whileStatement$ebnf$2", "symbols": ["whileStatement$ebnf$2", "whileStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "whileStatement", "symbols": [{"literal":"mientrasQue"}, "whileStatement$subexpression$1", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "whileStatement$subexpression$2", {"literal":"entonces"}, "whileStatement$subexpression$3", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "whileStatement$ebnf$1", "statements", "whileStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)], "postprocess": (d) => 'while('+d[3]+'){'+d[10]+'}'},
    {"name": "doWhileStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$1", "symbols": []},
    {"name": "doWhileStatement$ebnf$1", "symbols": []},
    {"name": "doWhileStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "doWhileStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "doWhileStatement$ebnf$1", "symbols": ["doWhileStatement$ebnf$1", "doWhileStatement$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doWhileStatement$ebnf$2", "symbols": []},
    {"name": "doWhileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "doWhileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "doWhileStatement$ebnf$2", "symbols": ["doWhileStatement$ebnf$2", "doWhileStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doWhileStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$2", "symbols": []},
    {"name": "doWhileStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$3", "symbols": []},
    {"name": "doWhileStatement", "symbols": [{"literal":"hacer"}, "doWhileStatement$subexpression$1", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "doWhileStatement$ebnf$1", "statements", "doWhileStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "doWhileStatement$subexpression$2", {"literal":"mientrasQue"}, "doWhileStatement$subexpression$3", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": (d) => 'do{'+d[4]+'}while('+d[11]+')'},
    {"name": "forStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$1", "symbols": []},
    {"name": "forStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$2", "symbols": []},
    {"name": "forStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$3", "symbols": []},
    {"name": "forStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$4", "symbols": []},
    {"name": "forStatement$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$5", "symbols": []},
    {"name": "forStatement$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$6", "symbols": []},
    {"name": "forStatement$subexpression$7", "symbols": ["operacion"]},
    {"name": "forStatement$subexpression$7", "symbols": ["operacionCorta"]},
    {"name": "forStatement$subexpression$7", "symbols": ["operacionlogica"]},
    {"name": "forStatement$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$8", "symbols": []},
    {"name": "forStatement$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$9", "symbols": []},
    {"name": "forStatement$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$10", "symbols": []},
    {"name": "forStatement$ebnf$1", "symbols": []},
    {"name": "forStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "forStatement$ebnf$1$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "forStatement$ebnf$1", "symbols": ["forStatement$ebnf$1", "forStatement$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "forStatement$ebnf$2", "symbols": []},
    {"name": "forStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "forStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "forStatement$ebnf$2", "symbols": ["forStatement$ebnf$2", "forStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "forStatement", "symbols": [{"literal":"Para"}, "forStatement$subexpression$1", (lexer.has("lparen") ? {type: "lparen"} : lparen), "forStatement$subexpression$2", "declaracion", "forStatement$subexpression$3", {"literal":"|"}, "forStatement$subexpression$4", "operacionlogica", "forStatement$subexpression$5", {"literal":"|"}, "forStatement$subexpression$6", "forStatement$subexpression$7", "forStatement$subexpression$8", (lexer.has("rparen") ? {type: "rparen"} : rparen), "forStatement$subexpression$9", {"literal":"entonces"}, "forStatement$subexpression$10", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "forStatement$ebnf$1", "statements", "forStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket)], "postprocess": (d) => 'for('+d[4]+';'+d[8]+';'+d[12]+'){'+d[20]+'}'},
    {"name": "statements", "symbols": ["statement"]},
    {"name": "statements$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "statements$subexpression$1", "symbols": []},
    {"name": "statements", "symbols": ["statements", "statements$subexpression$1", "statement"], "postprocess": (d) => d[0]+'; '+d[2]},
    {"name": "statement", "symbols": ["operacion"]},
    {"name": "statement", "symbols": ["impStatement"]},
    {"name": "statement", "symbols": ["declaracion"]},
    {"name": "statement", "symbols": ["asignacion"]},
    {"name": "statement", "symbols": ["operacionCorta"]},
    {"name": "impStatement", "symbols": [{"literal":"impresion#"}, "imp", "findelinea"], "postprocess": (d) => 'console.log('+d[1]+')'},
    {"name": "imp", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": (d) => d[0]},
    {"name": "imp$subexpression$1", "symbols": ["operacion"]},
    {"name": "imp$subexpression$1", "symbols": ["operacionCorta"]},
    {"name": "imp", "symbols": ["imp$subexpression$1"], "postprocess": (d) => '('+d[0]+')'},
    {"name": "imp", "symbols": [(lexer.has("stringQuotes") ? {type: "stringQuotes"} : stringQuotes)], "postprocess": (d) => d[0]},
    {"name": "imp", "symbols": ["imp", {"literal":"#"}, "imp"], "postprocess": (d) => d[0]+'+'+d[2]},
    {"name": "asignacion$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "asignacion$subexpression$1", "symbols": []},
    {"name": "asignacion$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "asignacion$subexpression$2", "symbols": []},
    {"name": "asignacion", "symbols": [(lexer.has("string") ? {type: "string"} : string), "asignacion$subexpression$1", {"literal":"<<<"}, "asignacion$subexpression$2", "value", "findelinea"], "postprocess": (d) => ''+d[0]+' = '+d[4]+''},
    {"name": "value", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "value", "symbols": [(lexer.has("stringQuotes") ? {type: "stringQuotes"} : stringQuotes)]},
    {"name": "value", "symbols": [{"literal":"true"}]},
    {"name": "value", "symbols": [{"literal":"false"}]},
    {"name": "value", "symbols": ["operacion"]},
    {"name": "value", "symbols": ["operacionCorta"]},
    {"name": "value", "symbols": ["operacionlogica"]},
    {"name": "operacion$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$2", "symbols": []},
    {"name": "operacion$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$3", "symbols": []},
    {"name": "operacion$subexpression$4$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$4$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$4", "symbols": ["operacion$subexpression$4$subexpression$1"]},
    {"name": "operacion$subexpression$4", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$1", "operacion$subexpression$2", {"literal":"+"}, "operacion$subexpression$3", "operacion$subexpression$4", "findelinea"], "postprocess": (d) => ''+d[0]+'+'+d[4]+''},
    {"name": "operacion$subexpression$5", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$5", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$6", "symbols": []},
    {"name": "operacion$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$7", "symbols": []},
    {"name": "operacion$subexpression$8$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$8$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$8", "symbols": ["operacion$subexpression$8$subexpression$1"]},
    {"name": "operacion$subexpression$8", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$5", "operacion$subexpression$6", {"literal":"-"}, "operacion$subexpression$7", "operacion$subexpression$8", "findelinea"], "postprocess": (d) => ''+d[0]+'-'+d[4]+''},
    {"name": "operacion$subexpression$9", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$9", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$10", "symbols": []},
    {"name": "operacion$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$11", "symbols": []},
    {"name": "operacion$subexpression$12$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$12$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$12", "symbols": ["operacion$subexpression$12$subexpression$1"]},
    {"name": "operacion$subexpression$12", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$9", "operacion$subexpression$10", {"literal":"*"}, "operacion$subexpression$11", "operacion$subexpression$12", "findelinea"], "postprocess": (d) => ''+d[0]+'*'+d[4]+''},
    {"name": "operacion$subexpression$13", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$13", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$14", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$14", "symbols": []},
    {"name": "operacion$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "operacion$subexpression$15", "symbols": []},
    {"name": "operacion$subexpression$16$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacion$subexpression$16$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacion$subexpression$16", "symbols": ["operacion$subexpression$16$subexpression$1"]},
    {"name": "operacion$subexpression$16", "symbols": ["operacion"]},
    {"name": "operacion", "symbols": ["operacion$subexpression$13", "operacion$subexpression$14", {"literal":"/"}, "operacion$subexpression$15", "operacion$subexpression$16", "findelinea"], "postprocess": (d) => ''+d[0]+'/'+d[4]+''},
    {"name": "operacionlogica$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$2", "symbols": []},
    {"name": "operacionlogica$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$3", "symbols": []},
    {"name": "operacionlogica$subexpression$4$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$4$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$4$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$4", "symbols": ["operacionlogica$subexpression$4$subexpression$1"]},
    {"name": "operacionlogica$subexpression$4", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$1", "operacionlogica$subexpression$2", {"literal":"mayorQue"}, "operacionlogica$subexpression$3", "operacionlogica$subexpression$4", "findelinea"], "postprocess": (d) => ''+d[0]+'>'+d[4]+''},
    {"name": "operacionlogica$subexpression$5", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$5", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$5", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$6", "symbols": []},
    {"name": "operacionlogica$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$7", "symbols": []},
    {"name": "operacionlogica$subexpression$8$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$8$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$8$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$8", "symbols": ["operacionlogica$subexpression$8$subexpression$1"]},
    {"name": "operacionlogica$subexpression$8", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$5", "operacionlogica$subexpression$6", {"literal":"menorQue"}, "operacionlogica$subexpression$7", "operacionlogica$subexpression$8", "findelinea"], "postprocess": (d) => ''+d[0]+'<'+d[4]+''},
    {"name": "operacionlogica$subexpression$9", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$9", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$9", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$10", "symbols": []},
    {"name": "operacionlogica$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$11", "symbols": []},
    {"name": "operacionlogica$subexpression$12$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$12$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$12$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$12", "symbols": ["operacionlogica$subexpression$12$subexpression$1"]},
    {"name": "operacionlogica$subexpression$12", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$9", "operacionlogica$subexpression$10", {"literal":"mayorIgualQue"}, "operacionlogica$subexpression$11", "operacionlogica$subexpression$12", "findelinea"], "postprocess": (d) => ''+d[0]+'>='+d[4]+''},
    {"name": "operacionlogica$subexpression$13", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$13", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$13", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$14", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$14", "symbols": []},
    {"name": "operacionlogica$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$15", "symbols": []},
    {"name": "operacionlogica$subexpression$16$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$16$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$16$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$16", "symbols": ["operacionlogica$subexpression$16$subexpression$1"]},
    {"name": "operacionlogica$subexpression$16", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$13", "operacionlogica$subexpression$14", {"literal":"menorIgualQue"}, "operacionlogica$subexpression$15", "operacionlogica$subexpression$16", "findelinea"], "postprocess": (d) => ''+d[0]+'<='+d[4]+''},
    {"name": "operacionlogica$subexpression$17", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$17", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$17", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$18", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$18", "symbols": []},
    {"name": "operacionlogica$subexpression$19", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$19", "symbols": []},
    {"name": "operacionlogica$subexpression$20$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$20$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$20$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$20", "symbols": ["operacionlogica$subexpression$20$subexpression$1"]},
    {"name": "operacionlogica$subexpression$20", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$17", "operacionlogica$subexpression$18", {"literal":"igualQue"}, "operacionlogica$subexpression$19", "operacionlogica$subexpression$20", "findelinea"], "postprocess": (d) => ''+d[0]+'=='+d[4]+''},
    {"name": "operacionlogica$subexpression$21", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$21", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$21", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$22", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$22", "symbols": []},
    {"name": "operacionlogica$subexpression$23", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$23", "symbols": []},
    {"name": "operacionlogica$subexpression$24$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$24$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$24$subexpression$1", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "operacionlogica$subexpression$24", "symbols": ["operacionlogica$subexpression$24$subexpression$1"]},
    {"name": "operacionlogica$subexpression$24", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$21", "operacionlogica$subexpression$22", {"literal":"diferenteQue"}, "operacionlogica$subexpression$23", "operacionlogica$subexpression$24", "findelinea"], "postprocess": (d) => ''+d[0]+'!='+d[4]+''},
    {"name": "operacionCorta$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionCorta$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionCorta", "symbols": ["operacionCorta$subexpression$1", {"literal":"_mas mas"}, "findelinea"], "postprocess": (d) => ''+d[0]+'+=1'},
    {"name": "operacionCorta$subexpression$2", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionCorta$subexpression$2", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionCorta", "symbols": ["operacionCorta$subexpression$2", {"literal":"_menos menos"}, "findelinea"], "postprocess": (d) => ''+d[0]+'-=1'},
    {"name": "declaracion$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$1", "symbols": []},
    {"name": "declaracion$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$2", "symbols": []},
    {"name": "declaracion$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$3", "symbols": []},
    {"name": "declaracion", "symbols": [{"literal":"entero"}, "declaracion$subexpression$1", (lexer.has("string") ? {type: "string"} : string), "declaracion$subexpression$2", {"literal":"<<<"}, "declaracion$subexpression$3", (lexer.has("number") ? {type: "number"} : number), "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "declaracion$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$4", "symbols": []},
    {"name": "declaracion$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$5", "symbols": []},
    {"name": "declaracion$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$6", "symbols": []},
    {"name": "declaracion$subexpression$7", "symbols": [{"literal":"true"}]},
    {"name": "declaracion$subexpression$7", "symbols": [{"literal":"false"}]},
    {"name": "declaracion", "symbols": [{"literal":"logico"}, "declaracion$subexpression$4", (lexer.has("string") ? {type: "string"} : string), "declaracion$subexpression$5", {"literal":"<<<"}, "declaracion$subexpression$6", "declaracion$subexpression$7", "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "declaracion$subexpression$8", "symbols": [{"literal":"decimalC"}]},
    {"name": "declaracion$subexpression$8", "symbols": [{"literal":"decimalL"}]},
    {"name": "declaracion$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$9", "symbols": []},
    {"name": "declaracion$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$10", "symbols": []},
    {"name": "declaracion$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$11", "symbols": []},
    {"name": "declaracion$subexpression$12", "symbols": [(lexer.has("numberDecimal") ? {type: "numberDecimal"} : numberDecimal)]},
    {"name": "declaracion$subexpression$12", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "declaracion", "symbols": ["declaracion$subexpression$8", "declaracion$subexpression$9", (lexer.has("string") ? {type: "string"} : string), "declaracion$subexpression$10", {"literal":"<<<"}, "declaracion$subexpression$11", "declaracion$subexpression$12", "findelinea"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "findelinea", "symbols": ["espacioEnBlanco"]},
    {"name": "findelinea$ebnf$1", "symbols": []},
    {"name": "findelinea$ebnf$1", "symbols": ["findelinea$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "findelinea", "symbols": ["findelinea$ebnf$1"], "postprocess": (d) => ''},
    {"name": "findelinea", "symbols": [(lexer.has("finLinea") ? {type: "finLinea"} : finLinea), "findelinea"], "postprocess": (d) => ';'},
    {"name": "espacioEnBlanco", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)], "postprocess": (d) => ' '}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
