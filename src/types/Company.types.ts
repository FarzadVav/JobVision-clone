import JobsTypes from "./JobAds.types"

type CompanyTypes = {
  id: string;
  logo: string;
  name: string;
  score: number | null;
  jobs: JobsTypes[]
  aboutCompany: string;
  employees: [number, number];
  year: number;
  activity: string;
  ownership: 'pv' | 'governmental'
  knowledgeBased: boolean;
}

export default CompanyTypes