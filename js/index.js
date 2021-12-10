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