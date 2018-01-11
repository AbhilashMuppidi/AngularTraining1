import { Component } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `<form #myform="ngForm">
    <input type="text" placeholder="Enter Product Name"
        [(ngModel)]="frmProduct.name" name="txtProductName" required
        #productname="ngModel" minlength="3">
    <button type="button" class="btn btn-primary"
        [disabled]="!myform.valid" (click)="add()">Add</button> 
    <button type="button" class="btn btn-danger"
        [disabled]="!myform.value" (click)="delete(frmProduct.id)">Delete</button> 
    <button type="button" class="btn btn-success"
        [disabled]="!myform.value" (click)="update()">Update</button> 
    <div class="alert alert-danger" 
    *ngIf="productname.errors?.required && productname.dirty">Product Name is required</div>
</form>
    <mytable [tblTitle]="title" 
    [colHeadings]="headings"  [data]="products"></mytable>`
})
export class ProductsListComponent{
    frmProduct: Product = new Product(null, null,null,null);
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
    add() {
        this.psvc.addProduct(this.frmProduct).subscribe(
            (resp) => {
                console.log("Added Sucessfully")
                this.products.push(resp);
            },
            (err) => {
                console.log("Error while Adding")
            }
        )
        this.frmProduct = new Product(null, null,null, null);

    }
    onRowEvent(row: Product) {
        //this.frmCategory=row;
        Object.assign(this.frmProduct, row)
    }
    delete(id: number) {
        this.psvc.deleteProduct(id).subscribe(
            (resp) => {
                console.log("Deleted")
                let idx = this.products.findIndex((e) => e.id == id)
                this.products.splice(idx, 1)
            },
            (err) => {
                console.log("Error")
            }
        )
    }
    update() {
        this.psvc.updateProduct(this.frmProduct).subscribe(
            (resp) => {
                console.log("Updated")
                let idx = this.products.findIndex((e) => e.id == this.frmProduct.id)
                this.products[idx] = resp;
            },
            (err) => { console.log("Updated") }
        )
    }
}