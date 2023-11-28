type CompanyTypes = {
  _id: string;
  logo: string;
  name: string;
  aboutCompany: string;
  activity: string;
  year: number;
  score: number;
  knowledgeBased: boolean;
  employees: number[];
  province: { id: string; name: string; };
  city: { id: string; name: string; }
}

export default CompanyTypes