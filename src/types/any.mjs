import { Type } from "./type.mjs";

/**
 * @typedef {Object} AnyFieldSchema
 * @property {"any"} type
 * @property {any | undefined} default
 * @property {string | undefined} description
 */

/**
 * Defines a string field schema for Swaroopa.
 *
 * @param {Object} [options] Configuration options for the string field.
 *
 * @param {string} [options.default]
 * Default value if the field is missing.
 *
 * @param {string} [options.description]
 * Human-readable description of the field.
 *
 * @returns {AnyFieldSchema} Normalized string schema definition.
 *
 */
export function any(options = {}) {
    const {
        default: defaultValue,
        description
    } = options;

    return {
        type: Type.Any,
        default: defaultValue,
        description
    };
}
