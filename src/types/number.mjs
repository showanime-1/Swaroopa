import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} NumberSwaroopaField
 * @property {"number"} type - Literal type identifier
 * @property {boolean} required - Whether the field is required
 * @property {number | undefined} default - Default value if missing
 * @property {number | undefined} min - Minimum allowed value (inclusive)
 * @property {number | undefined} max - Maximum allowed value (inclusive)
 * @property {boolean} integer - Whether value must be an integer
 * @property {number[] | undefined} enum - Allowed numeric values
 * @property {string | undefined} description - Human-readable description
 */

/**
 * Defines a number field schema for Swaroopa.
 *
 * @param {Object} [options] Configuration options for the number field.
 *
 * @param {boolean} [options.required=false]
 * Whether the field is required.
 *
 * @param {number} [options.default]
 * Default value if the field is missing.
 *
 * @param {number} [options.min]
 * Minimum allowed value (inclusive).
 *
 * @param {number} [options.max]
 * Maximum allowed value (inclusive).
 *
 * @param {boolean} [options.integer=false]
 * Whether the value must be an integer.
 *
 * @param {number[]} [options.enum]
 * List of allowed numeric values.
 *
 * @param {string} [options.description]
 * Human-readable description of the field.
 *
 * @returns {NumberSwaroopaField} Normalized number schema definition.
 *
 * @throws {Error}
 * Throws if schema options are invalid or conflicting.
 */
export function number(options = {}) {
    const {
        required = false,
        default: defaultValue,
        min,
        max,
        integer = false,
        enum: enumValues,
        description
    } = options;

    // ── schema definition validation ──
    if (defaultValue !== undefined && typeof defaultValue !== Type.Number) {
        throw new Error("number(): default must be a number");
    }

    if (min != null && typeof min !== Type.Number) {
        throw new Error("number(): min must be a number");
    }

    if (max != null && typeof max !== Type.Number) {
        throw new Error("number(): max must be a number");
    }

    if (min != null && max != null && min > max) {
        throw new Error("number(): min cannot be greater than max");
    }

    if (
        enumValues &&
        (!Array.isArray(enumValues) ||
            enumValues.some(v => typeof v !== Type.Number))
    ) {
        throw new Error("number(): enum must be an array of numbers");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Number,
        required,
        default: defaultValue,
        min,
        max,
        integer,
        enum: enumValues,
        description
    };
}

/**
 * Validates and normalizes a number value based on a Swaroopa number schema.
 *
 * @param {NumberSwaroopaField} options
 * @param {number | undefined} value
 *
 * @returns {number | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) throw new Error("number(): required field is missing");
        if (typeof options.default === Type.Number) return options.default;
        return undefined
    }

    if (typeof value !== Type.Number) {
        throw new Error("number(): value must be a number");
    }

    if (options.min != null && value < options.min) {
        throw new Error(
            `number(): minimum allowed value is ${options.min}`
        );
    }

    if (options.max != null && value > options.max) {
        throw new Error(
            `number(): maximum allowed value is ${options.max}`
        );
    }

    if (options.integer && !Number.isInteger(value)) {
        throw new Error("number(): value must be an integer");
    }

    if (options.enum && !options.enum.includes(value)) {
        throw new Error(
            `number(): allowed values are (${options.enum.join(", ")})`
        );
    }

    return value;
}
