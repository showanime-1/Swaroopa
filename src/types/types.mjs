export const SWAROOPA_FIELD_BRAND = Symbol("SwaroopaField");

/**
 * @typedef {(
 *   import("./string.mjs").StringSwaroopaField |
 *   import("./number.mjs").NumberSwaroopaField |
 *   import("./boolean.mjs").BooleanSwaroopaField |
 *   import("./bigint.mjs").BigIntSwaroopaField |
 *   import("./symbol.mjs").SymbolSwaroopaField |
 *   import("./null.mjs").NullSwaroopaField |
 *   import("./undefined.mjs").UndefinedSwaroopaField |
 *   import("./object.mjs").ObjectSwaroopaField |
 *   import("./array.mjs").ArraySwaroopaField |
 *   import("./date.mjs").DateSwaroopaField |
 *   import("./function.mjs").FunctionSwaroopaField |
 *   import("./any.mjs").AnySwaroopaField
 * )} SwaroopaField
 */