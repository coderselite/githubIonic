export interface Order{
    pickupDate : Date;
    orderType : string;
    timeSlot : string;
    catalogs : Catalog[];
    addresses: Address[];
}

export interface Catalog{
    catalog_id: string;
    quantity: string;  
}

export interface Address{
    Street : string;
    postcode : string;
}