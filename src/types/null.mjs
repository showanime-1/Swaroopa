/**
 * @typedef {Object} NullFieldSchema
 * @property {"null"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

/**
 * Defines a null-only field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {string} [options.description]
 *
 * @returns {NullFieldSchema}
 */
export function nullType(options = {}) {
    const { required = false, description } = options;

    return {
        type: Type.Null,
        required,
        description
    };
}
