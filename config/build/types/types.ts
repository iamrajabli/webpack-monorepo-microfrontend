export interface BuildPathsInterface {
    entry: string;
    html: string;
    output: string;
}

export type BuildModeType = 'production' | 'development'

export interface BuildOptionsInterface {
    port: number;
    paths: BuildPathsInterface
    mode: BuildModeType
    analyzer: boolean
}