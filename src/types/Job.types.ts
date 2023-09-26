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

interface JobAdsTypes extends MainJobTypes {
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  businessTrips: number;
  benefits: string[];
  abilityForBoss: string[];
  description: string;
  employmentConditions: {
    age: [number, number];
    gender: 'male' | 'female' | 'custom' | 'none';
    endOfMilitaryService: boolean;
    education: string;
    applications: string[]
  }
}

interface JobBoxTypes extends MainJobTypes {
  selected: boolean;
}

export default JobBoxTypes