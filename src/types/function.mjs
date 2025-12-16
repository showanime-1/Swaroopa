/**
 * @typedef {Object} FunctionSwaroopaField
 * @property {"function"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * Defines a function field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {string} [options.description]
 *
 * @returns {FunctionSwaroopaField}
 */
export function functionType(options = {}) {
    const { required = false, description } = options;

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Function,
        required,
        description
    };
}
