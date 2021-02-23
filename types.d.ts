export interface OptionalGenerateOptions {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    doShufflePattern?: boolean;
    minScore?: number;
    retries?: number;
}
export interface GenerateOptions {
    minLength: number;
    maxLength: number;
    pattern: string;
    doShufflePattern: boolean;
    minScore: number;
    retries: number;
}
