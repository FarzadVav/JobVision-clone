import CompanyTypes from "./Company.types"

type MainJobTypes = {
  id: string;
  categories: { title: string; id: string; }[];
  title: string;
  company: CompanyTypes;
  city: string;
  location: string;
  remote: boolean;
  isUrgent: boolean;
  knowledgeBasedCompany: boolean;
  salary: [number, number] | number | null,
}

export interface JobAdsTypes extends MainJobTypes {
  workTimes: string;
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  businessTrips: [number, ('month' | 'year')] | 'ever' | 'some-times' | 'none';
  benefits: string[];
  abilityForBoss: string[];
  description: string;
  employmentConditions: {
    age: [number, number];
    gender: 'male' | 'female' | 'none';
    endOfMilitaryService: boolean;
    education: string[];
    languages: { name: string; power: number }[];
    techs: { name: string; power: number }[]
  }
}

interface JobBoxTypes extends MainJobTypes {
  selected: boolean;
}

export default JobBoxTypes