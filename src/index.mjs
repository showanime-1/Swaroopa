/**
 * Checks whether a value is a Swaroopa swaroopa field.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSwaroopaFiels(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        value[SWAROOPA_FIELD_BRAND] === true
    );
}

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
        if (!isFieldSchema(value)) {
            throw new Error(
                `Swaroopa(): field "${key}" is not a valid field schema`
            );
        }
    }

    return 
}