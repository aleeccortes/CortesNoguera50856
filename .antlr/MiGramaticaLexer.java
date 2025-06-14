// Generated from c:/Users/corte/OneDrive/Escritorio/Analizador/MiGramatica.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MiGramaticaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INT_TYPE=1, FLOAT_TYPE=2, CHAR_TYPE=3, RETURN=4, IDENTIFICADOR=5, ENTERO=6, 
		ADD=7, SUB=8, MUL=9, DIV=10, EQ=11, LPAREN=12, RPAREN=13, LBRACE=14, RBRACE=15, 
		SEMI=16, COMMA=17, WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INT_TYPE", "FLOAT_TYPE", "CHAR_TYPE", "RETURN", "IDENTIFICADOR", "ENTERO", 
			"ADD", "SUB", "MUL", "DIV", "EQ", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
			"SEMI", "COMMA", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'int'", "'float'", "'char'", "'return'", null, null, "'+'", "'-'", 
			"'*'", "'/'", "'='", "'('", "')'", "'{'", "'}'", "';'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INT_TYPE", "FLOAT_TYPE", "CHAR_TYPE", "RETURN", "IDENTIFICADOR", 
			"ENTERO", "ADD", "SUB", "MUL", "DIV", "EQ", "LPAREN", "RPAREN", "LBRACE", 
			"RBRACE", "SEMI", "COMMA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MiGramaticaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MiGramatica.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012d\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0005"+
		"\u0004>\b\u0004\n\u0004\f\u0004A\t\u0004\u0001\u0005\u0004\u0005D\b\u0005"+
		"\u000b\u0005\f\u0005E\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0004\u0011_\b\u0011\u000b"+
		"\u0011\f\u0011`\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012\u0001\u0000\u0004\u0002\u0000AZaz\u0003\u0000"+
		"09AZaz\u0001\u000009\u0003\u0000\t\n\r\r  f\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000"+
		"\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001"+
		"\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003)\u0001\u0000\u0000"+
		"\u0000\u0005/\u0001\u0000\u0000\u0000\u00074\u0001\u0000\u0000\u0000\t"+
		";\u0001\u0000\u0000\u0000\u000bC\u0001\u0000\u0000\u0000\rG\u0001\u0000"+
		"\u0000\u0000\u000fI\u0001\u0000\u0000\u0000\u0011K\u0001\u0000\u0000\u0000"+
		"\u0013M\u0001\u0000\u0000\u0000\u0015O\u0001\u0000\u0000\u0000\u0017Q"+
		"\u0001\u0000\u0000\u0000\u0019S\u0001\u0000\u0000\u0000\u001bU\u0001\u0000"+
		"\u0000\u0000\u001dW\u0001\u0000\u0000\u0000\u001fY\u0001\u0000\u0000\u0000"+
		"![\u0001\u0000\u0000\u0000#^\u0001\u0000\u0000\u0000%&\u0005i\u0000\u0000"+
		"&\'\u0005n\u0000\u0000\'(\u0005t\u0000\u0000(\u0002\u0001\u0000\u0000"+
		"\u0000)*\u0005f\u0000\u0000*+\u0005l\u0000\u0000+,\u0005o\u0000\u0000"+
		",-\u0005a\u0000\u0000-.\u0005t\u0000\u0000.\u0004\u0001\u0000\u0000\u0000"+
		"/0\u0005c\u0000\u000001\u0005h\u0000\u000012\u0005a\u0000\u000023\u0005"+
		"r\u0000\u00003\u0006\u0001\u0000\u0000\u000045\u0005r\u0000\u000056\u0005"+
		"e\u0000\u000067\u0005t\u0000\u000078\u0005u\u0000\u000089\u0005r\u0000"+
		"\u00009:\u0005n\u0000\u0000:\b\u0001\u0000\u0000\u0000;?\u0007\u0000\u0000"+
		"\u0000<>\u0007\u0001\u0000\u0000=<\u0001\u0000\u0000\u0000>A\u0001\u0000"+
		"\u0000\u0000?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@\n\u0001"+
		"\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000BD\u0007\u0002\u0000\u0000"+
		"CB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000"+
		"\u0000EF\u0001\u0000\u0000\u0000F\f\u0001\u0000\u0000\u0000GH\u0005+\u0000"+
		"\u0000H\u000e\u0001\u0000\u0000\u0000IJ\u0005-\u0000\u0000J\u0010\u0001"+
		"\u0000\u0000\u0000KL\u0005*\u0000\u0000L\u0012\u0001\u0000\u0000\u0000"+
		"MN\u0005/\u0000\u0000N\u0014\u0001\u0000\u0000\u0000OP\u0005=\u0000\u0000"+
		"P\u0016\u0001\u0000\u0000\u0000QR\u0005(\u0000\u0000R\u0018\u0001\u0000"+
		"\u0000\u0000ST\u0005)\u0000\u0000T\u001a\u0001\u0000\u0000\u0000UV\u0005"+
		"{\u0000\u0000V\u001c\u0001\u0000\u0000\u0000WX\u0005}\u0000\u0000X\u001e"+
		"\u0001\u0000\u0000\u0000YZ\u0005;\u0000\u0000Z \u0001\u0000\u0000\u0000"+
		"[\\\u0005,\u0000\u0000\\\"\u0001\u0000\u0000\u0000]_\u0007\u0003\u0000"+
		"\u0000^]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`^\u0001\u0000"+
		"\u0000\u0000`a\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000bc\u0006"+
		"\u0011\u0000\u0000c$\u0001\u0000\u0000\u0000\u0004\u0000?E`\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}