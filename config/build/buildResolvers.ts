import {Configuration} from "webpack";
import {BuildOptionsInterface} from "./types/types";

export function buildResolvers(
    options: BuildOptionsInterface
): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}