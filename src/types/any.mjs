import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} AnySwaroopaField
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
 * @returns {AnySwaroopaField} Normalized string schema definition.
 *
 */
export function any(options = {}) {
    const {
        default: defaultValue,
        description
    } = options;

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Any,
        default: defaultValue,
        description
    };
}
