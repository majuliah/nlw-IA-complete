import 'dotenv/config';
import {OpenAI} from 'openai';


export const openai = new OpenAI({
    organization: "org-8aEozKVMYH1lb3knUp2UNmOw",
    apiKey: process.env.OPENAI_KEY,
});