import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} BooleanSwaroopaField
 * @property {"boolean"} type - Literal type identifier
 * @property {boolean} required - Whether the field is required
 * @property {boolean | undefined} default - Default value if missing
 * @property {string | undefined} description - Human-readable description
 */

/**
 * Defines a number field schema for Swaroopa.
 *
 * @param {Object} [options] Configuration options for the number field.
 *
 * @param {boolean} [options.required=false]
 * Whether the field is required.
 *
 * @param {number} [options.default]
 * Default value if the field is missing.
 *
 * @param {string} [options.description]
 * Human-readable description of the field.
 *
 * @returns {BooleanSwaroopaField} Normalized number schema definition.
 *
 * @throws {Error}
 * Throws if schema options are invalid or conflicting.
 */
export function boolean(options = {}) {
    const {
        required = false,
        default: defaultValue,
        description
    } = options;

    if (defaultValue !== undefined && typeof defaultValue !== Type.Boolean) {
        throw new Error("boolean(): default must be a boolean");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.boolean,
        required,
        default: defaultValue,
        description
    };
}

/**
 * Validates and normalizes a boolean value based on a Swaroopa boolean schema.
 *
 * @param {BooleanSwaroopaField} options
 * @param {boolean | undefined} value
 *
 * @returns {boolean | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) throw new Error("boolean(): required field is missing");
        if (typeof options.default === Type.Boolean) return options.default;
        return undefined
    }

    if (typeof value !== Type.Boolean) {
        throw new Error("boolean(): value must be a boolean");
    }

    return value;
}
