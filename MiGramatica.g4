grammar MiGramatica;

programa: declaraciones EOF;

declaraciones: declaracion+;

declaracion: tipo IDENTIFICADOR LPAREN parametros? RPAREN LBRACE cuerpo RBRACE;

tipo: INT_TYPE | FLOAT_TYPE | CHAR_TYPE;

parametros: parametro (COMMA parametro)*;
parametro: tipo IDENTIFICADOR;

cuerpo: instruccion+;

instruccion: retorno;

retorno: RETURN expresion SEMI;

expresion
    : expresion ADD termino
    | expresion SUB termino
    | termino
    ;

termino
    : termino MUL factor
    | termino DIV factor
    | factor
    ;

factor
    : LPAREN expresion RPAREN
    | ENTERO
    | IDENTIFICADOR
    ;

// === TOKENS ===
INT_TYPE: 'int';
FLOAT_TYPE: 'float';
CHAR_TYPE: 'char';
RETURN: 'return';

IDENTIFICADOR: [a-zA-Z][a-zA-Z0-9]*;
ENTERO: [0-9]+;

// Símbolos
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
EQ: '=';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMI: ';';
COMMA: ',';

// Ignorar espacios
WS: [ \t\r\n]+ -> skip;
