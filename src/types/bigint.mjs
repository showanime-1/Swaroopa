import { Type } from "./type.mjs";

/**
 * @typedef {Object} BigIntFieldSchema
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
 * @returns {BigIntFieldSchema}
 */
export function bigint(options = {}) {
    const {
        required = false,
        default: defaultValue,
        description
    } = options;

    if (defaultValue !== undefined && typeof defaultValue !== "bigint") {
        throw new Error("bigint(): default must be a bigint");
    }

    return {
        type: Type.BigInt,
        required,
        default: defaultValue,
        description
    };
}