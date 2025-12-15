import { Swaroopa } from "./src/index.mjs";
import { Types } from "./src/types/index.mjs";

const Anime = Swaroopa({
    title: Types.String(),
    views: Types.Number({ min: 0, default: 0 }),
})