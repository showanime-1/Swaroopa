import { Type } from "./type.mjs";

/**
 * @typedef {Object} BooleanFieldSchema
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
 * @returns {BooleanFieldSchema} Normalized number schema definition.
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

    if (defaultValue !== undefined && typeof defaultValue !== "boolean") {
        throw new Error("boolean(): default must be a boolean");
    }

    return {
        type: Type.boolean,
        required,
        default: defaultValue,
        description
    };
}
