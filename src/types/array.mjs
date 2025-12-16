import { isSwaroopa } from "../checks/swaroopa.mjs";
import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} ArraySwaroopaField
 * @property {"array"} type
 * @property {any} of
 * @property {boolean} required
 * @property {number | undefined} minLength
 * @property {number | undefined} maxLength
 * @property {string | undefined} description
 */

/**
 * Defines an array field schema.
 *
 * @param {any} of Element schema (another Swaroopa field)
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {number} [options.minLength]
 * @param {number} [options.maxLength]
 * @param {string} [options.description]
 *
 * @returns {ArraySwaroopaField}
 */
export function array(of, options = {}) {
    const {
        required = false,
        minLength,
        maxLength,
        description
    } = options;

    if (!of) {
        throw new Error("array(): element schema is required");
    }

    if (!Object.values(Type).includes(of)) {
        throw new Error(`array(): allowed of values are (${Object.values(Type).join(", ")})`);
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Array,
        of,
        required,
        minLength,
        maxLength,
        description
    };
}

/**
 * Validates and normalizes a array value based on a Swaroopa array schema.
 * @template T
 * 
 * @param {ArraySwaroopaField} options
 * @param {T[] | undefined} value
 *
 * @returns {T[] | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) {
            return []
        }

        return undefined
    }

    if (!Array.isArray(value)) {
        throw new Error("array(): value must be an array");
    }

    if (options.of === Type.Swaroopa) {
        if (value.some(v => !isSwaroopa(v))) {
            throw new Error(`array(): must only contain type ${options.of}`);
        }
    } else {
        if (value.some(v => typeof v !== options.of)) {
            throw new Error(`array(): must only contain type ${options.of}`);
        }
    }

    if (options.minLength && value.length < options.minLength) {
        throw new Error(
            `array(): minimum length is ${options.minLength}`
        );
    }

    if (options.maxLength && value.length > options.maxLength) {
        throw new Error(
            `array(): maximum length is ${options.maxLength}`
        );
    }

    return value
}
