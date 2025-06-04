import MiGramaticaVisitor from "./generated/MiGramaticaVisitor.js";

export class MiGramaticaCustomVisitor extends MiGramaticaVisitor {
  constructor() {
    super();
    this.memory = new Map();
  }

  visitPrograma(ctx) {
    return this.visit(ctx.declaraciones());
  }

  visitDeclaracion(ctx) {
    // Por ahora solo visitamos el cuerpo
    return this.visit(ctx.cuerpo());
  }

  visitCuerpo(ctx) {
    let result;
    for (let i = 0; i < ctx.instruccion().length; i++) {
      result = this.visit(ctx.instruccion(i));
    }
    return result;
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.retorno());
  }

  visitRetorno(ctx) {
    return this.visit(ctx.expresion());
  }

  visitExpresion(ctx) {
    if (ctx.getChildCount() === 3) {
      // expresion op termino (sumas y restas)
      const left = this.visit(ctx.expresion());
      const right = this.visit(ctx.termino());
      const op = ctx.getChild(1).getText();
      if (op === "+") return left + right;
      if (op === "-") return left - right;
    } else {
      return this.visit(ctx.termino());
    }
  }

  visitTermino(ctx) {
    if (ctx.getChildCount() === 3) {
      // termino op factor (mul y div)
      const left = this.visit(ctx.termino());
      const right = this.visit(ctx.factor());
      const op = ctx.getChild(1).getText();
      if (op === "*") return left * right;
      if (op === "/") return left / right;
    } else {
      return this.visit(ctx.factor());
    }
  }

  visitFactor(ctx) {
    if (ctx.getChildCount() === 3) {
      // '(' expresion ')'
      return this.visit(ctx.expresion());
    } else if (ctx.ENTERO()) {
      return parseInt(ctx.ENTERO().getText());
    } else if (ctx.IDENTIFICADOR()) {
      const id = ctx.IDENTIFICADOR().getText();
      if (this.memory.has(id)) {
        return this.memory.get(id);
      } else {
        console.warn(`Variable ${id} no definida, se asume 0`);
        return 0;
      }
    }
  }
}
