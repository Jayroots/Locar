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
       

   
    emptyWeight: number
    height: number
    bedsNumber: number
    showerEquipments: number
    kitchenEquipments: number
    refrigeratorEquipments: number
    bedLinens: number
    campingCarType: string

    maximumCharge: number
    volume: number
    truckType: string

    weight: number,
    electric: boolean,
    batteryCapacity: number,
    autonomy: number,
    discBrake: boolean,
    bicycleType: string
    frameSize:number;

    cylinderCapacity: number,
    cylindersNumber: number,
    powerKw: number,
    saddleHeight: number,
    motoType: string
    }