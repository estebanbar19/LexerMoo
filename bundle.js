(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$1", "symbols": []},
    {"name": "input$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$2", "symbols": []},
    {"name": "input$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$3", "symbols": []},
    {"name": "input$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$4", "symbols": []},
    {"name": "input$ebnf$1", "symbols": []},
    {"name": "input$ebnf$1", "symbols": ["input$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$ebnf$2", "symbols": []},
    {"name": "input$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$2", "symbols": ["input$ebnf$2", "input$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$5", "symbols": []},
    {"name": "input$subexpression$6", "symbols": ["findelinea"]},
    {"name": "input$subexpression$6", "symbols": []},
    {"name": "input$ebnf$3", "symbols": []},
    {"name": "input$ebnf$3$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$3$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$3", "symbols": ["input$ebnf$3", "input$ebnf$3$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input", "symbols": [{"literal":"~"}, "findelinea", {"literal":"entero"}, "input$subexpression$1", {"literal":"genesis"}, "input$subexpression$2", (lexer.has("lparen") ? {type: "lparen"} : lparen), "input$subexpression$3", (lexer.has("rparen") ? {type: "rparen"} : rparen), "input$subexpression$4", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "input$ebnf$1", "statements", "input$ebnf$2", {"literal":"apocalipsis"}, "input$subexpression$5", "input$subexpression$6", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "input$ebnf$3", "findelinea", {"literal":"~"}], "postprocess": (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[12]+';')},
    {"name": "input$ebnf$4", "symbols": []},
    {"name": "input$ebnf$4", "symbols": ["input$ebnf$4", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$ebnf$5", "symbols": []},
    {"name": "input$ebnf$5$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$5$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$5", "symbols": ["input$ebnf$5", "input$ebnf$5$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$7", "symbols": []},
    {"name": "input$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$8", "symbols": []},
    {"name": "input$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$9", "symbols": []},
    {"name": "input$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$10", "symbols": []},
    {"name": "input$ebnf$6", "symbols": []},
    {"name": "input$ebnf$6", "symbols": ["input$ebnf$6", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$ebnf$7", "symbols": []},
    {"name": "input$ebnf$7$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$7$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$7", "symbols": ["input$ebnf$7", "input$ebnf$7$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$11", "symbols": []},
    {"name": "input$subexpression$12", "symbols": ["findelinea"]},
    {"name": "input$subexpression$12", "symbols": []},
    {"name": "input$ebnf$8", "symbols": []},
    {"name": "input$ebnf$8$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$8$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$8", "symbols": ["input$ebnf$8", "input$ebnf$8$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input", "symbols": [{"literal":"~"}, "findelinea", "input$ebnf$4", "statements", "input$ebnf$5", {"literal":"entero"}, "input$subexpression$7", {"literal":"genesis"}, "input$subexpression$8", (lexer.has("lparen") ? {type: "lparen"} : lparen), "input$subexpression$9", (lexer.has("rparen") ? {type: "rparen"} : rparen), "input$subexpression$10", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "input$ebnf$6", "statements", "input$ebnf$7", {"literal":"apocalipsis"}, "input$subexpression$11", "input$subexpression$12", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "input$ebnf$8", "findelinea", {"literal":"~"}], "postprocess": (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[3]+'; '+d[15]+';')},
    {"name": "input$subexpression$13", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$13", "symbols": []},
    {"name": "input$subexpression$14", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$14", "symbols": []},
    {"name": "input$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$15", "symbols": []},
    {"name": "input$subexpression$16", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$16", "symbols": []},
    {"name": "input$ebnf$9", "symbols": []},
    {"name": "input$ebnf$9", "symbols": ["input$ebnf$9", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$ebnf$10", "symbols": []},
    {"name": "input$ebnf$10$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$10$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$10", "symbols": ["input$ebnf$10", "input$ebnf$10$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$subexpression$17", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$17", "symbols": []},
    {"name": "input$subexpression$18", "symbols": ["findelinea"]},
    {"name": "input$subexpression$18", "symbols": []},
    {"name": "input$subexpression$19", "symbols": ["espacioEnBlanco"]},
    {"name": "input$subexpression$19", "symbols": []},
    {"name": "input$subexpression$20", "symbols": ["findelinea"]},
    {"name": "input$subexpression$20", "symbols": []},
    {"name": "input$ebnf$11", "symbols": []},
    {"name": "input$ebnf$11", "symbols": ["input$ebnf$11", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input$ebnf$12", "symbols": []},
    {"name": "input$ebnf$12$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "input$ebnf$12$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "input$ebnf$12", "symbols": ["input$ebnf$12", "input$ebnf$12$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input", "symbols": [{"literal":"~"}, "findelinea", {"literal":"entero"}, "input$subexpression$13", {"literal":"genesis"}, "input$subexpression$14", (lexer.has("lparen") ? {type: "lparen"} : lparen), "input$subexpression$15", (lexer.has("rparen") ? {type: "rparen"} : rparen), "input$subexpression$16", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "input$ebnf$9", "statements", "input$ebnf$10", {"literal":"apocalipsis"}, "input$subexpression$17", "input$subexpression$18", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "input$subexpression$19", "input$subexpression$20", "input$ebnf$11", "statements", "input$ebnf$12", "findelinea", {"literal":"~"}], "postprocess": (d) => eval('let textoEjecucion = document.getElementById("textoEjecucion"); '+d[12]+'; '+d[21]+';')},
    {"name": "statement", "symbols": ["ifStatement"], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["whileStatement"], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["forStatement"], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["doWhileStatement"], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["funcionStatement"], "postprocess": (d) => d[0]},
    {"name": "statement", "symbols": ["returnStatement"], "postprocess": (d) => d[0]},
    {"name": "statement$subexpression$1", "symbols": ["findelinea"]},
    {"name": "statement$subexpression$1", "symbols": []},
    {"name": "statement", "symbols": ["callFuncionStatement", "statement$subexpression$1"], "postprocess": (d) => d[0]},
    {"name": "imp", "symbols": ["callFuncionStatement"], "postprocess": (d) => d[0]},
    {"name": "ifStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$1", "symbols": []},
    {"name": "ifStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$2", "symbols": []},
    {"name": "ifStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$3", "symbols": []},
    {"name": "ifStatement$ebnf$1", "symbols": []},
    {"name": "ifStatement$ebnf$1", "symbols": ["ifStatement$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$ebnf$2", "symbols": []},
    {"name": "ifStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "ifStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ifStatement$ebnf$2", "symbols": ["ifStatement$ebnf$2", "ifStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$4", "symbols": []},
    {"name": "ifStatement$subexpression$5", "symbols": ["findelinea"]},
    {"name": "ifStatement$subexpression$5", "symbols": []},
    {"name": "ifStatement", "symbols": [{"literal":"si"}, "ifStatement$subexpression$1", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "ifStatement$subexpression$2", {"literal":"entonces"}, "ifStatement$subexpression$3", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "ifStatement$ebnf$1", "statements", "ifStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "ifStatement$subexpression$4", "ifStatement$subexpression$5"], "postprocess": (d) => 'if('+d[3]+'){\n'+d[10]+'\n}'},
    {"name": "ifStatement$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$6", "symbols": []},
    {"name": "ifStatement$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$7", "symbols": []},
    {"name": "ifStatement$ebnf$3", "symbols": []},
    {"name": "ifStatement$ebnf$3", "symbols": ["ifStatement$ebnf$3", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$ebnf$4", "symbols": []},
    {"name": "ifStatement$ebnf$4$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "ifStatement$ebnf$4$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "ifStatement$ebnf$4", "symbols": ["ifStatement$ebnf$4", "ifStatement$ebnf$4$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$8", "symbols": []},
    {"name": "ifStatement$subexpression$9", "symbols": ["findelinea"]},
    {"name": "ifStatement$subexpression$9", "symbols": []},
    {"name": "ifStatement", "symbols": ["ifStatement", "ifStatement$subexpression$6", {"literal":"sin't"}, "ifStatement$subexpression$7", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "ifStatement$ebnf$3", "statements", "ifStatement$ebnf$4", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "ifStatement$subexpression$8", "ifStatement$subexpression$9"], "postprocess": (d) => ''+d[0]+'else{\n'+d[6]+'\n}'},
    {"name": "ifStatement$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$10", "symbols": []},
    {"name": "ifStatement$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$11", "symbols": []},
    {"name": "ifStatement$subexpression$12", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$12", "symbols": []},
    {"name": "ifStatement$ebnf$5", "symbols": []},
    {"name": "ifStatement$ebnf$5", "symbols": ["ifStatement$ebnf$5", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$subexpression$13", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$13", "symbols": []},
    {"name": "ifStatement$subexpression$14", "symbols": ["findelinea"]},
    {"name": "ifStatement$subexpression$14", "symbols": []},
    {"name": "ifStatement", "symbols": [{"literal":"si"}, "ifStatement$subexpression$10", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "ifStatement$subexpression$11", {"literal":"entonces"}, "ifStatement$subexpression$12", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "ifStatement$ebnf$5", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "ifStatement$subexpression$13", "ifStatement$subexpression$14"], "postprocess": (d) => 'if('+d[3]+'){}'},
    {"name": "ifStatement$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$15", "symbols": []},
    {"name": "ifStatement$subexpression$16", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$16", "symbols": []},
    {"name": "ifStatement$ebnf$6", "symbols": []},
    {"name": "ifStatement$ebnf$6", "symbols": ["ifStatement$ebnf$6", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$subexpression$17", "symbols": ["espacioEnBlanco"]},
    {"name": "ifStatement$subexpression$17", "symbols": []},
    {"name": "ifStatement$subexpression$18", "symbols": ["findelinea"]},
    {"name": "ifStatement$subexpression$18", "symbols": []},
    {"name": "ifStatement", "symbols": ["ifStatement", "ifStatement$subexpression$15", {"literal":"sin't"}, "ifStatement$subexpression$16", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "ifStatement$ebnf$6", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "ifStatement$subexpression$17", "ifStatement$subexpression$18"], "postprocess": (d) => ''+d[0]+'else{}'},
    {"name": "whileStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$1", "symbols": []},
    {"name": "whileStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$2", "symbols": []},
    {"name": "whileStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$3", "symbols": []},
    {"name": "whileStatement$ebnf$1", "symbols": []},
    {"name": "whileStatement$ebnf$1", "symbols": ["whileStatement$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "whileStatement$ebnf$2", "symbols": []},
    {"name": "whileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "whileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "whileStatement$ebnf$2", "symbols": ["whileStatement$ebnf$2", "whileStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "whileStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$4", "symbols": []},
    {"name": "whileStatement$subexpression$5", "symbols": ["findelinea"]},
    {"name": "whileStatement$subexpression$5", "symbols": []},
    {"name": "whileStatement", "symbols": [{"literal":"mientrasQue"}, "whileStatement$subexpression$1", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "whileStatement$subexpression$2", {"literal":"entonces"}, "whileStatement$subexpression$3", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "whileStatement$ebnf$1", "statements", "whileStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "whileStatement$subexpression$4", "whileStatement$subexpression$5"], "postprocess": (d) => 'while('+d[3]+'){\n'+d[10]+'\n}'},
    {"name": "whileStatement$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$6", "symbols": []},
    {"name": "whileStatement$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$7", "symbols": []},
    {"name": "whileStatement$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$8", "symbols": []},
    {"name": "whileStatement$ebnf$3", "symbols": []},
    {"name": "whileStatement$ebnf$3", "symbols": ["whileStatement$ebnf$3", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "whileStatement$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "whileStatement$subexpression$9", "symbols": []},
    {"name": "whileStatement$subexpression$10", "symbols": ["findelinea"]},
    {"name": "whileStatement$subexpression$10", "symbols": []},
    {"name": "whileStatement", "symbols": [{"literal":"mientrasQue"}, "whileStatement$subexpression$6", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "whileStatement$subexpression$7", {"literal":"entonces"}, "whileStatement$subexpression$8", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "whileStatement$ebnf$3", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "whileStatement$subexpression$9", "whileStatement$subexpression$10"], "postprocess": (d) => 'while('+d[3]+'){}'},
    {"name": "doWhileStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$1", "symbols": []},
    {"name": "doWhileStatement$ebnf$1", "symbols": []},
    {"name": "doWhileStatement$ebnf$1", "symbols": ["doWhileStatement$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doWhileStatement$ebnf$2", "symbols": []},
    {"name": "doWhileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "doWhileStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "doWhileStatement$ebnf$2", "symbols": ["doWhileStatement$ebnf$2", "doWhileStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doWhileStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$2", "symbols": []},
    {"name": "doWhileStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$3", "symbols": []},
    {"name": "doWhileStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$4", "symbols": []},
    {"name": "doWhileStatement$subexpression$5", "symbols": ["findelinea"]},
    {"name": "doWhileStatement$subexpression$5", "symbols": []},
    {"name": "doWhileStatement", "symbols": [{"literal":"hacer"}, "doWhileStatement$subexpression$1", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "doWhileStatement$ebnf$1", "statements", "doWhileStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "doWhileStatement$subexpression$2", {"literal":"mientrasQue"}, "doWhileStatement$subexpression$3", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "doWhileStatement$subexpression$4", "doWhileStatement$subexpression$5"], "postprocess": (d) => 'do{\n'+d[4]+'\n}while('+d[11]+')'},
    {"name": "doWhileStatement$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$6", "symbols": []},
    {"name": "doWhileStatement$ebnf$3", "symbols": []},
    {"name": "doWhileStatement$ebnf$3", "symbols": ["doWhileStatement$ebnf$3", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "doWhileStatement$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$7", "symbols": []},
    {"name": "doWhileStatement$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$8", "symbols": []},
    {"name": "doWhileStatement$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "doWhileStatement$subexpression$9", "symbols": []},
    {"name": "doWhileStatement$subexpression$10", "symbols": ["findelinea"]},
    {"name": "doWhileStatement$subexpression$10", "symbols": []},
    {"name": "doWhileStatement", "symbols": [{"literal":"hacer"}, "doWhileStatement$subexpression$6", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "doWhileStatement$ebnf$3", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "doWhileStatement$subexpression$7", {"literal":"mientrasQue"}, "doWhileStatement$subexpression$8", (lexer.has("lparen") ? {type: "lparen"} : lparen), "operacionlogica", (lexer.has("rparen") ? {type: "rparen"} : rparen), "doWhileStatement$subexpression$9", "doWhileStatement$subexpression$10"], "postprocess": (d) => 'do{}while('+d[11]+')'},
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
    {"name": "forStatement$ebnf$1", "symbols": ["forStatement$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "forStatement$ebnf$2", "symbols": []},
    {"name": "forStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "forStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "forStatement$ebnf$2", "symbols": ["forStatement$ebnf$2", "forStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "forStatement$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$11", "symbols": []},
    {"name": "forStatement$subexpression$12", "symbols": ["findelinea"]},
    {"name": "forStatement$subexpression$12", "symbols": []},
    {"name": "forStatement", "symbols": [{"literal":"Para"}, "forStatement$subexpression$1", (lexer.has("lparen") ? {type: "lparen"} : lparen), "forStatement$subexpression$2", "declaracion", "forStatement$subexpression$3", {"literal":"|"}, "forStatement$subexpression$4", "operacionlogica", "forStatement$subexpression$5", {"literal":"|"}, "forStatement$subexpression$6", "forStatement$subexpression$7", "forStatement$subexpression$8", (lexer.has("rparen") ? {type: "rparen"} : rparen), "forStatement$subexpression$9", {"literal":"entonces"}, "forStatement$subexpression$10", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "forStatement$ebnf$1", "statements", "forStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "forStatement$subexpression$11", "forStatement$subexpression$12"], "postprocess": (d) => 'for('+d[4]+';'+d[8]+';'+d[12]+'){\n'+d[20]+'\n}'},
    {"name": "forStatement$subexpression$13", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$13", "symbols": []},
    {"name": "forStatement$subexpression$14", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$14", "symbols": []},
    {"name": "forStatement$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$15", "symbols": []},
    {"name": "forStatement$subexpression$16", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$16", "symbols": []},
    {"name": "forStatement$subexpression$17", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$17", "symbols": []},
    {"name": "forStatement$subexpression$18", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$18", "symbols": []},
    {"name": "forStatement$subexpression$19", "symbols": ["operacion"]},
    {"name": "forStatement$subexpression$19", "symbols": ["operacionCorta"]},
    {"name": "forStatement$subexpression$19", "symbols": ["operacionlogica"]},
    {"name": "forStatement$subexpression$20", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$20", "symbols": []},
    {"name": "forStatement$subexpression$21", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$21", "symbols": []},
    {"name": "forStatement$subexpression$22", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$22", "symbols": []},
    {"name": "forStatement$ebnf$3", "symbols": []},
    {"name": "forStatement$ebnf$3", "symbols": ["forStatement$ebnf$3", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "forStatement$subexpression$23", "symbols": ["espacioEnBlanco"]},
    {"name": "forStatement$subexpression$23", "symbols": []},
    {"name": "forStatement$subexpression$24", "symbols": ["findelinea"]},
    {"name": "forStatement$subexpression$24", "symbols": []},
    {"name": "forStatement", "symbols": [{"literal":"Para"}, "forStatement$subexpression$13", (lexer.has("lparen") ? {type: "lparen"} : lparen), "forStatement$subexpression$14", "declaracion", "forStatement$subexpression$15", {"literal":"|"}, "forStatement$subexpression$16", "operacionlogica", "forStatement$subexpression$17", {"literal":"|"}, "forStatement$subexpression$18", "forStatement$subexpression$19", "forStatement$subexpression$20", (lexer.has("rparen") ? {type: "rparen"} : rparen), "forStatement$subexpression$21", {"literal":"entonces"}, "forStatement$subexpression$22", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "forStatement$ebnf$3", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "forStatement$subexpression$23", "forStatement$subexpression$24"], "postprocess": (d) => 'for('+d[4]+';'+d[8]+';'+d[12]+'){}'},
    {"name": "callFuncionStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$1", "symbols": []},
    {"name": "callFuncionStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$2", "symbols": []},
    {"name": "callFuncionStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$3", "symbols": []},
    {"name": "callFuncionStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$4", "symbols": []},
    {"name": "callFuncionStatement", "symbols": [(lexer.has("lcorch") ? {type: "lcorch"} : lcorch), "callFuncionStatement$subexpression$1", "argumentos", "callFuncionStatement$subexpression$2", (lexer.has("rcorch") ? {type: "rcorch"} : rcorch), "callFuncionStatement$subexpression$3", (lexer.has("string") ? {type: "string"} : string), "callFuncionStatement$subexpression$4"], "postprocess": (d) => ''+d[6]+'('+d[2]+')'},
    {"name": "callFuncionStatement$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$5", "symbols": []},
    {"name": "callFuncionStatement$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$6", "symbols": []},
    {"name": "callFuncionStatement$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "callFuncionStatement$subexpression$7", "symbols": []},
    {"name": "callFuncionStatement", "symbols": [(lexer.has("lcorch") ? {type: "lcorch"} : lcorch), "callFuncionStatement$subexpression$5", (lexer.has("rcorch") ? {type: "rcorch"} : rcorch), "callFuncionStatement$subexpression$6", (lexer.has("string") ? {type: "string"} : string), "callFuncionStatement$subexpression$7"], "postprocess": (d) => ''+d[4]+'()'},
    {"name": "funcionStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$1", "symbols": []},
    {"name": "funcionStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$2", "symbols": []},
    {"name": "funcionStatement$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$3", "symbols": []},
    {"name": "funcionStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$4", "symbols": []},
    {"name": "funcionStatement$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$5", "symbols": []},
    {"name": "funcionStatement$ebnf$1", "symbols": []},
    {"name": "funcionStatement$ebnf$1", "symbols": ["funcionStatement$ebnf$1", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcionStatement$ebnf$2", "symbols": []},
    {"name": "funcionStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "funcionStatement$ebnf$2$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "funcionStatement$ebnf$2", "symbols": ["funcionStatement$ebnf$2", "funcionStatement$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcionStatement$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$6", "symbols": []},
    {"name": "funcionStatement$subexpression$7", "symbols": ["findelinea"]},
    {"name": "funcionStatement$subexpression$7", "symbols": []},
    {"name": "funcionStatement", "symbols": [(lexer.has("tipoVariable") ? {type: "tipoVariable"} : tipoVariable), "funcionStatement$subexpression$1", (lexer.has("lcorch") ? {type: "lcorch"} : lcorch), "funcionStatement$subexpression$2", "argumentos", "funcionStatement$subexpression$3", (lexer.has("rcorch") ? {type: "rcorch"} : rcorch), "funcionStatement$subexpression$4", (lexer.has("string") ? {type: "string"} : string), "funcionStatement$subexpression$5", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "funcionStatement$ebnf$1", "statements", "funcionStatement$ebnf$2", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "funcionStatement$subexpression$6", "funcionStatement$subexpression$7"], "postprocess": (d) => 'function '+d[8]+'('+d[4]+'){\n'+d[12]+'\n}'},
    {"name": "funcionStatement$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$8", "symbols": []},
    {"name": "funcionStatement$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$9", "symbols": []},
    {"name": "funcionStatement$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$10", "symbols": []},
    {"name": "funcionStatement$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$11", "symbols": []},
    {"name": "funcionStatement$subexpression$12", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$12", "symbols": []},
    {"name": "funcionStatement$ebnf$3", "symbols": []},
    {"name": "funcionStatement$ebnf$3", "symbols": ["funcionStatement$ebnf$3", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcionStatement$subexpression$13", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$13", "symbols": []},
    {"name": "funcionStatement$subexpression$14", "symbols": ["findelinea"]},
    {"name": "funcionStatement$subexpression$14", "symbols": []},
    {"name": "funcionStatement", "symbols": [(lexer.has("tipoVariable") ? {type: "tipoVariable"} : tipoVariable), "funcionStatement$subexpression$8", (lexer.has("lcorch") ? {type: "lcorch"} : lcorch), "funcionStatement$subexpression$9", "argumentos", "funcionStatement$subexpression$10", (lexer.has("rcorch") ? {type: "rcorch"} : rcorch), "funcionStatement$subexpression$11", (lexer.has("string") ? {type: "string"} : string), "funcionStatement$subexpression$12", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "funcionStatement$ebnf$3", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "funcionStatement$subexpression$13", "funcionStatement$subexpression$14"], "postprocess": (d) => 'function '+d[8]+'('+d[4]+'){}'},
    {"name": "funcionStatement$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$15", "symbols": []},
    {"name": "funcionStatement$subexpression$16", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$16", "symbols": []},
    {"name": "funcionStatement$subexpression$17", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$17", "symbols": []},
    {"name": "funcionStatement$subexpression$18", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$18", "symbols": []},
    {"name": "funcionStatement$ebnf$4", "symbols": []},
    {"name": "funcionStatement$ebnf$4", "symbols": ["funcionStatement$ebnf$4", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcionStatement$ebnf$5", "symbols": []},
    {"name": "funcionStatement$ebnf$5$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "funcionStatement$ebnf$5$subexpression$1", "symbols": [(lexer.has("WS") ? {type: "WS"} : WS)]},
    {"name": "funcionStatement$ebnf$5", "symbols": ["funcionStatement$ebnf$5", "funcionStatement$ebnf$5$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcionStatement$subexpression$19", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$19", "symbols": []},
    {"name": "funcionStatement$subexpression$20", "symbols": ["findelinea"]},
    {"name": "funcionStatement$subexpression$20", "symbols": []},
    {"name": "funcionStatement", "symbols": [(lexer.has("tipoVariable") ? {type: "tipoVariable"} : tipoVariable), "funcionStatement$subexpression$15", (lexer.has("lcorch") ? {type: "lcorch"} : lcorch), "funcionStatement$subexpression$16", (lexer.has("rcorch") ? {type: "rcorch"} : rcorch), "funcionStatement$subexpression$17", (lexer.has("string") ? {type: "string"} : string), "funcionStatement$subexpression$18", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "funcionStatement$ebnf$4", "statements", "funcionStatement$ebnf$5", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "funcionStatement$subexpression$19", "funcionStatement$subexpression$20"], "postprocess": (d) => 'function '+d[6]+'(){\n'+d[10]+'\n}'},
    {"name": "funcionStatement$subexpression$21", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$21", "symbols": []},
    {"name": "funcionStatement$subexpression$22", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$22", "symbols": []},
    {"name": "funcionStatement$subexpression$23", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$23", "symbols": []},
    {"name": "funcionStatement$subexpression$24", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$24", "symbols": []},
    {"name": "funcionStatement$ebnf$6", "symbols": []},
    {"name": "funcionStatement$ebnf$6", "symbols": ["funcionStatement$ebnf$6", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "funcionStatement$subexpression$25", "symbols": ["espacioEnBlanco"]},
    {"name": "funcionStatement$subexpression$25", "symbols": []},
    {"name": "funcionStatement$subexpression$26", "symbols": ["findelinea"]},
    {"name": "funcionStatement$subexpression$26", "symbols": []},
    {"name": "funcionStatement", "symbols": [(lexer.has("tipoVariable") ? {type: "tipoVariable"} : tipoVariable), "funcionStatement$subexpression$21", (lexer.has("lcorch") ? {type: "lcorch"} : lcorch), "funcionStatement$subexpression$22", (lexer.has("rcorch") ? {type: "rcorch"} : rcorch), "funcionStatement$subexpression$23", (lexer.has("string") ? {type: "string"} : string), "funcionStatement$subexpression$24", (lexer.has("lbracket") ? {type: "lbracket"} : lbracket), "funcionStatement$ebnf$6", (lexer.has("rbracket") ? {type: "rbracket"} : rbracket), "funcionStatement$subexpression$25", "funcionStatement$subexpression$26"], "postprocess": (d) => 'function '+d[6]+'(){}'},
    {"name": "returnStatement$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "returnStatement$subexpression$1", "symbols": []},
    {"name": "returnStatement$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "returnStatement$subexpression$2", "symbols": []},
    {"name": "returnStatement$subexpression$3", "symbols": ["findelinea"]},
    {"name": "returnStatement$subexpression$3", "symbols": []},
    {"name": "returnStatement", "symbols": [{"literal":"retornar"}, "returnStatement$subexpression$1", "value", "returnStatement$subexpression$2", "returnStatement$subexpression$3"], "postprocess": (d) => 'return '+d[2]+''},
    {"name": "returnStatement$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "returnStatement$subexpression$4", "symbols": []},
    {"name": "returnStatement$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "returnStatement$subexpression$5", "symbols": []},
    {"name": "returnStatement$subexpression$6", "symbols": ["findelinea"]},
    {"name": "returnStatement$subexpression$6", "symbols": []},
    {"name": "returnStatement", "symbols": [{"literal":"retornar"}, "returnStatement$subexpression$4", "variable", "returnStatement$subexpression$5", "returnStatement$subexpression$6"], "postprocess": (d) => 'return '+d[2]+''},
    {"name": "argumentos", "symbols": ["variable"]},
    {"name": "argumentos$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "argumentos$subexpression$1", "symbols": []},
    {"name": "argumentos$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "argumentos$subexpression$2", "symbols": []},
    {"name": "argumentos", "symbols": ["argumentos", "argumentos$subexpression$1", {"literal":","}, "argumentos$subexpression$2", "variable"], "postprocess": (d) => ''+d[0]+','+d[4]+''},
    {"name": "statements", "symbols": ["statement"]},
    {"name": "statements$subexpression$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
    {"name": "statements$subexpression$1", "symbols": []},
    {"name": "statements", "symbols": ["statements", "statements$subexpression$1", "statement"], "postprocess": (d) => d[0]+';\n'+d[2]},
    {"name": "statement", "symbols": ["operacion"]},
    {"name": "statement", "symbols": ["impStatement"]},
    {"name": "statement", "symbols": ["declaracion"]},
    {"name": "statement", "symbols": ["asignacion"]},
    {"name": "statement", "symbols": ["operacionCorta"]},
    {"name": "statement", "symbols": ["espacioEnBlanco", "statement"], "postprocess": (d) => d[1]},
    {"name": "impStatement$subexpression$1", "symbols": ["findelinea"]},
    {"name": "impStatement$subexpression$1", "symbols": []},
    {"name": "impStatement", "symbols": [{"literal":"impresion#"}, "imp", "impStatement$subexpression$1"], "postprocess": (d) => 'textoEjecucion.innerHTML = textoEjecucion.innerHTML+'+d[1]+''},
    {"name": "imp", "symbols": ["variable"], "postprocess": (d) => d[0]},
    {"name": "imp$subexpression$1", "symbols": ["operacion"]},
    {"name": "imp$subexpression$1", "symbols": ["operacionCorta"]},
    {"name": "imp$subexpression$1", "symbols": ["operacionlogica"]},
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
    {"name": "operacionlogica$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$2", "symbols": []},
    {"name": "operacionlogica$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$3", "symbols": []},
    {"name": "operacionlogica$subexpression$4$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$4$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$4$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$4", "symbols": ["operacionlogica$subexpression$4$subexpression$1"]},
    {"name": "operacionlogica$subexpression$4", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$5", "symbols": []},
    {"name": "operacionlogica$subexpression$6", "symbols": ["findelinea"]},
    {"name": "operacionlogica$subexpression$6", "symbols": []},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$1", "operacionlogica$subexpression$2", {"literal":"mayorQue"}, "operacionlogica$subexpression$3", "operacionlogica$subexpression$4", "operacionlogica$subexpression$5", "operacionlogica$subexpression$6"], "postprocess": (d) => ''+d[0]+'>'+d[4]+''},
    {"name": "operacionlogica$subexpression$7", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$7", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$7", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$8", "symbols": []},
    {"name": "operacionlogica$subexpression$9", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$9", "symbols": []},
    {"name": "operacionlogica$subexpression$10$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$10$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$10$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$10", "symbols": ["operacionlogica$subexpression$10$subexpression$1"]},
    {"name": "operacionlogica$subexpression$10", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica$subexpression$11", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$11", "symbols": []},
    {"name": "operacionlogica$subexpression$12", "symbols": ["findelinea"]},
    {"name": "operacionlogica$subexpression$12", "symbols": []},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$7", "operacionlogica$subexpression$8", {"literal":"menorQue"}, "operacionlogica$subexpression$9", "operacionlogica$subexpression$10", "operacionlogica$subexpression$11", "operacionlogica$subexpression$12"], "postprocess": (d) => ''+d[0]+'<'+d[4]+''},
    {"name": "operacionlogica$subexpression$13", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$13", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$13", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$14", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$14", "symbols": []},
    {"name": "operacionlogica$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$15", "symbols": []},
    {"name": "operacionlogica$subexpression$16$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$16$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$16$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$16", "symbols": ["operacionlogica$subexpression$16$subexpression$1"]},
    {"name": "operacionlogica$subexpression$16", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica$subexpression$17", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$17", "symbols": []},
    {"name": "operacionlogica$subexpression$18", "symbols": ["findelinea"]},
    {"name": "operacionlogica$subexpression$18", "symbols": []},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$13", "operacionlogica$subexpression$14", {"literal":"mayorIgualQue"}, "operacionlogica$subexpression$15", "operacionlogica$subexpression$16", "operacionlogica$subexpression$17", "operacionlogica$subexpression$18"], "postprocess": (d) => ''+d[0]+'>='+d[4]+''},
    {"name": "operacionlogica$subexpression$19", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$19", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$19", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$20", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$20", "symbols": []},
    {"name": "operacionlogica$subexpression$21", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$21", "symbols": []},
    {"name": "operacionlogica$subexpression$22$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$22$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$22$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$22", "symbols": ["operacionlogica$subexpression$22$subexpression$1"]},
    {"name": "operacionlogica$subexpression$22", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica$subexpression$23", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$23", "symbols": []},
    {"name": "operacionlogica$subexpression$24", "symbols": ["findelinea"]},
    {"name": "operacionlogica$subexpression$24", "symbols": []},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$19", "operacionlogica$subexpression$20", {"literal":"menorIgualQue"}, "operacionlogica$subexpression$21", "operacionlogica$subexpression$22", "operacionlogica$subexpression$23", "operacionlogica$subexpression$24"], "postprocess": (d) => ''+d[0]+'<='+d[4]+''},
    {"name": "operacionlogica$subexpression$25", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$25", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$25", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$26", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$26", "symbols": []},
    {"name": "operacionlogica$subexpression$27", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$27", "symbols": []},
    {"name": "operacionlogica$subexpression$28$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$28$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$28$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$28", "symbols": ["operacionlogica$subexpression$28$subexpression$1"]},
    {"name": "operacionlogica$subexpression$28", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica$subexpression$29", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$29", "symbols": []},
    {"name": "operacionlogica$subexpression$30", "symbols": ["findelinea"]},
    {"name": "operacionlogica$subexpression$30", "symbols": []},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$25", "operacionlogica$subexpression$26", {"literal":"igualQue"}, "operacionlogica$subexpression$27", "operacionlogica$subexpression$28", "operacionlogica$subexpression$29", "operacionlogica$subexpression$30"], "postprocess": (d) => ''+d[0]+'=='+d[4]+''},
    {"name": "operacionlogica$subexpression$31", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$31", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$31", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$32", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$32", "symbols": []},
    {"name": "operacionlogica$subexpression$33", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$33", "symbols": []},
    {"name": "operacionlogica$subexpression$34$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionlogica$subexpression$34$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionlogica$subexpression$34$subexpression$1", "symbols": ["numberDecimal"]},
    {"name": "operacionlogica$subexpression$34", "symbols": ["operacionlogica$subexpression$34$subexpression$1"]},
    {"name": "operacionlogica$subexpression$34", "symbols": ["operacionlogica"]},
    {"name": "operacionlogica$subexpression$35", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionlogica$subexpression$35", "symbols": []},
    {"name": "operacionlogica$subexpression$36", "symbols": ["findelinea"]},
    {"name": "operacionlogica$subexpression$36", "symbols": []},
    {"name": "operacionlogica", "symbols": ["operacionlogica$subexpression$31", "operacionlogica$subexpression$32", {"literal":"diferenteQue"}, "operacionlogica$subexpression$33", "operacionlogica$subexpression$34", "operacionlogica$subexpression$35", "operacionlogica$subexpression$36"], "postprocess": (d) => ''+d[0]+'!='+d[4]+''},
    {"name": "operacionCorta$subexpression$1", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionCorta$subexpression$1", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionCorta$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionCorta$subexpression$2", "symbols": []},
    {"name": "operacionCorta$subexpression$3", "symbols": ["findelinea"]},
    {"name": "operacionCorta$subexpression$3", "symbols": []},
    {"name": "operacionCorta", "symbols": ["operacionCorta$subexpression$1", {"literal":"_mas mas"}, "operacionCorta$subexpression$2", "operacionCorta$subexpression$3"], "postprocess": (d) => ''+d[0]+'+=1'},
    {"name": "operacionCorta$subexpression$4", "symbols": [(lexer.has("string") ? {type: "string"} : string)]},
    {"name": "operacionCorta$subexpression$4", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "operacionCorta$subexpression$5", "symbols": ["espacioEnBlanco"]},
    {"name": "operacionCorta$subexpression$5", "symbols": []},
    {"name": "operacionCorta$subexpression$6", "symbols": ["findelinea"]},
    {"name": "operacionCorta$subexpression$6", "symbols": []},
    {"name": "operacionCorta", "symbols": ["operacionCorta$subexpression$4", {"literal":"_menos menos"}, "operacionCorta$subexpression$5", "operacionCorta$subexpression$6"], "postprocess": (d) => ''+d[0]+'-=1'},
    {"name": "declaracion$subexpression$1", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$1", "symbols": []},
    {"name": "declaracion$subexpression$2", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$2", "symbols": []},
    {"name": "declaracion$subexpression$3", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$3", "symbols": []},
    {"name": "declaracion$subexpression$4", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$4", "symbols": []},
    {"name": "declaracion$subexpression$5", "symbols": ["findelinea"]},
    {"name": "declaracion$subexpression$5", "symbols": []},
    {"name": "declaracion", "symbols": [{"literal":"entero"}, "declaracion$subexpression$1", "variable", "declaracion$subexpression$2", {"literal":"<<<"}, "declaracion$subexpression$3", (lexer.has("number") ? {type: "number"} : number), "declaracion$subexpression$4", "declaracion$subexpression$5"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "declaracion$subexpression$6", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$6", "symbols": []},
    {"name": "declaracion$subexpression$7", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$7", "symbols": []},
    {"name": "declaracion$subexpression$8", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$8", "symbols": []},
    {"name": "declaracion$subexpression$9", "symbols": [{"literal":"true"}]},
    {"name": "declaracion$subexpression$9", "symbols": [{"literal":"false"}]},
    {"name": "declaracion$subexpression$10", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$10", "symbols": []},
    {"name": "declaracion$subexpression$11", "symbols": ["findelinea"]},
    {"name": "declaracion$subexpression$11", "symbols": []},
    {"name": "declaracion", "symbols": [{"literal":"logico"}, "declaracion$subexpression$6", "variable", "declaracion$subexpression$7", {"literal":"<<<"}, "declaracion$subexpression$8", "declaracion$subexpression$9", "declaracion$subexpression$10", "declaracion$subexpression$11"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "declaracion$subexpression$12", "symbols": [{"literal":"decimalC"}]},
    {"name": "declaracion$subexpression$12", "symbols": [{"literal":"decimalL"}]},
    {"name": "declaracion$subexpression$13", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$13", "symbols": []},
    {"name": "declaracion$subexpression$14", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$14", "symbols": []},
    {"name": "declaracion$subexpression$15", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$15", "symbols": []},
    {"name": "declaracion$subexpression$16", "symbols": ["numberDecimal"]},
    {"name": "declaracion$subexpression$16", "symbols": [(lexer.has("number") ? {type: "number"} : number)]},
    {"name": "declaracion$subexpression$17", "symbols": ["espacioEnBlanco"]},
    {"name": "declaracion$subexpression$17", "symbols": []},
    {"name": "declaracion$subexpression$18", "symbols": ["findelinea"]},
    {"name": "declaracion$subexpression$18", "symbols": []},
    {"name": "declaracion", "symbols": ["declaracion$subexpression$12", "declaracion$subexpression$13", "variable", "declaracion$subexpression$14", {"literal":"<<<"}, "declaracion$subexpression$15", "declaracion$subexpression$16", "declaracion$subexpression$17", "declaracion$subexpression$18"], "postprocess": (d) => 'let '+d[2]+' = '+d[6]+''},
    {"name": "variable$ebnf$1", "symbols": []},
    {"name": "variable$ebnf$1", "symbols": ["variable$ebnf$1", (lexer.has("number") ? {type: "number"} : number)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "variable", "symbols": [(lexer.has("string") ? {type: "string"} : string), "variable$ebnf$1"], "postprocess": (d) => ''+d[0]+d[1]+''},
    {"name": "numberDecimal", "symbols": [(lexer.has("number") ? {type: "number"} : number), {"literal":"."}, (lexer.has("number") ? {type: "number"} : number)], "postprocess": (d) => d[0]+'.'+d[2]},
    {"name": "findelinea", "symbols": ["espacioEnBlanco"]},
    {"name": "findelinea", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)]},
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

},{"moo":3}],2:[function(require,module,exports){
const nearley = require("nearley");
const grammar = require("../grammar.js");

var parser;

let text = document.getElementById("texto");
let textEjecucion = document.getElementById("textoEjecucion");
let button = document.getElementById("btn");

button.onclick = function () {
    textEjecucion.innerHTML = '';
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), { keepHistory: true });
    console.log(text.value);
    parser.feed("~\n"+text.value+"\n~");
    console.log(parser.results);
    if (parser.results.length > 1) throw new Error('grammar is ambiguous');
}
},{"../grammar.js":1,"nearley":4}],3:[function(require,module,exports){
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory) /* global define */
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.moo = factory()
  }
}(this, function() {
  'use strict';

  var hasOwnProperty = Object.prototype.hasOwnProperty
  var toString = Object.prototype.toString
  var hasSticky = typeof new RegExp().sticky === 'boolean'

  /***************************************************************************/

  function isRegExp(o) { return o && toString.call(o) === '[object RegExp]' }
  function isObject(o) { return o && typeof o === 'object' && !isRegExp(o) && !Array.isArray(o) }

  function reEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  function reGroups(s) {
    var re = new RegExp('|' + s)
    return re.exec('').length - 1
  }
  function reCapture(s) {
    return '(' + s + ')'
  }
  function reUnion(regexps) {
    if (!regexps.length) return '(?!)'
    var source =  regexps.map(function(s) {
      return "(?:" + s + ")"
    }).join('|')
    return "(?:" + source + ")"
  }

  function regexpOrLiteral(obj) {
    if (typeof obj === 'string') {
      return '(?:' + reEscape(obj) + ')'

    } else if (isRegExp(obj)) {
      // TODO: consider /u support
      if (obj.ignoreCase) throw new Error('RegExp /i flag not allowed')
      if (obj.global) throw new Error('RegExp /g flag is implied')
      if (obj.sticky) throw new Error('RegExp /y flag is implied')
      if (obj.multiline) throw new Error('RegExp /m flag is implied')
      return obj.source

    } else {
      throw new Error('Not a pattern: ' + obj)
    }
  }

  function objectToRules(object) {
    var keys = Object.getOwnPropertyNames(object)
    var result = []
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      var thing = object[key]
      var rules = [].concat(thing)
      if (key === 'include') {
        for (var j = 0; j < rules.length; j++) {
          result.push({include: rules[j]})
        }
        continue
      }
      var match = []
      rules.forEach(function(rule) {
        if (isObject(rule)) {
          if (match.length) result.push(ruleOptions(key, match))
          result.push(ruleOptions(key, rule))
          match = []
        } else {
          match.push(rule)
        }
      })
      if (match.length) result.push(ruleOptions(key, match))
    }
    return result
  }

  function arrayToRules(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var obj = array[i]
      if (obj.include) {
        var include = [].concat(obj.include)
        for (var j = 0; j < include.length; j++) {
          result.push({include: include[j]})
        }
        continue
      }
      if (!obj.type) {
        throw new Error('Rule has no type: ' + JSON.stringify(obj))
      }
      result.push(ruleOptions(obj.type, obj))
    }
    return result
  }

  function ruleOptions(type, obj) {
    if (!isObject(obj)) {
      obj = { match: obj }
    }
    if (obj.include) {
      throw new Error('Matching rules cannot also include states')
    }

    // nb. error and fallback imply lineBreaks
    var options = {
      defaultType: type,
      lineBreaks: !!obj.error || !!obj.fallback,
      pop: false,
      next: null,
      push: null,
      error: false,
      fallback: false,
      value: null,
      type: null,
      shouldThrow: false,
    }

    // Avoid Object.assign(), so we support IE9+
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        options[key] = obj[key]
      }
    }

    // type transform cannot be a string
    if (typeof options.type === 'string' && type !== options.type) {
      throw new Error("Type transform cannot be a string (type '" + options.type + "' for token '" + type + "')")
    }

    // convert to array
    var match = options.match
    options.match = Array.isArray(match) ? match : match ? [match] : []
    options.match.sort(function(a, b) {
      return isRegExp(a) && isRegExp(b) ? 0
           : isRegExp(b) ? -1 : isRegExp(a) ? +1 : b.length - a.length
    })
    return options
  }

  function toRules(spec) {
    return Array.isArray(spec) ? arrayToRules(spec) : objectToRules(spec)
  }

  var defaultErrorRule = ruleOptions('error', {lineBreaks: true, shouldThrow: true})
  function compileRules(rules, hasStates) {
    var errorRule = null
    var fast = Object.create(null)
    var fastAllowed = true
    var unicodeFlag = null
    var groups = []
    var parts = []

    // If there is a fallback rule, then disable fast matching
    for (var i = 0; i < rules.length; i++) {
      if (rules[i].fallback) {
        fastAllowed = false
      }
    }

    for (var i = 0; i < rules.length; i++) {
      var options = rules[i]

      if (options.include) {
        // all valid inclusions are removed by states() preprocessor
        throw new Error('Inheritance is not allowed in stateless lexers')
      }

      if (options.error || options.fallback) {
        // errorRule can only be set once
        if (errorRule) {
          if (!options.fallback === !errorRule.fallback) {
            throw new Error("Multiple " + (options.fallback ? "fallback" : "error") + " rules not allowed (for token '" + options.defaultType + "')")
          } else {
            throw new Error("fallback and error are mutually exclusive (for token '" + options.defaultType + "')")
          }
        }
        errorRule = options
      }

      var match = options.match.slice()
      if (fastAllowed) {
        while (match.length && typeof match[0] === 'string' && match[0].length === 1) {
          var word = match.shift()
          fast[word.charCodeAt(0)] = options
        }
      }

      // Warn about inappropriate state-switching options
      if (options.pop || options.push || options.next) {
        if (!hasStates) {
          throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.defaultType + "')")
        }
        if (options.fallback) {
          throw new Error("State-switching options are not allowed on fallback tokens (for token '" + options.defaultType + "')")
        }
      }

      // Only rules with a .match are included in the RegExp
      if (match.length === 0) {
        continue
      }
      fastAllowed = false

      groups.push(options)

      // Check unicode flag is used everywhere or nowhere
      for (var j = 0; j < match.length; j++) {
        var obj = match[j]
        if (!isRegExp(obj)) {
          continue
        }

        if (unicodeFlag === null) {
          unicodeFlag = obj.unicode
        } else if (unicodeFlag !== obj.unicode && options.fallback === false) {
          throw new Error('If one rule is /u then all must be')
        }
      }

      // convert to RegExp
      var pat = reUnion(match.map(regexpOrLiteral))

      // validate
      var regexp = new RegExp(pat)
      if (regexp.test("")) {
        throw new Error("RegExp matches empty string: " + regexp)
      }
      var groupCount = reGroups(pat)
      if (groupCount > 0) {
        throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: … ) instead")
      }

      // try and detect rules matching newlines
      if (!options.lineBreaks && regexp.test('\n')) {
        throw new Error('Rule should declare lineBreaks: ' + regexp)
      }

      // store regex
      parts.push(reCapture(pat))
    }


    // If there's no fallback rule, use the sticky flag so we only look for
    // matches at the current index.
    //
    // If we don't support the sticky flag, then fake it using an irrefutable
    // match (i.e. an empty pattern).
    var fallbackRule = errorRule && errorRule.fallback
    var flags = hasSticky && !fallbackRule ? 'ym' : 'gm'
    var suffix = hasSticky || fallbackRule ? '' : '|'

    if (unicodeFlag === true) flags += "u"
    var combined = new RegExp(reUnion(parts) + suffix, flags)
    return {regexp: combined, groups: groups, fast: fast, error: errorRule || defaultErrorRule}
  }

  function compile(rules) {
    var result = compileRules(toRules(rules))
    return new Lexer({start: result}, 'start')
  }

  function checkStateGroup(g, name, map) {
    var state = g && (g.push || g.next)
    if (state && !map[state]) {
      throw new Error("Missing state '" + state + "' (in token '" + g.defaultType + "' of state '" + name + "')")
    }
    if (g && g.pop && +g.pop !== 1) {
      throw new Error("pop must be 1 (in token '" + g.defaultType + "' of state '" + name + "')")
    }
  }
  function compileStates(states, start) {
    var all = states.$all ? toRules(states.$all) : []
    delete states.$all

    var keys = Object.getOwnPropertyNames(states)
    if (!start) start = keys[0]

    var ruleMap = Object.create(null)
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      ruleMap[key] = toRules(states[key]).concat(all)
    }
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      var rules = ruleMap[key]
      var included = Object.create(null)
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j]
        if (!rule.include) continue
        var splice = [j, 1]
        if (rule.include !== key && !included[rule.include]) {
          included[rule.include] = true
          var newRules = ruleMap[rule.include]
          if (!newRules) {
            throw new Error("Cannot include nonexistent state '" + rule.include + "' (in state '" + key + "')")
          }
          for (var k = 0; k < newRules.length; k++) {
            var newRule = newRules[k]
            if (rules.indexOf(newRule) !== -1) continue
            splice.push(newRule)
          }
        }
        rules.splice.apply(rules, splice)
        j--
      }
    }

    var map = Object.create(null)
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      map[key] = compileRules(ruleMap[key], true)
    }

    for (var i = 0; i < keys.length; i++) {
      var name = keys[i]
      var state = map[name]
      var groups = state.groups
      for (var j = 0; j < groups.length; j++) {
        checkStateGroup(groups[j], name, map)
      }
      var fastKeys = Object.getOwnPropertyNames(state.fast)
      for (var j = 0; j < fastKeys.length; j++) {
        checkStateGroup(state.fast[fastKeys[j]], name, map)
      }
    }

    return new Lexer(map, start)
  }

  function keywordTransform(map) {
    var reverseMap = Object.create(null)
    var byLength = Object.create(null)
    var types = Object.getOwnPropertyNames(map)
    for (var i = 0; i < types.length; i++) {
      var tokenType = types[i]
      var item = map[tokenType]
      var keywordList = Array.isArray(item) ? item : [item]
      keywordList.forEach(function(keyword) {
        (byLength[keyword.length] = byLength[keyword.length] || []).push(keyword)
        if (typeof keyword !== 'string') {
          throw new Error("keyword must be string (in keyword '" + tokenType + "')")
        }
        reverseMap[keyword] = tokenType
      })
    }

    // fast string lookup
    // https://jsperf.com/string-lookups
    function str(x) { return JSON.stringify(x) }
    var source = ''
    source += 'switch (value.length) {\n'
    for (var length in byLength) {
      var keywords = byLength[length]
      source += 'case ' + length + ':\n'
      source += 'switch (value) {\n'
      keywords.forEach(function(keyword) {
        var tokenType = reverseMap[keyword]
        source += 'case ' + str(keyword) + ': return ' + str(tokenType) + '\n'
      })
      source += '}\n'
    }
    source += '}\n'
    return Function('value', source) // type
  }

  /***************************************************************************/

  var Lexer = function(states, state) {
    this.startState = state
    this.states = states
    this.buffer = ''
    this.stack = []
    this.reset()
  }

  Lexer.prototype.reset = function(data, info) {
    this.buffer = data || ''
    this.index = 0
    this.line = info ? info.line : 1
    this.col = info ? info.col : 1
    this.queuedToken = info ? info.queuedToken : null
    this.queuedThrow = info ? info.queuedThrow : null
    this.setState(info ? info.state : this.startState)
    this.stack = info && info.stack ? info.stack.slice() : []
    return this
  }

  Lexer.prototype.save = function() {
    return {
      line: this.line,
      col: this.col,
      state: this.state,
      stack: this.stack.slice(),
      queuedToken: this.queuedToken,
      queuedThrow: this.queuedThrow,
    }
  }

  Lexer.prototype.setState = function(state) {
    if (!state || this.state === state) return
    this.state = state
    var info = this.states[state]
    this.groups = info.groups
    this.error = info.error
    this.re = info.regexp
    this.fast = info.fast
  }

  Lexer.prototype.popState = function() {
    this.setState(this.stack.pop())
  }

  Lexer.prototype.pushState = function(state) {
    this.stack.push(this.state)
    this.setState(state)
  }

  var eat = hasSticky ? function(re, buffer) { // assume re is /y
    return re.exec(buffer)
  } : function(re, buffer) { // assume re is /g
    var match = re.exec(buffer)
    // will always match, since we used the |(?:) trick
    if (match[0].length === 0) {
      return null
    }
    return match
  }

  Lexer.prototype._getGroup = function(match) {
    var groupCount = this.groups.length
    for (var i = 0; i < groupCount; i++) {
      if (match[i + 1] !== undefined) {
        return this.groups[i]
      }
    }
    throw new Error('Cannot find token type for matched text')
  }

  function tokenToString() {
    return this.value
  }

  Lexer.prototype.next = function() {
    var index = this.index

    // If a fallback token matched, we don't need to re-run the RegExp
    if (this.queuedGroup) {
      var token = this._token(this.queuedGroup, this.queuedText, index)
      this.queuedGroup = null
      this.queuedText = ""
      return token
    }

    var buffer = this.buffer
    if (index === buffer.length) {
      return // EOF
    }

    // Fast matching for single characters
    var group = this.fast[buffer.charCodeAt(index)]
    if (group) {
      return this._token(group, buffer.charAt(index), index)
    }

    // Execute RegExp
    var re = this.re
    re.lastIndex = index
    var match = eat(re, buffer)

    // Error tokens match the remaining buffer
    var error = this.error
    if (match == null) {
      return this._token(error, buffer.slice(index, buffer.length), index)
    }

    var group = this._getGroup(match)
    var text = match[0]

    if (error.fallback && match.index !== index) {
      this.queuedGroup = group
      this.queuedText = text

      // Fallback tokens contain the unmatched portion of the buffer
      return this._token(error, buffer.slice(index, match.index), index)
    }

    return this._token(group, text, index)
  }

  Lexer.prototype._token = function(group, text, offset) {
    // count line breaks
    var lineBreaks = 0
    if (group.lineBreaks) {
      var matchNL = /\n/g
      var nl = 1
      if (text === '\n') {
        lineBreaks = 1
      } else {
        while (matchNL.exec(text)) { lineBreaks++; nl = matchNL.lastIndex }
      }
    }

    var token = {
      type: (typeof group.type === 'function' && group.type(text)) || group.defaultType,
      value: typeof group.value === 'function' ? group.value(text) : text,
      text: text,
      toString: tokenToString,
      offset: offset,
      lineBreaks: lineBreaks,
      line: this.line,
      col: this.col,
    }
    // nb. adding more props to token object will make V8 sad!

    var size = text.length
    this.index += size
    this.line += lineBreaks
    if (lineBreaks !== 0) {
      this.col = size - nl + 1
    } else {
      this.col += size
    }

    // throw, if no rule with {error: true}
    if (group.shouldThrow) {
      throw new Error(this.formatError(token, "invalid syntax"))
    }

    if (group.pop) this.popState()
    else if (group.push) this.pushState(group.push)
    else if (group.next) this.setState(group.next)

    return token
  }

  if (typeof Symbol !== 'undefined' && Symbol.iterator) {
    var LexerIterator = function(lexer) {
      this.lexer = lexer
    }

    LexerIterator.prototype.next = function() {
      var token = this.lexer.next()
      return {value: token, done: !token}
    }

    LexerIterator.prototype[Symbol.iterator] = function() {
      return this
    }

    Lexer.prototype[Symbol.iterator] = function() {
      return new LexerIterator(this)
    }
  }

  Lexer.prototype.formatError = function(token, message) {
    if (token == null) {
      // An undefined token indicates EOF
      var text = this.buffer.slice(this.index)
      var token = {
        text: text,
        offset: this.index,
        lineBreaks: text.indexOf('\n') === -1 ? 0 : 1,
        line: this.line,
        col: this.col,
      }
    }
    var start = Math.max(0, token.offset - token.col + 1)
    var eol = token.lineBreaks ? token.text.indexOf('\n') : token.text.length
    var firstLine = this.buffer.substring(start, token.offset + eol)
    message += " at line " + token.line + " col " + token.col + ":\n\n"
    message += "  " + firstLine + "\n"
    message += "  " + Array(token.col).join(" ") + "^"
    return message
  }

  Lexer.prototype.clone = function() {
    return new Lexer(this.states, this.state)
  }

  Lexer.prototype.has = function(tokenType) {
    return true
  }


  return {
    compile: compile,
    states: compileStates,
    error: Object.freeze({error: true}),
    fallback: Object.freeze({fallback: true}),
    keywords: keywordTransform,
  }

}));

},{}],4:[function(require,module,exports){
(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.nearley = factory();
    }
}(this, function() {

    function Rule(name, symbols, postprocess) {
        this.id = ++Rule.highestId;
        this.name = name;
        this.symbols = symbols;        // a list of literal | regex class | nonterminal
        this.postprocess = postprocess;
        return this;
    }
    Rule.highestId = 0;

    Rule.prototype.toString = function(withCursorAt) {
        var symbolSequence = (typeof withCursorAt === "undefined")
                             ? this.symbols.map(getSymbolShortDisplay).join(' ')
                             : (   this.symbols.slice(0, withCursorAt).map(getSymbolShortDisplay).join(' ')
                                 + " ● "
                                 + this.symbols.slice(withCursorAt).map(getSymbolShortDisplay).join(' ')     );
        return this.name + " → " + symbolSequence;
    }


    // a State is a rule at a position from a given starting point in the input stream (reference)
    function State(rule, dot, reference, wantedBy) {
        this.rule = rule;
        this.dot = dot;
        this.reference = reference;
        this.data = [];
        this.wantedBy = wantedBy;
        this.isComplete = this.dot === rule.symbols.length;
    }

    State.prototype.toString = function() {
        return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };

    State.prototype.nextState = function(child) {
        var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
        state.left = this;
        state.right = child;
        if (state.isComplete) {
            state.data = state.build();
            // Having right set here will prevent the right state and its children
            // form being garbage collected
            state.right = undefined;
        }
        return state;
    };

    State.prototype.build = function() {
        var children = [];
        var node = this;
        do {
            children.push(node.right.data);
            node = node.left;
        } while (node.left);
        children.reverse();
        return children;
    };

    State.prototype.finish = function() {
        if (this.rule.postprocess) {
            this.data = this.rule.postprocess(this.data, this.reference, Parser.fail);
        }
    };


    function Column(grammar, index) {
        this.grammar = grammar;
        this.index = index;
        this.states = [];
        this.wants = {}; // states indexed by the non-terminal they expect
        this.scannable = []; // list of states that expect a token
        this.completed = {}; // states that are nullable
    }


    Column.prototype.process = function(nextColumn) {
        var states = this.states;
        var wants = this.wants;
        var completed = this.completed;

        for (var w = 0; w < states.length; w++) { // nb. we push() during iteration
            var state = states[w];

            if (state.isComplete) {
                state.finish();
                if (state.data !== Parser.fail) {
                    // complete
                    var wantedBy = state.wantedBy;
                    for (var i = wantedBy.length; i--; ) { // this line is hot
                        var left = wantedBy[i];
                        this.complete(left, state);
                    }

                    // special-case nullables
                    if (state.reference === this.index) {
                        // make sure future predictors of this rule get completed.
                        var exp = state.rule.name;
                        (this.completed[exp] = this.completed[exp] || []).push(state);
                    }
                }

            } else {
                // queue scannable states
                var exp = state.rule.symbols[state.dot];
                if (typeof exp !== 'string') {
                    this.scannable.push(state);
                    continue;
                }

                // predict
                if (wants[exp]) {
                    wants[exp].push(state);

                    if (completed.hasOwnProperty(exp)) {
                        var nulls = completed[exp];
                        for (var i = 0; i < nulls.length; i++) {
                            var right = nulls[i];
                            this.complete(state, right);
                        }
                    }
                } else {
                    wants[exp] = [state];
                    this.predict(exp);
                }
            }
        }
    }

    Column.prototype.predict = function(exp) {
        var rules = this.grammar.byName[exp] || [];

        for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
            var wantedBy = this.wants[exp];
            var s = new State(r, 0, this.index, wantedBy);
            this.states.push(s);
        }
    }

    Column.prototype.complete = function(left, right) {
        var copy = left.nextState(right);
        this.states.push(copy);
    }


    function Grammar(rules, start) {
        this.rules = rules;
        this.start = start || this.rules[0].name;
        var byName = this.byName = {};
        this.rules.forEach(function(rule) {
            if (!byName.hasOwnProperty(rule.name)) {
                byName[rule.name] = [];
            }
            byName[rule.name].push(rule);
        });
    }

    // So we can allow passing (rules, start) directly to Parser for backwards compatibility
    Grammar.fromCompiled = function(rules, start) {
        var lexer = rules.Lexer;
        if (rules.ParserStart) {
          start = rules.ParserStart;
          rules = rules.ParserRules;
        }
        var rules = rules.map(function (r) { return (new Rule(r.name, r.symbols, r.postprocess)); });
        var g = new Grammar(rules, start);
        g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable
        return g;
    }


    function StreamLexer() {
      this.reset("");
    }

    StreamLexer.prototype.reset = function(data, state) {
        this.buffer = data;
        this.index = 0;
        this.line = state ? state.line : 1;
        this.lastLineBreak = state ? -state.col : 0;
    }

    StreamLexer.prototype.next = function() {
        if (this.index < this.buffer.length) {
            var ch = this.buffer[this.index++];
            if (ch === '\n') {
              this.line += 1;
              this.lastLineBreak = this.index;
            }
            return {value: ch};
        }
    }

    StreamLexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak,
      }
    }

    StreamLexer.prototype.formatError = function(token, message) {
        // nb. this gets called after consuming the offending token,
        // so the culprit is index-1
        var buffer = this.buffer;
        if (typeof buffer === 'string') {
            var lines = buffer
                .split("\n")
                .slice(
                    Math.max(0, this.line - 5), 
                    this.line
                );

            var nextLineBreak = buffer.indexOf('\n', this.index);
            if (nextLineBreak === -1) nextLineBreak = buffer.length;
            var col = this.index - this.lastLineBreak;
            var lastLineDigits = String(this.line).length;
            message += " at line " + this.line + " col " + col + ":\n\n";
            message += lines
                .map(function(line, i) {
                    return pad(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
                }, this)
                .join("\n");
            message += "\n" + pad("", lastLineDigits + col) + "^\n";
            return message;
        } else {
            return message + " at index " + (this.index - 1);
        }

        function pad(n, length) {
            var s = String(n);
            return Array(length - s.length + 1).join(" ") + s;
        }
    }

    function Parser(rules, start, options) {
        if (rules instanceof Grammar) {
            var grammar = rules;
            var options = start;
        } else {
            var grammar = Grammar.fromCompiled(rules, start);
        }
        this.grammar = grammar;

        // Read options
        this.options = {
            keepHistory: false,
            lexer: grammar.lexer || new StreamLexer,
        };
        for (var key in (options || {})) {
            this.options[key] = options[key];
        }

        // Setup lexer
        this.lexer = this.options.lexer;
        this.lexerState = undefined;

        // Setup a table
        var column = new Column(grammar, 0);
        var table = this.table = [column];

        // I could be expecting anything.
        column.wants[grammar.start] = [];
        column.predict(grammar.start);
        // TODO what if start rule is nullable?
        column.process();
        this.current = 0; // token index
    }

    // create a reserved token for indicating a parse fail
    Parser.fail = {};

    Parser.prototype.feed = function(chunk) {
        var lexer = this.lexer;
        lexer.reset(chunk, this.lexerState);

        var token;
        while (true) {
            try {
                token = lexer.next();
                if (!token) {
                    break;
                }
            } catch (e) {
                // Create the next column so that the error reporter
                // can display the correctly predicted states.
                var nextColumn = new Column(this.grammar, this.current + 1);
                this.table.push(nextColumn);
                var err = new Error(this.reportLexerError(e));
                err.offset = this.current;
                err.token = e.token;
                throw err;
            }
            // We add new states to table[current+1]
            var column = this.table[this.current];

            // GC unused states
            if (!this.options.keepHistory) {
                delete this.table[this.current - 1];
            }

            var n = this.current + 1;
            var nextColumn = new Column(this.grammar, n);
            this.table.push(nextColumn);

            // Advance all tokens that expect the symbol
            var literal = token.text !== undefined ? token.text : token.value;
            var value = lexer.constructor === StreamLexer ? token.value : token;
            var scannable = column.scannable;
            for (var w = scannable.length; w--; ) {
                var state = scannable[w];
                var expect = state.rule.symbols[state.dot];
                // Try to consume the token
                // either regex or literal
                if (expect.test ? expect.test(value) :
                    expect.type ? expect.type === token.type
                                : expect.literal === literal) {
                    // Add it
                    var next = state.nextState({data: value, token: token, isToken: true, reference: n - 1});
                    nextColumn.states.push(next);
                }
            }

            // Next, for each of the rules, we either
            // (a) complete it, and try to see if the reference row expected that
            //     rule
            // (b) predict the next nonterminal it expects by adding that
            //     nonterminal's start state
            // To prevent duplication, we also keep track of rules we have already
            // added

            nextColumn.process();

            // If needed, throw an error:
            if (nextColumn.states.length === 0) {
                // No states at all! This is not good.
                var err = new Error(this.reportError(token));
                err.offset = this.current;
                err.token = token;
                throw err;
            }

            // maybe save lexer state
            if (this.options.keepHistory) {
              column.lexerState = lexer.save()
            }

            this.current++;
        }
        if (column) {
          this.lexerState = lexer.save()
        }

        // Incrementally keep track of results
        this.results = this.finish();

        // Allow chaining, for whatever it's worth
        return this;
    };

    Parser.prototype.reportLexerError = function(lexerError) {
        var tokenDisplay, lexerMessage;
        // Planning to add a token property to moo's thrown error
        // even on erroring tokens to be used in error display below
        var token = lexerError.token;
        if (token) {
            tokenDisplay = "input " + JSON.stringify(token.text[0]) + " (lexer error)";
            lexerMessage = this.lexer.formatError(token, "Syntax error");
        } else {
            tokenDisplay = "input (lexer error)";
            lexerMessage = lexerError.message;
        }
        return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };

    Parser.prototype.reportError = function(token) {
        var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== undefined ? token.value : token);
        var lexerMessage = this.lexer.formatError(token, "Syntax error");
        return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };

    Parser.prototype.reportErrorCommon = function(lexerMessage, tokenDisplay) {
        var lines = [];
        lines.push(lexerMessage);
        var lastColumnIndex = this.table.length - 2;
        var lastColumn = this.table[lastColumnIndex];
        var expectantStates = lastColumn.states
            .filter(function(state) {
                var nextSymbol = state.rule.symbols[state.dot];
                return nextSymbol && typeof nextSymbol !== "string";
            });

        if (expectantStates.length === 0) {
            lines.push('Unexpected ' + tokenDisplay + '. I did not expect any more input. Here is the state of my parse table:\n');
            this.displayStateStack(lastColumn.states, lines);
        } else {
            lines.push('Unexpected ' + tokenDisplay + '. Instead, I was expecting to see one of the following:\n');
            // Display a "state stack" for each expectant state
            // - which shows you how this state came to be, step by step.
            // If there is more than one derivation, we only display the first one.
            var stateStacks = expectantStates
                .map(function(state) {
                    return this.buildFirstStateStack(state, []) || [state];
                }, this);
            // Display each state that is expecting a terminal symbol next.
            stateStacks.forEach(function(stateStack) {
                var state = stateStack[0];
                var nextSymbol = state.rule.symbols[state.dot];
                var symbolDisplay = this.getSymbolDisplay(nextSymbol);
                lines.push('A ' + symbolDisplay + ' based on:');
                this.displayStateStack(stateStack, lines);
            }, this);
        }
        lines.push("");
        return lines.join("\n");
    }
    
    Parser.prototype.displayStateStack = function(stateStack, lines) {
        var lastDisplay;
        var sameDisplayCount = 0;
        for (var j = 0; j < stateStack.length; j++) {
            var state = stateStack[j];
            var display = state.rule.toString(state.dot);
            if (display === lastDisplay) {
                sameDisplayCount++;
            } else {
                if (sameDisplayCount > 0) {
                    lines.push('    ^ ' + sameDisplayCount + ' more lines identical to this');
                }
                sameDisplayCount = 0;
                lines.push('    ' + display);
            }
            lastDisplay = display;
        }
    };

    Parser.prototype.getSymbolDisplay = function(symbol) {
        return getSymbolLongDisplay(symbol);
    };

    /*
    Builds a the first state stack. You can think of a state stack as the call stack
    of the recursive-descent parser which the Nearley parse algorithm simulates.
    A state stack is represented as an array of state objects. Within a
    state stack, the first item of the array will be the starting
    state, with each successive item in the array going further back into history.

    This function needs to be given a starting state and an empty array representing
    the visited states, and it returns an single state stack.

    */
    Parser.prototype.buildFirstStateStack = function(state, visited) {
        if (visited.indexOf(state) !== -1) {
            // Found cycle, return null
            // to eliminate this path from the results, because
            // we don't know how to display it meaningfully
            return null;
        }
        if (state.wantedBy.length === 0) {
            return [state];
        }
        var prevState = state.wantedBy[0];
        var childVisited = [state].concat(visited);
        var childResult = this.buildFirstStateStack(prevState, childVisited);
        if (childResult === null) {
            return null;
        }
        return [state].concat(childResult);
    };

    Parser.prototype.save = function() {
        var column = this.table[this.current];
        column.lexerState = this.lexerState;
        return column;
    };

    Parser.prototype.restore = function(column) {
        var index = column.index;
        this.current = index;
        this.table[index] = column;
        this.table.splice(index + 1);
        this.lexerState = column.lexerState;

        // Incrementally keep track of results
        this.results = this.finish();
    };

    // nb. deprecated: use save/restore instead!
    Parser.prototype.rewind = function(index) {
        if (!this.options.keepHistory) {
            throw new Error('set option `keepHistory` to enable rewinding')
        }
        // nb. recall column (table) indicies fall between token indicies.
        //        col 0   --   token 0   --   col 1
        this.restore(this.table[index]);
    };

    Parser.prototype.finish = function() {
        // Return the possible parsings
        var considerations = [];
        var start = this.grammar.start;
        var column = this.table[this.table.length - 1]
        column.states.forEach(function (t) {
            if (t.rule.name === start
                    && t.dot === t.rule.symbols.length
                    && t.reference === 0
                    && t.data !== Parser.fail) {
                considerations.push(t);
            }
        });
        return considerations.map(function(c) {return c.data; });
    };

    function getSymbolLongDisplay(symbol) {
        var type = typeof symbol;
        if (type === "string") {
            return symbol;
        } else if (type === "object") {
            if (symbol.literal) {
                return JSON.stringify(symbol.literal);
            } else if (symbol instanceof RegExp) {
                return 'character matching ' + symbol;
            } else if (symbol.type) {
                return symbol.type + ' token';
            } else if (symbol.test) {
                return 'token matching ' + String(symbol.test);
            } else {
                throw new Error('Unknown symbol type: ' + symbol);
            }
        }
    }

    function getSymbolShortDisplay(symbol) {
        var type = typeof symbol;
        if (type === "string") {
            return symbol;
        } else if (type === "object") {
            if (symbol.literal) {
                return JSON.stringify(symbol.literal);
            } else if (symbol instanceof RegExp) {
                return symbol.toString();
            } else if (symbol.type) {
                return '%' + symbol.type;
            } else if (symbol.test) {
                return '<' + String(symbol.test) + '>';
            } else {
                throw new Error('Unknown symbol type: ' + symbol);
            }
        }
    }

    return {
        Parser: Parser,
        Grammar: Grammar,
        Rule: Rule,
    };

}));

},{}]},{},[2]);
