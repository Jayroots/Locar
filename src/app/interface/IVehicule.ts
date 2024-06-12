export interface IVehicule {
    idVehicle:number;
    brand:string;
    model:string;
    color:string;
    licenceType:Licencetype[];
    typeVehicule:string;
    imagePath:string;
    specificities:Specificities[];
    }
  
    export interface Licencetype{
    id :number;
    type:string;
    }
  
    export interface Specificities{
        placesNumber:number;
        doorsNumber:number;
        airConditioning : boolean;
        fuelType:string;
        transmissionType:string;
        carType:string;
        bagsNumber:number;
    }