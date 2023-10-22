import CompanyTypes from "./Company.types"

type JobAdsTypes = {
  id: string;
  category: { title: string; id: string };
  jobTags: { title: string; id: string; }[];
  title: string;
  company: CompanyTypes;
  province: string;
  city: string;
  location: string;
  remote: boolean;
  isUrgent: boolean;
  salary: [number, number] | number | null;
  workTimes: string;
  cooperationType: 'full-time' | 'part-time' | 'as-projects';
  businessTrips: string | null;
  benefits: string[];
  abilityForBoss: string[];
  description: string;
  employmentConditions: {
    age: [number, number];
    gender: 'male' | 'female' | null;
    endOfMilitaryService: boolean;
    education: string[];
    languages: { name: string; power: number }[];
    techs: { name: string; power: number }[]
  };
  selected: boolean;
  createAt: Date;
}

export default JobAdsTypes