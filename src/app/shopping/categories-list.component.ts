import { Component } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

@Component({
    template: `<mytable tblTitle="List of Categories"
    [colHeadings]="headings" [data]="categories"></mytable>`
})
export class CategoriesListComponent{
    headings:string[]=[];
    categories:Array<Category>=[];
    ///private csvc:CategoryService=new CategoryService();
    constructor(private csvc:CategoryService){
        this.headings=["Id","Category Name"]
        this.csvc.getCategories().subscribe(
            (data)=> {
                console.log("Get Success",data);
                this.categories=data;
            },
            (err)=>console.log("Get Error",err)
        )
        //this.categories=this.csvc.getCategories();
    }
}