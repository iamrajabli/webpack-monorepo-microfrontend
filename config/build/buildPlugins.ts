import webpack, {Configuration} from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptionsInterface} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from "node:path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(options: BuildOptionsInterface): Configuration['plugins'] {

    const {mode, paths, analyzer, platform} = options

    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico'),
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    ]

    if (isProd) {
        [
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }),
            new CopyPlugin({
                patterns: [
                    {from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales')},
                ],
            }),
        ]
            .forEach(plugin => plugins.push(plugin))
    }

    if (isDev) {
        [
            new ForkTsCheckerWebpackPlugin(),
            new ReactRefreshWebpackPlugin()
        ].forEach(plugin => plugins.push(plugin))
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins


}