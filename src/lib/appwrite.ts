import { Client, Account, Databases, Functions } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);
const functions = new Functions(client);

export async function mistralFunction(body: {prompt: string, context?: string, max_tokens?: number}) {
    return await functions.createExecution(import.meta.env.VITE_APPWRITE_FUNCTION_ID, JSON.stringify(body));
}

export { client, account, databases, functions };