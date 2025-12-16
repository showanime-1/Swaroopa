import { Swaroopa } from "./src/index.mjs";
import { Types } from "./src/types/index.mjs";
console.log({
    title: Types.String(),
    views: Types.Number({ min: 0, default: 0 }),
})
const Anime = Swaroopa({
    title: Types.String(),
    views: Types.Number({ min: 0, default: 0 }),
})