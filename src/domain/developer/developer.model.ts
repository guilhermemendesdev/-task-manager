interface BodyInsertDeveloper {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

interface ResponseInsertDeveloper {
  status: number;
  result: Developer;
  message?: string;
}

interface ResponseDevelopers {
  status: number;
  result: Array<Developer>;
  message?: string;
}

interface ResponseDeveloperById {
  status: number;
  result: Developer;
  message?: string;
}

interface ResponseLoginDeveloper {
  status: number;
  result: Developer;
  token: string;
  message?: string;
}

interface Developer {
  _id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
  role: string;
  tasks: Array<string>;
  active: true;
  created_at: string;
  updated_at: string;
}

export { BodyInsertDeveloper, ResponseDeveloperById, ResponseDevelopers, ResponseInsertDeveloper, ResponseLoginDeveloper };
