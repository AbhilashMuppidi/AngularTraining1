import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `<mytable [tblTitle]="title" 
    [colHeadings]="headings"  [data]="products"></mytable>`
})
export class ProductsListComponent{
    title:string="List of Products";    
    headings:string[]=["Id","Product Name","Price", "Category Id"]
    products:Array<Product>=[];
    private psvc:ProductService=new ProductService();
    constructor(private route:ActivatedRoute){
        //this.products=this.psvc.getProducts();
        this.route.params.subscribe((e)=>{
            let paramId=e["ctgId"]
            console.log("Param is-> ", paramId)
            if(paramId == undefined){
                this.products=this.psvc.getProducts();
            }
            else
            {
                this.products=this.psvc.getProducts().filter((o)=>o.ctgid==paramId)
            }

        })
    }
}