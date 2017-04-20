export interface UserAddress{
    addresses: Address[];
}

export interface Address{
    building: string;
    society: string;
    area: string;
    city: string;
    postCode: string;
}