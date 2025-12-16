/**
 * @typedef {Object} SymbolSwaroopaField
 * @property {"symbol"} type
 * @property {boolean} required
 * @property {symbol | undefined} default
 * @property {string | undefined} description
 */

import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

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
