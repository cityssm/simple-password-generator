export interface GenerateOptions {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
}
export declare const defaultGenerateOptions: GenerateOptions;
export declare const generate: (userGenerateOptions?: GenerateOptions) => any;
