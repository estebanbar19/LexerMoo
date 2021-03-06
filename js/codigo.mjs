// @ts-check
// @ts-ignore

const moo = require('moo');
const {compile} = moo;

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