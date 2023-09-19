import JobsTypes from "./Job.types"

type CompanyTypes = {
  id: string;
  logo: string;
  title: string;
  score: number | null;
  jobs: JobsTypes[]
}

export default CompanyTypes