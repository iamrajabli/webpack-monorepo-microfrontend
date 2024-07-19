import {BuildOptionsInterface} from "./types/types";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptionsInterface): DevServerConfiguration {
    const {port} = options

    return {
        port,
        historyApiFallback: true,
    }
}