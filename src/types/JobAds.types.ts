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
  cooperationType: { _id: string; name: CooperationTypes };
  category: { _id: string; name: string };
  tags: { _id: string; name: string }[];
  benefits: string[];
  abilityForBoss: string[];
  education: string[];
  languages: string[];
  techs: string[];
  age: number[];
  salary: number[] | null;
  company: CompanyTypes;
}

export default JobAdsTypes