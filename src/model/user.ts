interface Iuser {
  name: string;
  cpf: number;
  email: string;
  city: string;
  uf: string;
  sex: string;
  created_at: Date;
  tickets_user: number[];
}




class User {
  name: string;
  cpf: number;
  email: string;
  city: string;
  uf: string;
  sex: string;
  created_at: Date;
  tickets_user: number[];

  constructor({name, cpf, email, city, uf, sex, created_at, tickets_user}: Iuser ) {
    this.name = name;
    this.cpf = cpf;
    this.email = email;
    this.city = city;
    this.uf = uf;
    this.sex = sex;
    this.created_at = created_at;
    this.tickets_user = tickets_user
  }
    

}

export { User };

export { Iuser };