/**
 * @typedef {Object} DateFieldSchema
 * @property {"date"} type
 * @property {boolean} required
 * @property {Date | undefined} default
 * @property {string | undefined} description
 */

/**
 * Defines a date field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {Date} [options.default]
 * @param {string} [options.description]
 *
 * @returns {DateFieldSchema}
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
        type: Type.Date,
        required,
        default: defaultValue,
        description
    };
}
