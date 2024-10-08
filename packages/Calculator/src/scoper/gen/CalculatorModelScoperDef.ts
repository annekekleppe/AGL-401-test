// Generated by the Freon Language Generator.
import { FreLanguage, FreScoperComposite } from "@freon4dsl/core";
import { freonConfiguration } from "../../config/FreonConfiguration";
import { CalculatorModelScoper } from "./CalculatorModelScoper";

/**
 * Adds all known scopers to the main scoper.
 * @param rootScoper
 */
export function initializeScopers(rootScoper: FreScoperComposite) {
    for (const p of freonConfiguration.customScopers) {
        rootScoper.appendScoper(p);
    }
    rootScoper.appendScoper(new CalculatorModelScoper());
}

/**
 * Adds namespace info to the in-memory representation of the language metamodel.
 */
export function initializeScoperDef(rootScoper: FreScoperComposite) {
    FreLanguage.getInstance().classifier("CalculatorModel").isNamespace = true;
    initializeScopers(rootScoper);
}
