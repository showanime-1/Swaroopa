/**
 * @typedef {Object} ArrayFieldSchema
 * @property {"array"} type
 * @property {any} of
 * @property {boolean} required
 * @property {number | undefined} minLength
 * @property {number | undefined} maxLength
 * @property {string | undefined} description
 */

/**
 * Defines an array field schema.
 *
 * @param {any} of Element schema (another Swaroopa field)
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {number} [options.minLength]
 * @param {number} [options.maxLength]
 * @param {string} [options.description]
 *
 * @returns {ArrayFieldSchema}
 */
export function array(of, options = {}) {
    const {
        required = false,
        minLength,
        maxLength,
        description
    } = options;

    if (!of) {
        throw new Error("array(): element schema is required");
    }

    return {
        type: Type.Array,
        of,
        required,
        minLength,
        maxLength,
        description
    };
}
