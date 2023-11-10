import { ID } from 'appwrite';

import { INewUser } from '@/types';
import { account } from './config';

export async function createUserAccount(user: INewUser) {
  try {
    const newAcccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAcccount;
  } catch (error) {
    console.error(error);
    return error;
  }
}
