import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} ObjectSwaroopaField
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
 * @returns {ObjectSwaroopaField}
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
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Object,
        shape,
        required,
        strict,
        description
    };
}

/**
 * Validates and normalizes an object based on a Swaroopa object schema.
 *
 * @param {ObjectSwaroopaField} options
 * @param {Object | undefined} value
 *
 * @returns {Object | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNewObject(options, value) {
    if (arguments.length === 1) {
        if (options.required) {
            throw new Error("object(): required field is missing");
        }

        if (options.default && typeof options.default === "object") {
            return options.default;
        }

        return undefined;
    }

    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        throw new Error("object(): value must be an object");
    }

    const result = {};

    for (const key in options.shape) {
        const fieldSchema = options.shape[key];
        const fieldValue = value[key];

        if (!fieldSchema?.[SWAROOPA_FIELD_BRAND]) {
            throw new Error(`object(): shape.${key} is not a valid Swaroopa field`);
        }

        switch (fieldSchema.type) {
            case Type.String:
                result[key] = createNew(fieldSchema, fieldValue);
                break;
            case Type.Number:
                result[key] = createNewNumber(fieldSchema, fieldValue);
                break;
            case Type.Date:
                result[key] = createNewDate(fieldSchema, fieldValue);
                break;
            case Type.Array:
                result[key] = createNewArray(fieldSchema, fieldValue);
                break;
            case Type.Object:
                result[key] = createNewObject(fieldSchema, fieldValue);
                break;
            default:
                throw new Error(`object(): unknown field type for ${key}`);
        }
    }

    if (options.strict) {
        for (const key in value) {
            if (!(key in options.shape)) {
                throw new Error(`object(): unexpected key "${key}" in object`);
            }
        }
    } else {
        for (const key in value) {
            if (!(key in result)) {
                result[key] = value[key];
            }
        }
    }

    return result;
}
