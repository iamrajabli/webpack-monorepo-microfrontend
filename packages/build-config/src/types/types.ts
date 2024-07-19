export interface BuildPathsInterface {
    entry: string;
    html: string;
    output: string;
    src: string;
    public: string;
}

export type BuildModeType = 'production' | 'development'
export type BuildPlatformType = 'mobile' | 'desktop'

export interface BuildOptionsInterface {
    port: number;
    paths: BuildPathsInterface
    mode: BuildModeType
    analyzer: boolean
    platform: BuildPlatformType
}