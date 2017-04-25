export interface Order{
    catalogs : Catalog[];
}

export interface Catalog{
    catalog_id: string;
    quantity: string;  
}