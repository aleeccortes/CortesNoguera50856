

import antlr4 from "antlr4";
import fs from "fs";
import readline from "readline";

import MiGramaticaLexer from "./generated/MiGramaticaLexer.js";
import MiGramaticaParser from "./generated/MiGramaticaParser.js";
import { MiGramaticaCustomVisitor } from "./MiGramaticaCustomVisitor.js";

class MyErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.syntaxErrors = 0;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.syntaxErrors++;
    console.error(`Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
  }

  getErrorCount() {
    return this.syntaxErrors;
  }
}



async function main() {
  let input;

  // Leer input desde archivo o consola
  try {
    input = fs.readFileSync("incorrect1.txt", "utf8");
  } catch {
    input = await askInput("Ingrese una cadena: ");
  }

  // Crear CharStream
  const chars = antlr4.CharStreams.fromString(input);

  // Crear lexer y token stream
  const lexer = new MiGramaticaLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);

  // Mostrar tabla de tokens
  tokens.fill();
  console.log("Tabla de tokens:");
  const symbolicNames = MiGramaticaLexer.symbolicNames;

tokens.tokens.forEach((tok, idx) => {
  const tokenName = tok.type === antlr4.Token.EOF
    ? "EOF"
    : (symbolicNames[tok.type] || "UNKNOWN");
  console.log(`Token[${idx}]: ${tokenName} - '${tok.text}'`);
});


  // Crear parser y parsear
  const parser = new MiGramaticaParser(tokens);
  parser.buildParseTrees = true;


  const tree = parser.programa();

  // Mostrar árbol sintáctico (texto)
  console.log("\nÁrbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));

  // Revisar errores de sintaxis (puedes implementar un listener para errores)
  if (parser.getNumberOfSyntaxErrors() > 0) {
    console.error("\nErrores de sintaxis detectados, abortando evaluación.");
    return;
  }

  // Evaluar con visitor
  const visitor = new MiGramaticaCustomVisitor();
  const result = visitor.visit(tree);

  console.log("\nResultado de la evaluación:");
  console.log(result);
}

function askInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

main();
