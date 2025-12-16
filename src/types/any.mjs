import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} AnySwaroopaField
 * @property {"any"} type
 * @property {any | undefined} default
 * @property {string | undefined} description
 */

/**
 * Defines a any field schema for Swaroopa.
 *
 * @param {Object} [options] Configuration options for the any field.
 *
 * @param {any} [options.default]
 * Default value if the field is missing.
 *
 * @param {string} [options.description]
 * Human-readable description of the field.
 *
 * @returns {AnySwaroopaField} Normalized any schema definition.
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

/**
 * Validates and normalizes a any value based on a Swaroopa any schema.
 *
 * @param {AnySwaroopaOptions} options
 * @param {any | undefined} value
 *
 * @returns {any | undefined}
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.default) {
            return options.default;
        }

        return undefined;
    }

    return value;
}
