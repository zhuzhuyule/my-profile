export interface IProfileData {
  name: string;
  slogan?: string;
  person: {
    title: string;
    detail?: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    address?: string;
  };
}
