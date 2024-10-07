// Generated by the Freon Language Generator.
import * as AGL from "net.akehurst.language-agl-processor";
import { FreNamedNode, FreParseLocation, FreNodeReference } from "@freon4dsl/core";
import {
    CalcExpression,
    Calculator, DivideExpression,
    InputField,
    InputFieldReference, LiteralExpression, MinusExpression, MultiplyExpression,
    NumberLiteralExpression,
    OutputField, PlusExpression
} from "../../language/gen";
import {
    locationForNode
} from "net.akehurst.language-agl-processor/net.akehurst.language-agl-parser.mjs";
import {
    SyntaxAnalyserByMethodRegistrationAbstract,
    KtList, Sentence,
    SpptDataNodeInfo
} from "net.akehurst.language-agl-processor/net.akehurst.language-agl-processor.mjs";
import {SPPTBranch, SpptDataNode, SPPTNode} from "net.akehurst.language-agl-processor";

/**
 *   Class CalculatorModelSyntaxAnalyser is the main syntax analyser.
 *   The actual work is being done by its parts, one for each model unit,
 *   and one common part that contains the methods used in multiple units.
 *
 */
export class CalculatorModelSyntaxAnalyser extends SyntaxAnalyserByMethodRegistrationAbstract<Calculator> {
    sourceName: string = "";

    registerHandlers(branch: SPPTBranch) {
        super.registerFor("Calculator", (n, c, s) => this.transformCalculator(n ,c, s));
        super.registerFor("InputField", (n, c, s) => this.transformInputField(n ,c, s));
        super.registerFor("OutputField", (n, c, s) => this.transformOutputField(n ,c, s));
        super.registerFor("InputFieldReference", (n, c, s) => this.transformInputFieldReference(n ,c, s));
        super.registerFor("NumberLiteralExpression", (n, c, s) => this.transformNumberLiteralExpression(n ,c, s));
        super.registerFor("CalcExpression", (n, c, s) => this.transformCalcExpression(n ,c, s));
        super.registerFor("LiteralExpression", (n, c, s) => this.transformLiteralExpression(n ,c, s));
        super.registerFor("__fre_binary_CalcExpression", (n, c, s) => this.transform__fre_binary_CalcExpression(n ,c, s));
        super.registerFor("__fre_reference", (n, c, s) => this.transform__fre_reference(n, c, s));
    }

    /**
     * Method to transform branches that match the following rule:
     * Calculator = 'Calculator' identifier
     *	 InputField*
     *	 OutputField* ;
     * @param branch
     * @private
     */
    public transformCalculator(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): Calculator {
        console.log('transformCalculator called: ' + this.location(sentence, nodeInfo.node));
        let __name: string;
        let __inputFields: InputField[];
        let __outputFields: OutputField[];
        __name = children.asJsReadonlyArrayView()[1]; // RHSPrimEntry
        // RHSPartListEntry
        __inputFields = children.asJsReadonlyArrayView()[2].toArray();
        console.log("XXX " + __inputFields.constructor.name)
        // RHSPartListEntry
        __outputFields = children.asJsReadonlyArrayView()[3].toArray();
        console.log("YYY " + __inputFields.constructor.name)
        // }
        return Calculator.create({
            name: __name,
            inputFields: __inputFields,
            outputFields: __outputFields,
            parseLocation: this.location(sentence, nodeInfo.node),
        });
    }


    /**
     * Method to transform branches that match the following rule:
     * InputField = 'input' identifier ;
     * @param branch
     * @private
     */
    public transformInputField(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): InputField {
        console.log('transformInputField called: ' + nodeInfo.node.startPosition);
        let __name: string;
        __name = children.asJsReadonlyArrayView()[1]; // RHSPrimEntry
        console.log(children.asJsReadonlyArrayView()[0] + children.asJsReadonlyArrayView()[1])

        return InputField.create({
            name: __name,
            parseLocation: this.location(sentence, nodeInfo.node),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * OutputField = 'output' CalcExpression ;
     * @param branch
     * @private
     */
    public transformOutputField(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): OutputField {
        console.log('transformOutputField called: ' + nodeInfo.node.startPosition);
        let __expression: CalcExpression;
        __expression = children.asJsReadonlyArrayView()[1]; // RHSPartEntry

        return OutputField.create({
            expression: __expression,
            parseLocation: this.location(sentence, nodeInfo.node),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * InputFieldReference = __fre_reference ;
     * @param branch
     * @private
     */
    public transformInputFieldReference(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): InputFieldReference {
        console.log('transformInputFieldReference called: ' + nodeInfo.node.startPosition);
        let __field: FreNodeReference<InputField>;
        __field = FreNodeReference.create<InputField>(children.asJsReadonlyArrayView()[0], "InputField"); // RHSRefEntry

        return InputFieldReference.create({
            field: __field,
            parseLocation: this.location(sentence, nodeInfo.node),
        });
    }

    /**
     * Method to transform branches that match the following rule:
     * NumberLiteralExpression = stringLiteral ;
     * @param branch
     * @private
     */
    public transformNumberLiteralExpression(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): NumberLiteralExpression {
        console.log('transformNumberLiteralExpression called: ' + nodeInfo.node.startPosition);
        let __value: string;
        __value = children.asJsReadonlyArrayView()[0]; // RHSPrimEntry

        return NumberLiteralExpression.create({
            value: __value,
            parseLocation: this.location(sentence, nodeInfo.node),
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
    public transformCalcExpression(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): CalcExpression {
        console.log('transformCalcExpression called: ' + nodeInfo.node.startPosition);
        return children.asJsReadonlyArrayView()[0] as CalcExpression;
    }

    /**
     * Method to transform branches that match the following rule:
     * LiteralExpression = NumberLiteralExpression  ;
     * @param branch
     * @private
     */
    public transformLiteralExpression(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): LiteralExpression {
        console.log('transformLiteralExpression called: ' + nodeInfo.node.startPosition);
        return children.asJsReadonlyArrayView()[0];
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
    public transform__fre_binary_CalcExpression(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): CalcExpression {
        console.log('transform__fre_binary_CalcExpression called: ' + nodeInfo.node.startPosition);
        let index = 0;
        let first = children.asJsReadonlyArrayView()[index++];
        while (index < children.length) {
            let operator = children.asJsReadonlyArrayView()[index++];
            let second = children.asJsReadonlyArrayView()[index++];
            let combined: CalcExpression = null;
            switch (operator) {
                case "*": {
                    combined = MultiplyExpression.create({ left: first, right: second, parseLocation: this.location(sentence, nodeInfo.node) });
                    break;
                }
                case "+": {
                    combined = PlusExpression.create({ left: first, right: second, parseLocation: this.location(sentence, nodeInfo.node) });
                    break;
                }
                case "-": {
                    combined = MinusExpression.create({ left: first, right: second, parseLocation: this.location(sentence, nodeInfo.node) });
                    break;
                }
                case "/": {
                    combined = DivideExpression.create({ left: first, right: second, parseLocation: this.location(sentence, nodeInfo.node) });
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

    /**
     * __fre_reference = [ identifier / '.' ]+ ;
     * @param nodeInfo
     * @param children
     * @param sentence
     */
    public transform__fre_reference(nodeInfo: SpptDataNodeInfo, children: KtList<object>, sentence: Sentence): string[] {
        // todo this is the manner to calculate the correct length of the parsed string
        // const length: number = nodeInfo.node.nextInputPosition - nodeInfo.node.startPosition;
        // you can also try to use sentence.locationForNode(nodeInfo.node)
        // console.log('transform__fre_reference called: ' + nodeInfo.node.startPosition + sentence.locationFor(nodeInfo.node.startPosition, length).line);
        const props = children.asJsReadonlyArrayView()[0] as KtList<[string, any]>;
        console.log("\t " + props)
        return props;
    }

    public location(sentence: Sentence, node: SpptDataNode): FreParseLocation {
        // todo this is the way the location should be given, but the Kotlin code does not yet support this
        // const location = sentence.location(node.startPosition, node.nextInputNoSkip - node.startPosition)
        // console.log(`location: [${location.line}, ${location.column}]`)
        return FreParseLocation.create({
            filename: this.sourceName,
            // line: location.line
            // line: branch.location.line,
            // column: branch.location.column,
        });
    }
}
