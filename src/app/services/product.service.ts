import { Product } from "../models/product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
@Injectable()
export class ProductService {
    private productsData: Product[] = [];
    restUrl = "http://localhost:3000/wsproducts"
    constructor(private http: HttpClient) {
        // this.productsData=[
        //     new Product(101,"Samsung Galaxy S8 Plus",85000,1),
        //     new Product(102,"Apple Iphone X",95000,1),
        //     new Product(103,"Sony Bravia 55 CLDG",595000,2),
        //     new Product(104,"VU 55 XLSE",55000,2)
        // ]
    }
    getProducts() {
        return this.http.get<Product[]>(this.restUrl)
        //return this.productsData;
    }
}
