export const SWAROOPA_BRAND = Symbol("Swaroopa");

export const Type = Object.freeze({
    // Primitives
    String: "string",
    Number: "number",
    Boolean: "boolean",
    BigInt: "bigint",
    Symbol: "symbol",

    // Special JS values
    Null: "null",
    Undefined: "undefined",

    // Structural
    Object: "object",
    Array: "array",

    // Dates & time
    Date: "date",

    // Functions (usually forbidden, but explicit)
    Function: "function",

    // Mongo / identifiers
    ObjectId: "objectId",

    // Catch-all / escape hatch
    Any: "any"
});
