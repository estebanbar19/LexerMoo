@include "../grammars/grammar.ne"

# ESTAMENTO BLOQUE DE CODIGO
bloquecodigo -> %lbracket "statement" %rbracket {% id %}