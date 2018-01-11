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
    //private psvc:ProductService=new ProductService();
    constructor(private route:ActivatedRoute,private psvc:ProductService){
        //this.products=this.psvc.getProducts();
        this.route.params.subscribe((e)=>{
            let paramId=e["ctgId"]
            console.log("Param is-> ", paramId)
            this.psvc.getProducts().subscribe(
                (data)=> {
                    console.log("Get Success",data);
                    if(paramId == undefined){
                        this.products=data;
                    }
                    else{
                        this.products=data.filter((o)=>o.ctgid==paramId)
                    }  
                },
                (err)=>console.log("Get Error",err)
            )
            if(paramId == undefined){
                //this.products=this.psvc.getProducts();
            }
            else
            {
               // this.products=this.psvc.getProducts().filter((o)=>o.ctgid==paramId)
            }

        })
    }
}