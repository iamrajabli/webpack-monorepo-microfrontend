import {buildWebpack, BuildModeType, BuildPathsInterface, BuildPlatformType} from "@packages/build-config";
import path from "node:path";
import webpack from "webpack";
import packageJson from './package.json'


interface EnvVariables {
    port: number
    mode: BuildModeType
    analyzer: boolean
    platform: BuildPlatformType
    SHOP_REMOTE_URL: string
    ADMIN_REMOTE_URL: string
}

interface PartialEnvVariables extends Partial<EnvVariables> {
}


export default (env: PartialEnvVariables) => {

    const paths: BuildPathsInterface = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config = buildWebpack(
        {
            port: env.port ?? 3002,
            paths,
            mode: env.mode ?? 'development',
            analyzer: env.analyzer,
            platform: env.platform ?? 'desktop'
        }
    )

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'admin',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))

    return config
}