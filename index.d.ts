export interface GenerateOptions {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    retries?: number;
}
export declare const defaultGenerateOptions: GenerateOptions;
export declare const generatePassword: (userGenerateOptions?: GenerateOptions) => any;
