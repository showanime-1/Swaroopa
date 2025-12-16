import { SWAROOPA_BRAND } from "../types/type.mjs";

/**
 * @param {import("../types/types.mjs").Swaroopa} value 
 * @returns {boolean}
 */
export function isSwaroopa(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        value[SWAROOPA_BRAND] === true
    );
}