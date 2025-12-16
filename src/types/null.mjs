/**
 * @typedef {Object} NullSwaroopaField
 * @property {"null"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

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
