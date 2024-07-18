import webpack, {Configuration} from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptionsInterface} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptionsInterface): Configuration['plugins'] {

    const {mode, paths, analyzer} = options

    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin()
    ]

    if (isProd) {
        [
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
        ]
            .forEach(plugin => plugins.push(plugin))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins


}