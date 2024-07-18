import {buildWebpack} from "./config/build/buildWebpack";
import {BuildModeType, BuildPathsInterface} from "./config/build/types/types";
import path from "node:path";

interface EnvVariables {
    mode: BuildModeType
    port: number
}


export default (env: EnvVariables) => {

    const paths: BuildPathsInterface = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    return buildWebpack(
        {
            port: env.port ?? 4300,
            paths,
            mode: env.mode ?? 'development'
        }
    )
}