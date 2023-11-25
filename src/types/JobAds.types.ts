import CompanyTypes from "./Company.types"

type JobAdsTypes = {
  id: string;
  category: { name: string; id: string };
  jobTags: { name: string; id: string; }[];
  title: string;
  company: CompanyTypes;
  province: string;
  city: string;
  isRemote: boolean;
  isUrgent: boolean;
  salary: number[] | null;
  workTimes: string;
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  businessTrips: string | null;
  benefits: string[];
  abilityForBoss: string[];
  description: string;
  age: [number, number];
  gender: boolean | null;
  endOfMilitaryService: boolean;
  education: string[];
  languages: string[];
  techs: string[];
  selected: boolean;
  created_at: Date;
}

export default JobAdsTypes