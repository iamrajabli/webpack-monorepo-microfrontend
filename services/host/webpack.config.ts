import {buildWebpack, BuildModeType, BuildPathsInterface, BuildPlatformType} from "@packages/build-config/src";
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

interface PartialEnvVariables extends Partial<EnvVariables> {}


export default (env: PartialEnvVariables) => {

    const paths: BuildPathsInterface = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001'
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002'

    const config = buildWebpack(
        {
            port: env.port ?? 4300,
            paths,
            mode: env.mode ?? 'development',
            analyzer: env.analyzer,
            platform: env.platform ?? 'desktop'
        }
    )

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                // requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                // requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))

    return config
}