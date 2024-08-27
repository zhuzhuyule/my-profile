export interface IProfileData {
  name: string | null;
  slogan: string | null;
  person: {
    title: string | null;
    detail: string | null;
  };
  contact: {
    title: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
  };
}
