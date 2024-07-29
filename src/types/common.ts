export type TProduct = {
    _id:string;
    name: string;
    price: number;
    stockQuantity: number;
    description: string;
    category: string;
    ratings: number;
    images?: string[]
    isDeleted: boolean;
    quantity: number
}

export type TOrdrededProduct = {
    productId: string;
    quantity: number
}

export type TOrderedUserInfo={
    name: string;
    email: string;
    address: string;
    contactNo: string;
}

export type TOrder = {
    name: string;
    email: string;
    address: string;
    contactNo: string;
    totalPrice: number;
    products: TOrdrededProduct[];
    clientSecret: string;
    paymentIntent: string;
    paymentMethod: string;
};