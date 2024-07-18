import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {BuildOptionsInterface} from "./types/types";
import {buildDevServer} from "./buildDevServer";

export function buildWebpack(options: BuildOptionsInterface): webpack.Configuration {

    const {paths, port, mode} = options;
    const isDev = mode === 'development';

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devtool: isDev && 'inline-source-map',
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined
    }
}