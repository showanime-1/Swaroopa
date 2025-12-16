import { SWAROOPA_FIELD_BRAND } from "../types/types.mjs";

/**
 * @param {import("../types/types.mjs").SwaroopaField} value 
 * @returns {boolean}
 */
export function isSwaroopaField(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        value[SWAROOPA_FIELD_BRAND] === true
    );
}
