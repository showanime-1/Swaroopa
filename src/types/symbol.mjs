/**
 * @typedef {Object} SymbolFieldSchema
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
 * @returns {SymbolFieldSchema}
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
        type: Type.Symbol,
        required,
        default: defaultValue,
        description
    };
}
