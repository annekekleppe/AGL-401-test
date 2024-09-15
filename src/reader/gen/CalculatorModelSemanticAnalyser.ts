// Generated by the Freon Language Generator.
import {} from "../../language/gen";
import { CalculatorModelWalker } from "../../utils/gen";
import { CalculatorModelSemanticAnalysisWalker } from "./CalculatorModelSemanticAnalysisWalker";
import { FreLanguageConcept, FreLanguage, FreNode, FreNodeReference } from "@freon4dsl/core";

export class CalculatorModelSemanticAnalyser {
    public correct(modelunit: FreNode) {
        let changesToBeMade: Map<FreNode, FreNode> = new Map<FreNode, FreNode>();
        // create the walker over the model tree
        const myWalker = new CalculatorModelWalker();

        // create the object that will find what needs ot be changed
        let myCorrector = new CalculatorModelSemanticAnalysisWalker(changesToBeMade);

        // and add the corrector to the walker
        myWalker.myWorkers.push(myCorrector);

        // do the work
        myWalker.walk(modelunit, () => {
            return true;
        });

        // now change all ref errors
        for (const [toBeReplaced, newObject] of changesToBeMade) {
            const myType: FreLanguageConcept = FreLanguage.getInstance().concept(toBeReplaced.freLanguageConcept());
            myType.properties.forEach((prop) => {
                if (prop.type !== "boolean" && !!toBeReplaced[prop.name]) {
                    newObject[prop.name] = toBeReplaced[prop.name];
                }
            });
            let parent: FreNode = toBeReplaced.freOwnerDescriptor().owner;
            const propName: string = toBeReplaced.freOwnerDescriptor().propertyName;
            const propIndex: number = toBeReplaced.freOwnerDescriptor().propertyIndex;
            if (propIndex !== undefined) {
                parent[propName].splice(propIndex, 1, newObject);
            } else {
                parent[propName] = newObject;
            }
        }
    }
}
