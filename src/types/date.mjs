import { Type } from "./type.mjs";
import { SWAROOPA_FIELD_BRAND } from "./types.mjs";

/**
 * @typedef {Object} DateSwaroopaField
 * @property {"date"} type
 * @property {boolean} required
 * @property {Date} [default]
 * @property {Date} [min]
 * @property {Date} [max]
 * @property {string} [description]
 */

/**
 * Defines a date field schema.
 *
 * @param {Object} [options]
 * @param {boolean} [options.required=false]
 * @param {Date} [options.default]
 * @param {Date} [options.min]
 * @param {Date} [options.max]
 * @param {string} [options.description]
 *
 * @returns {DateSwaroopaField}
 */
export function date(options = {}) {
    const {
        required = false,
        default: defaultValue,
        min,
        max,
        description
    } = options;

    if (defaultValue !== undefined && !(defaultValue instanceof Date)) {
        throw new Error("date(): default must be a Date");
    }

    if (min !== undefined && !(min instanceof Date)) {
        throw new Error("date(): min must be a Date");
    }

    if (max !== undefined && !(max instanceof Date)) {
        throw new Error("date(): max must be a Date");
    }

    if (min !== undefined && max !== undefined && min > max) {
        throw new Error("date(): min cannot be greater than max");
    }

    return {
        [SWAROOPA_FIELD_BRAND]: true,
        type: Type.Date,
        required,
        default: defaultValue,
        min,
        max,
        description
    };
}

/**
 * Validates and normalizes a date value based on a Swaroopa date schema.
 *
 * @param {DateSwaroopaField} options
 * @param {Date | undefined} value
 *
 * @returns {Date | undefined}
 *
 * @throws {Error}
 * Throws if the value violates the schema constraints.
 */
function createNew(options, value) {
    if (arguments.length === 1) {
        if (options.required) {
            throw new Error("date(): required field is missing");
        }

        if (options.default instanceof Date) {
            return options.default;
        }

        return undefined;
    }

    if (!(value instanceof Date)) {
        throw new Error("date(): value must be a Date");
    }

    if (options.min !== undefined && value < options.min) {
        throw new Error(
            `date(): value must be on or after ${options.min.toISOString()}`
        );
    }

    if (options.max !== undefined && value > options.max) {
        throw new Error(
            `date(): value must be on or before ${options.max.toISOString()}`
        );
    }

    return value;
}
