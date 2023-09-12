type JobsTypes = {
  id: string;
  categories: { title: string; id: string; }[];
  title: string;
  company: string;
  city: string;
  location: string;
  salary: [number, number] | number | null,
  remote?: boolean;
  isUrgent?: boolean;
  companyScore?: number;
}

export default JobsTypes