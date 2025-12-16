/**
 * @typedef {Object} DateSwaroopaField
 * @property {"date"} type
 * @property {boolean} required
 * @property {Date | undefined} default
 * @property {string | undefined} description
 */

import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * Defines a date field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {Date} [options.default]
 * @param {string} [options.description]
 *
 * @returns {DateSwaroopaField}
 */
export function date(options = {}) {
    const {
        required = false,
        default: defaultValue,
        description
    } = options;

    if (defaultValue !== undefined && !(defaultValue instanceof Date)) {
        throw new Error("date(): default must be a Date");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Date,
        required,
        default: defaultValue,
        description
    };
}
