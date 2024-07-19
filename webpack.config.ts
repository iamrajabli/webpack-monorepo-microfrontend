import {buildWebpack} from "./config/build/buildWebpack";
import {BuildModeType, BuildPathsInterface, BuildPlatformType} from "./config/build/types/types";
import path from "node:path";

interface EnvVariables {
    port: number
    mode: BuildModeType
    analyzer: boolean
    platform: BuildPlatformType
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

    return buildWebpack(
        {
            port: env.port ?? 4300,
            paths,
            mode: env.mode ?? 'development',
            analyzer: env.analyzer,
            platform: env.platform ?? 'desktop'
        }
    )
}