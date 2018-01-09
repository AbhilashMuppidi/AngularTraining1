import { Product } from "../models/product.model";

export class ProductService{
    private productsData:Product[]=[];
    constructor(){
        this.productsData=[
            new Product(101,"Samsung Galaxy S8 Plus",85000,1),
            new Product(101,"Apple Iphone X",95000,1),
            new Product(101,"Sony Bravia 55 CLDG",595000,2),
            new Product(101,"VU 55 XLSE",55000,2)
        ]
    }
    getProducts(){
        return this.productsData;
    }
}
