type CompanyTypes = {
  _id?: string;
  logo: string;
  name: string;
  aboutCompany: string;
  activity: string;
  year: number;
  score: number;
  knowledgeBased: boolean;
  employees: number[];
  province: { _id: string; name: string; };
  city: { _id: string; name: string; }
}

export interface companyDetailsTypes extends Omit<CompanyTypes, 'province' | 'city'> {
  province: string;
  city: string
}

export default CompanyTypes