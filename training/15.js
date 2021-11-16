//calculate ola cab fare
let cabType= "PRIME";
let noOfKm = 14;
let totalPrice ;
switch(cabType){
    case "MICRO": {
        totalPrice = 10 * noOfKm;  break;
    }
    case "MINI": {
        totalPrice = 15 * noOfKm; break;
    }
    case "PRIME": {
        totalPrice = 20 * noOfKm ; break;
    }
    default: {
        console.log("Invalid Cab Type");
    }

}
console.log("Cab Type:" + cabType +", Kms:" + noOfKm + ",price: Rs.", totalPrice);
