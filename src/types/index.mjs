import { any } from "./any.mjs";
import { array } from "./array.mjs";
import { bigint } from "./bigint.mjs";
import { boolean } from "./boolean.mjs";
import { date } from "./date.mjs";
import { functionType } from "./function.mjs";
import { nullType } from "./null.mjs";
import { number } from "./number.mjs";
import { object } from "./object.mjs";
import { string } from "./string.mjs";
import { symbol } from "./symbol.mjs";
import { undefinedType } from "./undefined.mjs";

export const Types = Object.freeze({
    String: string,
    Number: number,
    Boolean: boolean,
    BigInt: bigint,
    Symbol: symbol,
    Null: nullType,
    Undefined: undefinedType,
    Object: object,
    Array: array,
    Date: date,
    Function: functionType,
    Any: any
});
