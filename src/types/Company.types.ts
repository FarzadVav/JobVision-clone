import ProvinceAndCityTypes from "./ProvinceAndCity.types";

type CompanyTypes = {
  id: string;
  logo: string;
  name: string;
  aboutCompany: string;
  activity: string;
  year: number;
  score: number;
  knowledgeBased: boolean;
  employees: number[];
  province: ProvinceAndCityTypes;
  city: ProvinceAndCityTypes
}

export default CompanyTypes