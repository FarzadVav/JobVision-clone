type CompanyTypes = {
  _id?: string;
  email: string;
  password: string;
  logo: string;
  name: string;
  aboutCompany: string;
  activity: string;
  year: number;
  score: number;
  knowledgeBased: boolean;
  employees: { from: number; to: number };
  province: { _id: string; name: string; };
  city: { _id: string; name: string; }
}

export interface newCompanyTypes extends Omit<CompanyTypes, 'email' | 'password' | 'province' | 'city'> {
  province: string;
  city: string
}

export default CompanyTypes