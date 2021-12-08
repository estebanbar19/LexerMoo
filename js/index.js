const nearley = require("nearley");
const grammar = require("../grammar.js");

var parser;

let text = document.getElementById("texto");
let button = document.getElementById("btn");

button.onclick = function () {
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), { keepHistory: true });
    console.log(text.value);
    parser.feed(text.value);
    if (parser.results.length > 1) throw new Error('grammar is ambiguous');
    console.log(parser.results);
}