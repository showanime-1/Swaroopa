import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} BigIntSwaroopaField
 * @property {"bigint"} type
 * @property {boolean} required
 * @property {bigint | undefined} default
 * @property {string | undefined} description
 */

/**
 * Defines a bigint field schema for Swaroopa.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {bigint} [options.default]
 * @param {string} [options.description]
 *
 * @returns {BigIntSwaroopaField}
 */
export function bigint(options = {}) {
    const {
        required = false,
        default: defaultValue,
        description
    } = options;

    if (defaultValue !== undefined && typeof defaultValue !== Type.BigInt) {
        throw new Error("bigint(): default must be a bigint");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.BigInt,
        required,
        default: defaultValue,
        description
    };
}

/**
 * Validates and normalizes a bigint value based on a Swaroopa any schema.
 *
 * @param {BigIntSwaroopaOptions} options
 * @param {BigInt | undefined} value
 *
 * @returns {BigInt | undefined}
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) throw new Error("bigint(): required field is missing");
        if (typeof options.default === Type.BigInt) return options.default;
        return undefined
    }

    if (typeof value !== Type.BigInt) {
        throw new Error("bigint(): value must be a bigint");
    }

    return value;
}
