import { NeDBDatabase } from './db-adapter';

export interface IProfileData {
  _id: string;
  name: string | null;
  email: string | null;
  avatar: string | null;
}

export const profileDB = new NeDBDatabase<IProfileData>('profileDB');
