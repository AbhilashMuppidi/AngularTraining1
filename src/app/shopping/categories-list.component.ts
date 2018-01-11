import { Component } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    template: `
    <form [formGroup]="myform">
        <input type="text" placeholder="Enter Category Name"
         formControlName="name">
    </form>
    <pre>{{myform.value|json}}</pre>
    <mytable tblTitle="List of Categories"
    [colHeadings]="headings" [data]="categories"></mytable>`
})
export class CategoriesListComponent {
    headings: string[] = [];
    categories: Array<Category> = [];
    ///private csvc:CategoryService=new CategoryService();
    constructor(private csvc: CategoryService) {
        this.headings = ["Id", "Category Name"]
        this.csvc.getCategories().subscribe(
            (data) => {
                console.log("Get Success", data);
                this.categories = data;
            },
            (err) => console.log("Get Error", err)
        )
        //this.categories=this.csvc.getCategories();
    }
    // Reactive Forms
    myform: FormGroup;
    ngOnInit() {
        this.myform = new FormGroup({
            "id": new FormControl(), "name": new FormControl()
        });
    }
}