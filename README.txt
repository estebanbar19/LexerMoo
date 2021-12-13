===========EJEMPLO 1============


entero genesis(){

entero num1 <<< 5|
decimalL num2 <<< 6.5|

impresion#[num1,num2] suma|

apocalipsis|
}|

entero [a,b] suma{
     retornar a+b|
}|


==================================

===========EJEMPLO 2===============

entero genesis(){
     entero num <<< 1|

     mientrasQue(num menorQue 6)entonces{
          impresion#num#" "|
          num_mas mas|
     }|

     apocalipsis|
}|

====================================

===========EJEMPLO 3=================

entero genesis(){
     logico x <<< false|
     entero num <<< 5|
     decimalC num2 <<< 12.5|

     si(x igualQue true)entonces{
          impresion#num|
     }sin't{
          impresion#num2|
     }|

     apocalipsis|
}|

=======================================

=============EJEMPLO 4=================

entero genesis(){

entero i <<< 0|
entero j <<< 0|
hacer{
     mientrasQue(j menorQue 5)entonces{
          impresion#"Valor de j es: "#j|
          j_mas mas|
     }|
     j <<< 0|
     impresion#"FIN"#i|
     i_mas mas|
}mientrasQue(i menorQue 10)|

apocalipsis|
}

==========================================