import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} UndefinedSwaroopaField
 * @property {"undefined"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

/**
 * Defines an undefined-only field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {string} [options.description]
 *
 * @returns {UndefinedSwaroopaField}
 */
export function undefinedType(options = {}) {
    const { required = false, description } = options;

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Undefined,
        required,
        description
    };
}

/**
 * Validates and normalizes an undefined value based on a Swaroopa undefined schema.
 *
 * @param {UndefinedSwaroopaField} options
 * @param {undefined} value
 *
 * @returns {undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) {
            throw new Error("undefined(): required field is missing");
        }

        return undefined;
    }

    if (value !== undefined) {
        throw new Error("undefined(): value must be undefined");
    }

    return undefined;
}
