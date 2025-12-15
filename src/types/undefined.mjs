/**
 * @typedef {Object} UndefinedFieldSchema
 * @property {"undefined"} type
 * @property {boolean} required
 * @property {string | undefined} description
 */

/**
 * Defines an undefined-only field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {string} [options.description]
 *
 * @returns {UndefinedFieldSchema}
 */
export function undefinedType(options = {}) {
    const { required = false, description } = options;

    return {
        type: Type.Undefined,
        required,
        description
    };
}
