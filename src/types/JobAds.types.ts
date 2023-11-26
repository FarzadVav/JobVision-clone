import CompanyTypes from "./Company.types"

type JobAdsTypes = {
  created_at: Date;
  id: string;
  title: string;
  workTimes: string;
  businessTrips: string;
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  isRemote: boolean;
  isUrgent: boolean;
  endOfMilitaryService: boolean;
  selected: boolean;
  gender: boolean | null;
  category: { id: string; name: string };
  benefits: string[];
  abilityForBoss: string[];
  description: string;
  education: string[];
  languages: string[];
  techs: string[];
  age: number[];
  salary: number[] | null;
  tags: { id: string; name: string }[];
  company: CompanyTypes;
}

export default JobAdsTypes