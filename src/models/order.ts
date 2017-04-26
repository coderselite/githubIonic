export interface Order{
    orderType: string;
    pickupDate: string;    
    pickupTime: string;
    deliveryDate: string;
    deliverytime: string;
    promocode: string;
    catalogs : Catalog[];
}

export interface Catalog{
    catalog_id: string;
    quantity: string;  
}