import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} FunctionSwaroopaField
 * @property {"function"} type
 * @property {boolean} required
 * @property {Function} default
 * @property {string | undefined} description
 */

/**
 * Defines a function field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {Function} [options.default]
 * @param {string} [options.description]
 *
 * @returns {FunctionSwaroopaField}
 */
export function functionType(options = {}) {
    const { required = false, default: defaultValue, description } = options;

    if (defaultValue !== undefined && typeof defaultValue !== Type.Function) {
        throw new Error("function(): default must be a function");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Function,
        required,
        description
    };
}

/**
 * Validates and normalizes a function value based on a Swaroopa function schema.
 *
 * @param {FunctionSwaroopaField} options
 * @param {Function | undefined} value
 *
 * @returns {Function | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) throw new Error("function(): required field is missing");
        if (typeof options.default === Type.String) return options.default;
        return undefined
    }

    if (typeof value !== Type.Function) {
        throw new Error("function(): value must be a function");
    }
    return value
}

