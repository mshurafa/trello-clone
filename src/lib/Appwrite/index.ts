import { Client, Account, ID, Databases, Storage } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client)
const account = new Account(client)
const storage = new Storage(client)

export { client, database, account, storage, ID }
