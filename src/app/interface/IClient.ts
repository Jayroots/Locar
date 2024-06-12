export interface IClient {
    birthdate: Date,
    inscriptionDate: Date,
    street: string,
    postalCode: number,
    city: string,
    licencesList: Licence[],
    deactivated: boolean,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    confirmPassword: string
  }

  export class Licence {

    public id: number;
    public type: string;
    
    constructor(id:number, type:string){
        this.id = id;
        this.type = type;
    }

  }