/**
 * @typedef {Object} ObjectFieldSchema
 * @property {"object"} type
 * @property {Object<string, any>} shape
 * @property {boolean} required
 * @property {boolean} strict
 * @property {string | undefined} description
 */

/**
 * Defines an object field schema.
 *
 * @param {Object<string, any>} shape Nested Swaroopa field definitions
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {boolean} [options.strict=true]
 * @param {string} [options.description]
 *
 * @returns {ObjectFieldSchema}
 */
export function object(shape, options = {}) {
    const {
        required = false,
        strict = true,
        description
    } = options;

    if (!shape || typeof shape !== "object") {
        throw new Error("object(): shape must be an object");
    }

    return {
        type: Type.Object,
        shape,
        required,
        strict,
        description
    };
}