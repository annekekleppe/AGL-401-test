// Generated by the Freon Language Generator.
import { net } from "net.akehurst.language-agl-processor";
import SPPTBranch = net.akehurst.language.api.sppt.SPPTBranch;
import {
    Calculator,
    InputField,
    OutputField,
    InputFieldReference,
    NumberLiteralExpression,
    CalcExpression,
    LiteralExpression,
    MultiplyExpression,
    PlusExpression,
    MinusExpression,
    DivideExpression,
} from "../../language/gen";
import { CalculatorModelSyntaxAnalyser } from "./CalculatorModelSyntaxAnalyser";
import { FreNodeReference } from "@freon4dsl/core";

export class CalculatorSyntaxAnalyserPart {
    mainAnalyser: CalculatorModelSyntaxAnalyser;

    constructor(mainAnalyser: CalculatorModelSyntaxAnalyser) {
        this.mainAnalyser = mainAnalyser;
    }

    /**
     * Method to transform branches that match the following rule:
     * Calculator = 'Calculator' identifier
     *	 InputField*
     *	 OutputField* ;
     * @param branch
     * @private
     */
    public transformCalculator(branch: SPPTBranch): Calculator {
        // console.log('transformCalculator called: ' + branch.name);
        let __name: string;
        let __inputFields: InputField[];
        let __outputFields: OutputField[];
        const children = this.mainAnalyser.getChildren(branch);
        __name = this.mainAnalyser.transformSharedPackedParseTreeNode(children[1]); // RHSPrimEntry
        // RHSPartListEntry
        if (children[2].name !== "InputField") {
            __inputFields = this.mainAnalyser.transformSharedPackedParseTreeList<InputField>(children[2]);
        } else {
            // special case: only when this entry is the single rhs entry of this rule
            __inputFields = [];
            for (const child of children) {
                __inputFields.push(this.mainAnalyser.transformSharedPackedParseTreeNode(child));
            }
        } // RHSPartListEntry
        if (children[3].name !== "OutputField") {
            __outputFields = this.mainAnalyser.transformSharedPackedParseTreeList<OutputField>(children[3]);
        } else {
            // special case: only when this entry is the single rhs entry of this rule
            __outputFields = [];
            for (const child of children) {
                __outputFields.push(this.mainAnalyser.transformSharedPackedParseTreeNode(child));
            }
        }
        return Calculator.create({
            name: __name,
            inputFields: __inputFields,
            outputFields: __outputFields,
            parseLocation: this.mainAnalyser.location(branch),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * InputField = 'input' identifier ;
     * @param branch
     * @private
     */
    public transformInputField(branch: SPPTBranch): InputField {
        // console.log('transformInputField called: ' + branch.name);
        let __name: string;
        const children = this.mainAnalyser.getChildren(branch);
        __name = this.mainAnalyser.transformSharedPackedParseTreeNode(children[1]); // RHSPrimEntry

        return InputField.create({
            name: __name,
            parseLocation: this.mainAnalyser.location(branch),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * OutputField = 'output' CalcExpression ;
     * @param branch
     * @private
     */
    public transformOutputField(branch: SPPTBranch): OutputField {
        // console.log('transformOutputField called: ' + branch.name);
        let __expression: CalcExpression;
        const children = this.mainAnalyser.getChildren(branch);
        __expression = this.mainAnalyser.transformSharedPackedParseTreeNode(children[1]); // RHSPartEntry

        return OutputField.create({
            expression: __expression,
            parseLocation: this.mainAnalyser.location(branch),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * InputFieldReference = __fre_reference ;
     * @param branch
     * @private
     */
    public transformInputFieldReference(branch: SPPTBranch): InputFieldReference {
        // console.log('transformInputFieldReference called: ' + branch.name);
        let __field: FreNodeReference<InputField>;
        const children = this.mainAnalyser.getChildren(branch);
        __field = this.mainAnalyser.freNodeRef<InputField>(children[0], "InputField"); // RHSRefEntry

        return InputFieldReference.create({
            field: __field,
            parseLocation: this.mainAnalyser.location(branch),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * NumberLiteralExpression = stringLiteral ;
     * @param branch
     * @private
     */
    public transformNumberLiteralExpression(branch: SPPTBranch): NumberLiteralExpression {
        // console.log('transformNumberLiteralExpression called: ' + branch.name);
        let __value: string;
        const children = this.mainAnalyser.getChildren(branch);
        __value = this.mainAnalyser.transformSharedPackedParseTreeNode(children[0]); // RHSPrimEntry

        return NumberLiteralExpression.create({
            value: __value,
            parseLocation: this.mainAnalyser.location(branch),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * CalcExpression = InputFieldReference
     *    | LiteralExpression
     *    | __fre_binary_CalcExpression ;
     * @param branch
     * @private
     */
    public transformCalcExpression(branch: SPPTBranch): CalcExpression {
        // console.log('transformCalcExpression called: ' + branch.name);
        return this.mainAnalyser.transformSharedPackedParseTreeNode(branch.nonSkipChildren.toArray()[0]);
    }

    /**
     * Method to transform branches that match the following rule:
     * LiteralExpression = NumberLiteralExpression  ;
     * @param branch
     * @private
     */
    public transformLiteralExpression(branch: SPPTBranch): LiteralExpression {
        // console.log('transformLiteralExpression called: ' + branch.name);
        return this.mainAnalyser.transformSharedPackedParseTreeNode(branch.nonSkipChildren.toArray()[0]);
    }

    /**
     * Generic method to transform binary expressions, which are parsed
     * according to these rules:
     * __fre_binary_CalcExpression = [CalcExpression / __fre_binary_operator]2+ ;
     * leaf __fre_binary_operator = '*' | '+' | '-' | '/' ;
     *
     * In this method we build a crooked tree, which in a later phase needs to be balanced
     * according to the priorities of the operators.
     * @param branch
     * @private
     */
    public transform__fre_binary_CalcExpression(branch: SPPTBranch): CalcExpression {
        // console.log('transform__fre_binary_CalcExpression called: ' + branch.name);
        const children = branch.nonSkipChildren.toArray();
        let index = 0;
        let first = this.mainAnalyser.transformSharedPackedParseTreeNode(children[index++]);
        while (index < children.length) {
            let operator = this.mainAnalyser.transformSharedPackedParseTreeNode(children[index++]);
            let second = this.mainAnalyser.transformSharedPackedParseTreeNode(children[index++]);
            let combined: CalcExpression = null;
            switch (operator) {
                case "*": {
                    combined = MultiplyExpression.create({ left: first, right: second, parseLocation: this.mainAnalyser.location(branch) });
                    break;
                }
                case "+": {
                    combined = PlusExpression.create({ left: first, right: second, parseLocation: this.mainAnalyser.location(branch) });
                    break;
                }
                case "-": {
                    combined = MinusExpression.create({ left: first, right: second, parseLocation: this.mainAnalyser.location(branch) });
                    break;
                }
                case "/": {
                    combined = DivideExpression.create({ left: first, right: second, parseLocation: this.mainAnalyser.location(branch) });
                    break;
                }
                default: {
                    combined = null;
                }
            }
            first = combined;
        }
        return first;
    }
}
