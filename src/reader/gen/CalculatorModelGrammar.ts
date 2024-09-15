// Generated by the Freon Language Generator.
// This file contains the input to the AGL parser generator
// (see https://https://github.com/dhakehurst/net.akehurst.language).
// The grammar in this file is read by CalculatorModelModelUnitReader

export const CalculatorModelGrammarStr = `
namespace CalculatorModelLanguage
grammar CalculatorModelGrammar {

// rules for "Calculator"
Calculator = 'Calculator' identifier
	 InputField*
	 OutputField* ;

InputField = 'input' identifier ;

OutputField = 'output' CalcExpression ;

InputFieldReference = __fre_reference ;

NumberLiteralExpression = stringLiteral ;

CalcExpression = InputFieldReference 
    | LiteralExpression 
    | __fre_binary_CalcExpression ;

LiteralExpression = NumberLiteralExpression  ;

__fre_binary_CalcExpression = [CalcExpression / __fre_binary_operator]2+ ;
leaf __fre_binary_operator = '*' | '+' | '-' | '/' ;

// common rules

__fre_reference = [ identifier / '.' ]+ ;

// white space and comments
skip WHITE_SPACE = "\\s+" ;
skip SINGLE_LINE_COMMENT = "//[^\\r\\n]*" ;
skip MULTI_LINE_COMMENT = "/\\*[^*]*\\*+(?:[^*/][^*]*\\*+)*/" ;

// the predefined basic types
leaf identifier          = "[a-zA-Z_][a-zA-Z0-9_]*" ;
/* see https://stackoverflow.com/questions/37032620/regex-for-matching-a-string-literal-in-java */
leaf stringLiteral       = '"' "[^\\"\\\\]*(\\\\.[^\\"\\\\]*)*" '"' ;
leaf numberLiteral       = "[0-9]+";
leaf booleanLiteral      = 'false' | 'true';

}`; // end of grammar
