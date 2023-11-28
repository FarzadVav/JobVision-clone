import CompanyTypes from "./company.types"
import CooperationTypes from "./cooperationTypes.type";

type JobAdsTypes = {
  created_at: Date;
  _id: string;
  title: string;
  workTimes: string;
  businessTrips: string;
  cooperationType: { id: string; name: CooperationTypes };
  isRemote: boolean;
  isUrgent: boolean;
  endOfMilitaryService: boolean;
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