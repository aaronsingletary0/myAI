import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `I'm thinking... but I might need a little more info. Try rephrasing or asking differently!`;
export const WORD_CUTOFF: number = 7000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Overload, try again`;
export const HISTORY_CONTEXT_LENGTH: number = 6; // Number of messages to use for context when generating a response
