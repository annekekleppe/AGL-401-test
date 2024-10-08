// Generated by the Freon Language Generator.
import {
    FreModelUnit,
    MobxModelElementImpl,
    observableprim,
    observablepart,
    FreModel,
    FreLanguage,
    FreParseLocation,
    FreUtils,
} from "@freon4dsl/core";
import { Calculator } from "./internal";

/**
 * Class CalculatorModel is the implementation of the model with the same name in the language definition file.
 * It uses mobx decorators to enable parts of the language environment, e.g. the editor, to react
 * to any changes in the state of its properties.
 */
export class CalculatorModel extends MobxModelElementImpl implements FreModel {
    /**
     * A convenience method that creates an instance of this class
     * based on the properties defined in 'data'.
     * @param data partial object
     */
    static create(data: Partial<CalculatorModel>): CalculatorModel {
        const result = new CalculatorModel(data.$id);
        if (!!data.name) {
            result.name = data.name;
        }
        if (!!data.calc) {
            result.calc = data.calc;
        }
        if (!!data.parseLocation) {
            result.parseLocation = data.parseLocation;
        }
        return result;
    }

    readonly $typename: string = "CalculatorModel"; // holds the metatype in the form of a string
    $id: string = ""; // a unique identifier
    parseLocation: FreParseLocation; // if relevant, the location of this element within the source from which it is parsed
    name: string; // implementation of name
    calc: Calculator; // implementation of part 'calc'

    constructor(id?: string) {
        super();
        if (!!id) {
            this.$id = id;
        } else {
            this.$id = FreUtils.ID(); // uuid.v4();
        }

        // Both 'observablepart' and 'observablepartlist' change the get and set of the attribute
        // such that the parent-part relationship is consistently maintained,
        // and make sure the part is observable. In lists no 'null' or 'undefined' values are allowed.
        observablepart(this, "calc");
    }

    /**
     * Returns the metatype of this instance in the form of a string.
     */
    freLanguageConcept(): string {
        return this.$typename;
    }

    /**
     * Returns the unique identifier of this instance.
     */
    freId(): string {
        return this.$id;
    }

    /**
     * Returns true if this instance is a model concept.
     */
    freIsModel(): boolean {
        return true;
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
        return false;
    }

    /**
     * Returns true if this instance is a binary expression concept.
     */
    freIsBinaryExpression(): boolean {
        return false;
    }
    /**
     * A convenience method that copies this instance into a new object.
     */
    copy(): CalculatorModel {
        const result = new CalculatorModel();
        if (!!this.name) {
            result.name = this.name;
        }
        if (!!this.calc) {
            result.calc = this.calc.copy();
        }
        return result;
    }
    /**
     * Matches a partial instance of this class to this object
     * based on the properties defined in the partial.
     * @param toBeMatched
     */
    public match(toBeMatched: Partial<CalculatorModel>): boolean {
        let result: boolean = true;
        if (result && toBeMatched.name !== null && toBeMatched.name !== undefined && toBeMatched.name.length > 0) {
            result = result && this.name === toBeMatched.name;
        }
        if (result && !!toBeMatched.calc) {
            result = result && this.calc.match(toBeMatched.calc);
        }
        return result;
    }

    /**
     * A convenience method that finds a unit of this model based on its name and 'metatype'.
     * @param name
     * @param metatype
     */
    findUnit(name: string, metatype?: string): FreModelUnit {
        let result: FreModelUnit = null;
        const checkType = metatype !== undefined;
        result = this.getUnits().find(
            (mod) => mod.name === name && (checkType ? FreLanguage.getInstance().metaConformsToType(mod, metatype) : true),
        );
        if (!!result) {
            return result;
        }
        return null;
    }

    /**
     * Replaces a model unit by a new one. Used for swapping between complete units and unit public interfaces.
     * Returns false if the replacement could not be done, e.g. because 'oldUnit' is not a child of this object.
     * @param oldUnit
     * @param newUnit
     */
    replaceUnit(oldUnit: FreModelUnit, newUnit: FreModelUnit): boolean {
        if (oldUnit.freLanguageConcept() !== newUnit.freLanguageConcept()) {
            return false;
        }
        if (oldUnit.freOwnerDescriptor().owner !== this) {
            return false;
        }
        // we must store the interface in the same place as the old unit, which info is held in FreContainer()
        if (oldUnit.freLanguageConcept() === "Calculator" && oldUnit.freOwnerDescriptor().propertyName === "calc") {
            this.calc = newUnit as Calculator;
        } else {
            return false;
        }
        return true;
    }

    /**
     * Adds a model unit. Returns false if anything goes wrong.
     *
     * @param newUnit
     */
    addUnit(newUnit: FreModelUnit): boolean {
        if (!!newUnit) {
            const myMetatype = newUnit.freLanguageConcept();
            switch (myMetatype) {
                case "Calculator": {
                    this.calc = newUnit as Calculator;
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Removes a model unit. Returns false if anything goes wrong.
     *
     * @param oldUnit
     */
    removeUnit(oldUnit: FreModelUnit): boolean {
        if (!!oldUnit) {
            const myMetatype = oldUnit.freLanguageConcept();
            switch (myMetatype) {
                case "Calculator": {
                    this.calc = null;
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Returns an empty model unit of type 'typeName' within 'model'.
     *
     * @param typename
     */
    newUnit(typename: string): FreModelUnit {
        switch (typename) {
            case "Calculator": {
                const unit: Calculator = Calculator.create({});
                this.calc = unit as Calculator;
                return unit;
            }
        }
        return null;
    }

    /**
     * Returns a list of model units.
     */
    getUnits(): FreModelUnit[] {
        let result: FreModelUnit[] = [];
        if (!!this.calc) {
            result.push(this.calc);
        }
        return result;
    }

    /**
     * Returns a list of model units of type 'type'.
     */
    getUnitsForType(type: string): FreModelUnit[] {
        switch (type) {
            case "Calculator": {
                let result: FreModelUnit[] = [];
                result.push(this.calc);
                return result;
            }
        }
        return [];
    }
}
