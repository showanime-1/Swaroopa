import { isSwaroopaField } from "./checks/swaroopaField.mjs";

/**
 * Creates a Swaroopa schema from field definitions.
 *
 * @template {Record<string, import("./types/types.mjs").SwaroopaField>} T
 *
 * @param {T} structure
 * Object whose keys are field names and values are swaroopa fields.
 *
 * @returns {Swaroopa<T>}
 * 
 * @throws {Error}
 * Throws if schema is invalid or conflicting.
 */
export function Swaroopa(structure) {
    if (typeof structure !== "object" || structure === null) {
        throw new Error("Swaroopa(): structure must be an object");
    }

    for (const [key, value] of Object.entries(structure)) {
        if (!isSwaroopaField(value)) {
            throw new Error(
                `Swaroopa(): field "${key}" is not a valid field schema`
            );
        }
    }

    return 
}