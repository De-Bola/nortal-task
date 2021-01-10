export class Employee {

  constructor(id: number, name: string, email: string, avatar: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }

  id: number;
  name: string;
  email: string;
  avatar: string;
}

export class employeeModel{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: employeeObject[];
  support: {
    url: string;
    text: string;
  }
}

export class employeeObject{
  id: any;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}