import CompanyTypes from "./Company.tepes"

type JobsTypes = {
  id: string;
  categories: { title: string; id: string; }[];
  title: string;
  company: CompanyTypes;
  city: string;
  location: string;
  salary: [number, number] | number | null,
  remote: boolean;
  isUrgent: boolean;
}

export default JobsTypes