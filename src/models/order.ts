export interface Order{
    pickupDate : Date;
    orderType : string;
    timeSlot : string;
    addresses: Address[];
}

export interface Address{
    Street : string;
    postcode : string;
}