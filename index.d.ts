import type * as types from "./types";
export declare const defaultGenerateOptions: types.GenerateOptions;
export declare const hasCussWord: (potentialPassword: string) => boolean;
export declare const generatePassword: (userGenerateOptions?: types.OptionalGenerateOptions) => string | null;
