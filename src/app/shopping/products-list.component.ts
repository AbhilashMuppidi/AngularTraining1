import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";

@Component({
    template: `<mytable [tblTitle]="title" 
    [colHeadings]="headings"  [data]="products"></mytable>`
})
export class ProductsListComponent{
    title:string="List of Products";    
    headings:string[]=["Id","Product Name","Price", "Category Id"]
    products:Array<Product>=[];
    private psvc:ProductService=new ProductService();
    constructor(){
        this.products=this.psvc.getProducts();
    }
}