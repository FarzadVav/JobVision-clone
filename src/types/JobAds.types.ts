import CompanyTypes from "./Company.types"
import CooperationTypes from "./CooperationTypes.type";

type JobAdsTypes = {
  created_at?: Date;
  _id?: string;
  title: string;
  description: string;
  workTimes: string;
  businessTrips: string;
  isRemote: boolean;
  isUrgent: boolean;
  endOfMilitaryService: boolean;
  gender: boolean | null;
  age: { from: number; to: number };
  salary: { from: number; to?: number };
  cooperationType: { _id: string; name: CooperationTypes };
  category: { _id: string; name: string };
  tags: { _id: string; name: string }[];
  benefits: string[];
  abilityForBoss: string[];
  education: string[];
  languages: string[];
  techs: string[];
  company: CompanyTypes;
}

export interface newJobAdTypes extends Omit<JobAdsTypes, 'cooperationType' | 'category' | 'tags' | 'company'> {
  cooperationType: string;
  category: string;
  tags: string[];
  company: string
}

export default JobAdsTypes