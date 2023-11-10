import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

console.log(
  'Config Values:\n' + appwriteConfig.projectId + '\n' + appwriteConfig.url
);

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
export const database = new Databases(client);
