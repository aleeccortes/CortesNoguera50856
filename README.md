SINTAXIS Y SEMÁNTICA DE LOS LENGUAJES

ANALIZADOR CON ANTLR4 Y JAVASCRIPT

Este repositorio contiene un analizador léxico,sintático y un intérprete básico para un lenguaje personalizado,generado con ANTLR4 y ejecutado con NODE.JS




Tecnologías utilizadas
	• ANTLR4
	• Node.js
	• JavaScript (ES Modules)
	• Visual Studio Code
Requisitos
	• Node.js instalado
	• ANTLR4 instalado globalmente o compiladores de ANTLR configurados


Instalación y uso
	1. Clonar el repositorio:

git clone https://github.com/aleeccortes/CortesNoguera50856.git
cd "(direccion de la carpeta donde va abrir el proyecto)"

	
 2. Instalar dependencias:

npm install

	
 3.  Ejecutar el analizador:
	
	
 npm start


 Se pueden cambiar los archivos de entrada para probar distintas entradas para el analizador,en el archivo index.js.
En la línea:
 
 input = fs.readFileSync("input.txt", "utf8");


cambiar entrada.txt por alguna de las siguientes alternativas:

-input2.txt
-incorrect1.txt
-incorrect2.txt
El el caso de que no se lea el archivo de texto de entrada en es línea deberá ingresarlo por consola.

