type filtersTypes = {
  remote: boolean;
  knowledgeBasedCompany: boolean;
  cooperationType: {
    fullTime: boolean;
    partTime: boolean;
    asProject: boolean;
  }
  salary: {
    one: [0, 4];
    two: [4, 8];
    three: [8, 15];
    four: [15, 25];
    five: [25, 75]
  }
}

export default filtersTypes