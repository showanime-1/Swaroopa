/**
 * @typedef {Object} UndefinedSwaroopaField
 * @property {"undefined"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

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
