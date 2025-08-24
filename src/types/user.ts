export interface User {
  id: string;
  name: string;
  email: string;
  imageSrc: string;
  accountDetails: {
    bank: string;
    accountNumber: string;
    accountName: string;
  };
}
