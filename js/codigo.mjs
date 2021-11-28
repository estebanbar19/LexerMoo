// @ts-check
// @ts-ignore
import pkg from "moo";

const {compile} = pkg;

//import { compile } from "moo";

// [ \w]+\(+[\w\d \,\-]*?\)

// @ts-ignore
let lexer = compile({
    function: /[ \w]*\w+\s*\(\s*[\w-\s+\,]*[^\,]\)/,
    keyword: ['Para', 'mientrasQue', 'si', "sint't", 'caso', 'entero', 'logico', 'decimalL', 'decimalC', 'retornar', '<<<', 'impresion', 'salto'],
    comparadorNumerico: ['menorQue', 'mayorQue', 'igualQue', 'menorIgualQue', 'mayorIgualQue'],
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    stringQuotes:  /"(?:\\["\\]|[^\n"\\])*"/,
    string:  /[a-zA-Z-0-9]+/,
    lparen:  '(',
    rparen:  ')',
    lbracket: '{',
    rbracket: '}',
    finLinea: '|',
    characterKey: ['#', ','],
    NL:      { match: /\n/, lineBreaks: true },
})

lexer.reset('entero genesis(num1){impresion#"La suma de pares es: "#par#salto|}')
for(let here of lexer){
    console.log(here.type+": "+here.value);
}


// /[a-zA-Z]+[ ]+[a-zA-Z]+[ (]+[a-zA-Z,- ]+[)]/
// entero genesis( adn  , arn, num-1, num-2)


// entero genesis(){
// 	entero par<<<0,valor<<<0,impar<<<0|
// 	srand [time(NULO)]|
// 	para(entero i<<<0|i menorQue 20|i mas mas){
// 		valor<<<rand() mod 20|
// 		si (valor mod 2 igualQue 0){
// 			par mas<<< valor|
// 		}	
// 		sin't {
// 			impar mas<<< valor|
// 		}
// 	}
// 	impresion#"La suma de pares es: "#par#salto|
// 	impresion#"La suma de impares es: "#impar#salto|

// 	apocalipsis|
	
// }



// var texto = document.getElementById("texto");
// var btn = document.getElementById("btn");

// texto.oninput = ()=>{
//     // @ts-ignore
//     console.log(texto.value);
// }

// btn.onclick = ()=>{
//     console.log(texto.nodeValue)
// }