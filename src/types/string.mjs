import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} StringSwaroopaOptions
 * @property {boolean} required
 * @property {string | undefined} default
 * @property {number | undefined} minLength
 * @property {number | undefined} maxLength
 * @property {boolean} trim
 * @property {boolean} lowercase
 * @property {boolean} uppercase
 * @property {RegExp | undefined} pattern
 * @property {string[] | undefined} enum
 * @property {string | undefined} description
 */

/**
 * @typedef {Object} StringSwaroopaField
 * @property {"string"} type
 * @property {boolean} required
 * @property {string | undefined} default
 * @property {number | undefined} minLength
 * @property {number | undefined} maxLength
 * @property {boolean} trim
 * @property {boolean} lowercase
 * @property {boolean} uppercase
 * @property {RegExp | undefined} pattern
 * @property {string[] | undefined} enum
 * @property {string | undefined} description
 */


/**
 * Defines a string field schema for Swaroopa.
 *
 * @param {Object} [options] Configuration options for the string field.
 *
 * @param {boolean} [options.required=false]
 * Whether the field is required.
 *
 * @param {string} [options.default]
 * Default value if the field is missing.
 *
 * @param {number} [options.minLength]
 * Minimum allowed string length (>= 0).
 *
 * @param {number} [options.maxLength]
 * Maximum allowed string length (>= 0).
 *
 * @param {boolean} [options.trim=false]
 * Whether to trim whitespace from both ends.
 *
 * @param {boolean} [options.lowercase=false]
 * Whether to convert the string to lowercase.
 *
 * @param {boolean} [options.uppercase=false]
 * Whether to convert the string to uppercase.
 *
 * @param {RegExp} [options.pattern]
 * Regular expression the string must match.
 *
 * @param {string[]} [options.enum]
 * List of allowed string values.
 *
 * @param {string} [options.description]
 * Human-readable description of the field.
 *
 * @returns {StringSwaroopaField} Normalized string schema definition.
 *
 * @throws {Error}
 * Throws if schema options are invalid or conflicting.
 */
export function string(options = {}) {
    const {
        required = false,
        default: defaultValue,
        minLength,
        maxLength,
        lowercase = false,
        uppercase = false,
        pattern,
        enum: enumValues,
        description
    } = options;

    // ── schema definition validation ──
    if (defaultValue !== undefined && typeof defaultValue !== Type.String) {
        throw new Error("string(): default must be a string");
    }

    if (required && typeof defaultValue === Type.String) {
        throw new Error("string(): required and default can not be used together ");
    }

    if (lowercase && uppercase) {
        throw new Error("string(): cannot use both lowercase and uppercase");
    }

    if (minLength != null && minLength < 0) {
        throw new Error("string(): minLength must be >= 0");
    }

    if (maxLength != null && maxLength < 0) {
        throw new Error("string(): maxLength must be >= 0");
    }

    if (
        minLength != null &&
        maxLength != null &&
        minLength > maxLength
    ) {
        throw new Error("string(): minLength cannot be greater than maxLength");
    }

    if (pattern && !(pattern instanceof RegExp)) {
        throw new Error("string(): pattern must be a RegExp");
    }

    if (
        enumValues &&
        (!Array.isArray(enumValues) ||
            enumValues.some(v => typeof v !== "string"))
    ) {
        throw new Error("string(): enum must be an array of strings");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.String,
        required,
        default: defaultValue,
        minLength,
        maxLength,
        lowercase,
        uppercase,
        pattern,
        enum: enumValues,
        description
    };
}

/**
 * Validates and normalizes a string value based on a Swaroopa string schema.
 *
 * @param {StringSwaroopaOptions} options
 * @param {string | undefined} value
 *
 * @returns {string | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) throw new Error("string(): required field is missing");
        if (typeof options.default === Type.String) return options.default;
        return undefined
    }

    if (typeof value !== Type.String) {
        throw new Error("string(): value must be a string");
    }

    let result = value;

    if (options.lowercase && /[A-Z]/.test(value)) {
        throw new Error("string(): all characters must be lower case");
    }

    if (options.uppercase && /[a-z]/.test(value)) {
        throw new Error("string(): all characters must be upper case");
    }

    if (options.minLength != null && result.length < options.minLength) {
        throw new Error(
            `string(): minimum length is ${options.minLength}`
        );
    }

    if (options.maxLength != null && result.length > options.maxLength) {
        throw new Error(
            `string(): maximum length is ${options.maxLength}`
        );
    }

    if (options.pattern && !options.pattern.test(result)) {
        throw new Error("string(): value does not match required pattern");
    }

    if (options.enum && !options.enum.includes(result)) {
        throw new Error(
            `string(): allowed values are (${options.enum.join(", ")})`
        );
    }

    return result;
}
