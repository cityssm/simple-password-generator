export interface GenerateOptions {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    doShufflePattern?: boolean;
    retries?: number;
}
export declare const defaultGenerateOptions: GenerateOptions;
export declare const hasCussWord: (potentialPassword: string) => boolean;
export declare const generatePassword: (userGenerateOptions?: GenerateOptions) => string | null;
