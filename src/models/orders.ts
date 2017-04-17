export interface Orders{
    pickupDate : Date;
    orderType : String;
    timeSlot: String;
    addresses : Address[];
}

export interface Address{
    street : String;
    postcode : String;
}