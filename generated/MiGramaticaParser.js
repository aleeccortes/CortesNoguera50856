// Generated from MiGramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiGramaticaListener from './MiGramaticaListener.js';
import MiGramaticaVisitor from './MiGramaticaVisitor.js';

const serializedATN = [4,1,18,104,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,
0,1,1,4,1,29,8,1,11,1,12,1,30,1,2,1,2,1,2,1,2,3,2,37,8,2,1,2,1,2,1,2,1,2,
1,2,1,3,1,3,1,4,1,4,1,4,5,4,49,8,4,10,4,12,4,52,9,4,1,5,1,5,1,5,1,6,4,6,
58,8,6,11,6,12,6,59,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,5,9,77,8,9,10,9,12,9,80,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,5,10,91,8,10,10,10,12,10,94,9,10,1,11,1,11,1,11,1,11,1,11,1,11,3,
11,102,8,11,1,11,0,2,18,20,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,1,3,
101,0,24,1,0,0,0,2,28,1,0,0,0,4,32,1,0,0,0,6,43,1,0,0,0,8,45,1,0,0,0,10,
53,1,0,0,0,12,57,1,0,0,0,14,61,1,0,0,0,16,63,1,0,0,0,18,67,1,0,0,0,20,81,
1,0,0,0,22,101,1,0,0,0,24,25,3,2,1,0,25,26,5,0,0,1,26,1,1,0,0,0,27,29,3,
4,2,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,3,1,0,0,
0,32,33,3,6,3,0,33,34,5,5,0,0,34,36,5,12,0,0,35,37,3,8,4,0,36,35,1,0,0,0,
36,37,1,0,0,0,37,38,1,0,0,0,38,39,5,13,0,0,39,40,5,14,0,0,40,41,3,12,6,0,
41,42,5,15,0,0,42,5,1,0,0,0,43,44,7,0,0,0,44,7,1,0,0,0,45,50,3,10,5,0,46,
47,5,17,0,0,47,49,3,10,5,0,48,46,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,
51,1,0,0,0,51,9,1,0,0,0,52,50,1,0,0,0,53,54,3,6,3,0,54,55,5,5,0,0,55,11,
1,0,0,0,56,58,3,14,7,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,0,0,59,60,1,
0,0,0,60,13,1,0,0,0,61,62,3,16,8,0,62,15,1,0,0,0,63,64,5,4,0,0,64,65,3,18,
9,0,65,66,5,16,0,0,66,17,1,0,0,0,67,68,6,9,-1,0,68,69,3,20,10,0,69,78,1,
0,0,0,70,71,10,3,0,0,71,72,5,7,0,0,72,77,3,20,10,0,73,74,10,2,0,0,74,75,
5,8,0,0,75,77,3,20,10,0,76,70,1,0,0,0,76,73,1,0,0,0,77,80,1,0,0,0,78,76,
1,0,0,0,78,79,1,0,0,0,79,19,1,0,0,0,80,78,1,0,0,0,81,82,6,10,-1,0,82,83,
3,22,11,0,83,92,1,0,0,0,84,85,10,3,0,0,85,86,5,9,0,0,86,91,3,22,11,0,87,
88,10,2,0,0,88,89,5,10,0,0,89,91,3,22,11,0,90,84,1,0,0,0,90,87,1,0,0,0,91,
94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,21,1,0,0,0,94,92,1,0,0,0,95,96,
5,12,0,0,96,97,3,18,9,0,97,98,5,13,0,0,98,102,1,0,0,0,99,102,5,6,0,0,100,
102,5,5,0,0,101,95,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,23,1,0,0,0,
9,30,36,50,59,76,78,90,92,101];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiGramaticaParser extends antlr4.Parser {

    static grammarFileName = "MiGramatica.g4";
    static literalNames = [ null, "'int'", "'float'", "'char'", "'return'", 
                            null, null, "'+'", "'-'", "'*'", "'/'", "'='", 
                            "'('", "')'", "'{'", "'}'", "';'", "','" ];
    static symbolicNames = [ null, "INT_TYPE", "FLOAT_TYPE", "CHAR_TYPE", 
                             "RETURN", "IDENTIFICADOR", "ENTERO", "ADD", 
                             "SUB", "MUL", "DIV", "EQ", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "SEMI", "COMMA", "WS" ];
    static ruleNames = [ "programa", "declaraciones", "declaracion", "tipo", 
                         "parametros", "parametro", "cuerpo", "instruccion", 
                         "retorno", "expresion", "termino", "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiGramaticaParser.ruleNames;
        this.literalNames = MiGramaticaParser.literalNames;
        this.symbolicNames = MiGramaticaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 10:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 3);
    		case 3:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiGramaticaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.declaraciones();
	        this.state = 25;
	        this.match(MiGramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiGramaticaParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.declaracion();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiGramaticaParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.tipo();
	        this.state = 33;
	        this.match(MiGramaticaParser.IDENTIFICADOR);
	        this.state = 34;
	        this.match(MiGramaticaParser.LPAREN);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 35;
	            this.parametros();
	        }

	        this.state = 38;
	        this.match(MiGramaticaParser.RPAREN);
	        this.state = 39;
	        this.match(MiGramaticaParser.LBRACE);
	        this.state = 40;
	        this.cuerpo();
	        this.state = 41;
	        this.match(MiGramaticaParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiGramaticaParser.RULE_tipo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiGramaticaParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.parametro();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 46;
	            this.match(MiGramaticaParser.COMMA);
	            this.state = 47;
	            this.parametro();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiGramaticaParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.tipo();
	        this.state = 54;
	        this.match(MiGramaticaParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cuerpo() {
	    let localctx = new CuerpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiGramaticaParser.RULE_cuerpo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 56;
	            this.instruccion();
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiGramaticaParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.retorno();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiGramaticaParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(MiGramaticaParser.RETURN);
	        this.state = 64;
	        this.expresion(0);
	        this.state = 65;
	        this.match(MiGramaticaParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, MiGramaticaParser.RULE_expresion, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 76;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MiGramaticaParser.RULE_expresion);
	                    this.state = 70;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 71;
	                    this.match(MiGramaticaParser.ADD);
	                    this.state = 72;
	                    this.termino(0);
	                    break;

	                case 2:
	                    localctx = new ExpresionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MiGramaticaParser.RULE_expresion);
	                    this.state = 73;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 74;
	                    this.match(MiGramaticaParser.SUB);
	                    this.state = 75;
	                    this.termino(0);
	                    break;

	                } 
	            }
	            this.state = 80;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, MiGramaticaParser.RULE_termino, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 90;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MiGramaticaParser.RULE_termino);
	                    this.state = 84;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 85;
	                    this.match(MiGramaticaParser.MUL);
	                    this.state = 86;
	                    this.factor();
	                    break;

	                case 2:
	                    localctx = new TerminoContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, MiGramaticaParser.RULE_termino);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 88;
	                    this.match(MiGramaticaParser.DIV);
	                    this.state = 89;
	                    this.factor();
	                    break;

	                } 
	            }
	            this.state = 94;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiGramaticaParser.RULE_factor);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.match(MiGramaticaParser.LPAREN);
	            this.state = 96;
	            this.expresion(0);
	            this.state = 97;
	            this.match(MiGramaticaParser.RPAREN);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.match(MiGramaticaParser.ENTERO);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.match(MiGramaticaParser.IDENTIFICADOR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiGramaticaParser.EOF = antlr4.Token.EOF;
MiGramaticaParser.INT_TYPE = 1;
MiGramaticaParser.FLOAT_TYPE = 2;
MiGramaticaParser.CHAR_TYPE = 3;
MiGramaticaParser.RETURN = 4;
MiGramaticaParser.IDENTIFICADOR = 5;
MiGramaticaParser.ENTERO = 6;
MiGramaticaParser.ADD = 7;
MiGramaticaParser.SUB = 8;
MiGramaticaParser.MUL = 9;
MiGramaticaParser.DIV = 10;
MiGramaticaParser.EQ = 11;
MiGramaticaParser.LPAREN = 12;
MiGramaticaParser.RPAREN = 13;
MiGramaticaParser.LBRACE = 14;
MiGramaticaParser.RBRACE = 15;
MiGramaticaParser.SEMI = 16;
MiGramaticaParser.COMMA = 17;
MiGramaticaParser.WS = 18;

MiGramaticaParser.RULE_programa = 0;
MiGramaticaParser.RULE_declaraciones = 1;
MiGramaticaParser.RULE_declaracion = 2;
MiGramaticaParser.RULE_tipo = 3;
MiGramaticaParser.RULE_parametros = 4;
MiGramaticaParser.RULE_parametro = 5;
MiGramaticaParser.RULE_cuerpo = 6;
MiGramaticaParser.RULE_instruccion = 7;
MiGramaticaParser.RULE_retorno = 8;
MiGramaticaParser.RULE_expresion = 9;
MiGramaticaParser.RULE_termino = 10;
MiGramaticaParser.RULE_factor = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_programa;
    }

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	EOF() {
	    return this.getToken(MiGramaticaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_declaraciones;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterDeclaraciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitDeclaraciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_declaracion;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(MiGramaticaParser.IDENTIFICADOR, 0);
	};

	LPAREN() {
	    return this.getToken(MiGramaticaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(MiGramaticaParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MiGramaticaParser.LBRACE, 0);
	};

	cuerpo() {
	    return this.getTypedRuleContext(CuerpoContext,0);
	};

	RBRACE() {
	    return this.getToken(MiGramaticaParser.RBRACE, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_tipo;
    }

	INT_TYPE() {
	    return this.getToken(MiGramaticaParser.INT_TYPE, 0);
	};

	FLOAT_TYPE() {
	    return this.getToken(MiGramaticaParser.FLOAT_TYPE, 0);
	};

	CHAR_TYPE() {
	    return this.getToken(MiGramaticaParser.CHAR_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MiGramaticaParser.COMMA);
	    } else {
	        return this.getToken(MiGramaticaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_parametro;
    }

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	IDENTIFICADOR() {
	    return this.getToken(MiGramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CuerpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_cuerpo;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterCuerpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitCuerpo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitCuerpo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_instruccion;
    }

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_retorno;
    }

	RETURN() {
	    return this.getToken(MiGramaticaParser.RETURN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMI() {
	    return this.getToken(MiGramaticaParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	ADD() {
	    return this.getToken(MiGramaticaParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(MiGramaticaParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	MUL() {
	    return this.getToken(MiGramaticaParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(MiGramaticaParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_factor;
    }

	LPAREN() {
	    return this.getToken(MiGramaticaParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(MiGramaticaParser.RPAREN, 0);
	};

	ENTERO() {
	    return this.getToken(MiGramaticaParser.ENTERO, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(MiGramaticaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiGramaticaParser.ProgramaContext = ProgramaContext; 
MiGramaticaParser.DeclaracionesContext = DeclaracionesContext; 
MiGramaticaParser.DeclaracionContext = DeclaracionContext; 
MiGramaticaParser.TipoContext = TipoContext; 
MiGramaticaParser.ParametrosContext = ParametrosContext; 
MiGramaticaParser.ParametroContext = ParametroContext; 
MiGramaticaParser.CuerpoContext = CuerpoContext; 
MiGramaticaParser.InstruccionContext = InstruccionContext; 
MiGramaticaParser.RetornoContext = RetornoContext; 
MiGramaticaParser.ExpresionContext = ExpresionContext; 
MiGramaticaParser.TerminoContext = TerminoContext; 
MiGramaticaParser.FactorContext = FactorContext; 
