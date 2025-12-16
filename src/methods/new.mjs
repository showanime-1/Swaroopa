/**
 * @template {Record<string, import("../types/types.mjs").SwaroopaField>} T
 *
 * @param {Record<string, import("../types/types.mjs").SwaroopaField>} structure
 * @param {any} params
 *
 * @returns {Swaroopa<T>}
 */
export function createNew(structure, params) {
    const object = {

    }

    for (const key in structure) {
        if (Object.prototype.hasOwnProperty.call(structure, key)) {
            const swaroopaField = structure[key];
            swaroopaField
        }
    }
}