// Generated by the Freon Language Generator.
import { FreBinaryExpression, FreParseLocation } from "@freon4dsl/core";
import { BinaryExpression, CalcExpression } from "./internal";

/**
 * Class MinusExpression is the implementation of the binary expression concept with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to any changes in the state of its properties.
 */
export class MinusExpression extends BinaryExpression implements FreBinaryExpression {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data partial object
     */
    static create(data: Partial<MinusExpression>): MinusExpression {
        const result = new MinusExpression(data.$id);
        if (!!data.left) {
            result.left = data.left;
        }
        if (!!data.right) {
            result.right = data.right;
        }
        if (!!data.parseLocation) {
            result.parseLocation = data.parseLocation;
        }
        return result;
    }

    readonly $typename: string = "MinusExpression"; // holds the metatype in the form of a string

    parseLocation: FreParseLocation; // if relevant, the location of this element within the source from which it is parsed

    constructor(id?: string) {
        super(id);
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    freLanguageConcept(): string {
        return this.$typename;
    }

    /**
     * Returns true if this instance is a model concept.
     */
    freIsModel(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is a model unit.
     */
    freIsUnit(): boolean {
        return false;
    }

    /**
     * Returns true if this instance is an expression concept.
     */
    freIsExpression(): boolean {
        return true;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    freIsBinaryExpression(): boolean {
        return true;
    }
    /**
     * A convenience method that copies this instance into a new object.
     */
    copy(): MinusExpression {
        const result = new MinusExpression();
        if (!!this.left) {
            result.left = this.left.copy();
        }
        if (!!this.right) {
            result.right = this.right.copy();
        }
        return result;
    }

    /**
     * Returns the priority of this expression instance.
     * Used to balance the expression tree.
     */
    frePriority(): number {
        return 4;
    }

    /**
     * Returns the left element of this binary expression.
     */
    public freLeft(): CalcExpression {
        return this.left;
    }

    /**
     * Returns the right element of this binary expression.
     */
    public freRight(): CalcExpression {
        return this.right;
    }

    /**
     * Sets the left element of this binary expression.
     */
    public freSetLeft(value: CalcExpression): void {
        this.left = value;
    }

    /**
     * Sets the right element of this binary expression.
     */
    public freSetRight(value: CalcExpression): void {
        this.right = value;
    }
}
