import {ModuleOptions} from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptionsInterface} from "./types/types";

export function buildLoaders(options: BuildOptionsInterface): ModuleOptions['rules'] {
    const isDev = options.mode === 'development'

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]'
            },
            esModule: false
        }
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    // svgoConfig: {
                    //     plugins: [
                    //         {
                    //             name: 'convertColors',
                    //             params: {
                    //                 currentColor: true
                    //             }
                    //         }
                    //     ]
                    // }
                }
            }
        ],
    }

    return [
        tsLoader,
        cssLoader,
        assetLoader,
        svgLoader
    ]
}