import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} NullSwaroopaField
 * @property {"null"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

/**
 * Defines a null-only field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {string} [options.description]
 *
 * @returns {NullSwaroopaField}
 */
export function nullType(options = {}) {
    const { required = false, description } = options;

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Null,
        required,
        description
    };
}

/**
 * Validates and normalizes a null value based on a Swaroopa null schema.
 *
 * @param {StringSwaroopaOptions} options
 * @param {null | undefined} value
 *
 * @returns {null | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) throw new Error("null(): required field is missing");
        return undefined
    }

    if (typeof value !== null) {
        throw new Error("null(): value must be a null");
    }

    return value
}