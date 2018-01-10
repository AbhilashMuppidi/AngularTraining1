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
        this.categories=this.csvc.getCategories();
    }
}