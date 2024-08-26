import { NeDBDatabase } from './db-adapter';

export interface IProfileData {
  _id: string;
  name: string | null;
  avatar: string | null;
  slogan: string | null;
  person: {
    title: string | null;
    detail: string | null;
  };
  contact: {
    title: string | null;
    phone: string | null;
    address: string | null;
  };
}

export const profileDB = new NeDBDatabase<IProfileData>('profileDB');
