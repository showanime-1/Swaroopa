/**
 * @typedef {Object} FunctionFieldSchema
 * @property {"function"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

/**
 * Defines a function field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {string} [options.description]
 *
 * @returns {FunctionFieldSchema}
 */
export function functionType(options = {}) {
    const { required = false, description } = options;

    return {
        type: Type.Function,
        required,
        description
    };
}
