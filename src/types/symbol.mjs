import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} SymbolSwaroopaField
 * @property {"symbol"} type
 * @property {boolean} required
 * @property {symbol | undefined} default
 * @property {string | undefined} description
 */

/**
 * Defines a symbol field schema for Swaroopa.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {symbol} [options.default]
 * @param {string} [options.description]
 *
 * @returns {SymbolSwaroopaField}
 */
export function symbol(options = {}) {
    const {
        required = false,
        default: defaultValue,
        description
    } = options;

    if (defaultValue !== undefined && typeof defaultValue !== "symbol") {
        throw new Error("symbol(): default must be a symbol");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Symbol,
        required,
        default: defaultValue,
        description
    };
}


/**
 * Validates and normalizes a symbol value based on a Swaroopa symbol schema.
 *
 * @param {SymbolSwaroopaField} options
 * @param {symbol | undefined} value
 *
 * @returns {symbol | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1 || value === undefined) {
        if (options.required) {
            throw new Error("symbol(): required field is missing");
        }

        if (options.default !== undefined) {
            return options.default;
        }

        return undefined;
    }

    if (typeof value !== "symbol") {
        throw new Error("symbol(): value must be a symbol");
    }

    return value;
}
