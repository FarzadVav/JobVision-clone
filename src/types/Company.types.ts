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
  employees: number[];
  province: { _id: string; name: string; };
  city: { _id: string; name: string; }
}

export default CompanyTypes