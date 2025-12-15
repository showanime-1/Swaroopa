import { Type } from "./type.js";

/**
 * @typedef {Object} StringFieldSchema
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
 * @returns {StringFieldSchema} Normalized string schema definition.
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
        type: Type.String,
        required,
        default: defaultValue,
        minLength,
        maxLength,
        trim,
        lowercase,
        uppercase,
        pattern,
        enum: enumValues,
        description
    };
}
