import CompanyTypes from "./Company.types"

type JobAdsTypes = {
  created_at: Date;
  id: string;
  title: string;
  workTimes: string;
  businessTrips: string | null;
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  isRemote: boolean;
  isUrgent: boolean;
  endOfMilitaryService: boolean;
  selected: boolean;
  gender: boolean | null;
  category: { name: string; id: string };
  benefits: string[];
  abilityForBoss: string[];
  description: string;
  education: string[];
  languages: string[];
  techs: string[];
  age: number[];
  salary: number[] | null;
  jobTags: { name: string; id: string; }[];
  company: CompanyTypes;
}

export default JobAdsTypes