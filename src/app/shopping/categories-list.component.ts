import { Component } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    template: `
    <!--<form [formGroup]="myform">
        <input type="text" placeholder="Enter Category Name"
         formControlName="name">
    </form>    
    -->
    <form #myform="ngForm">
        <input type="text" placeholder="Enter Category Name"
            [(ngModel)]="frmCategory.name" name="txtName" required
            #ctgname="ngModel" minlength="3">
        <button type="button" class="btn btn-primary"
            [disabled]="!myform.valid" (click)="add()">Add</button> 
        <button type="button" class="btn btn-danger"
            [disabled]="!myform.value" (click)="delete(frmCategory.id)">Delete</button> 
        <button type="button" class="btn btn-success"
            [disabled]="!myform.value" (click)="update()">Update</button> 
        <div class="alert alert-danger" 
        *ngIf="ctgname.errors?.required && ctgname.dirty">Category Name is required</div>
    </form>
    <pre>{{ctgname.errors|json}}</pre>
    <mytable tblTitle="List of Categories" (rowEvent)="onRowEvent($event)"
    [colHeadings]="headings" [data]="categories"></mytable>`
})
export class CategoriesListComponent {
    frmCategory: Category = new Category(null, null);
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
    add() {
        this.csvc.addCategory(this.frmCategory).subscribe(
            (resp) => {
                console.log("Added Sucessfully")
                this.categories.push(resp);
            },
            (err) => {
                console.log("Error while Adding")
            }
        )
        this.frmCategory = new Category(null, null);

    }
    onRowEvent(row: Category) {
        //this.frmCategory=row;
        Object.assign(this.frmCategory, row)
    }
    delete(id: number) {
        this.csvc.deleteCategory(id).subscribe(
            (resp) => {
                console.log("Deleted")
                let idx = this.categories.findIndex((e) => e.id == id)
                this.categories.splice(idx, 1)
            },
            (err) => {
                console.log("Error")
            }
        )
    }
    update() {
        this.csvc.updateCategory(this.frmCategory).subscribe(
            (resp) => {
                console.log("Updated")
                let idx = this.categories.findIndex((e) => e.id == this.frmCategory.id)
                this.categories[idx] = resp;
            },
            (err) => { console.log("Updated") }
        )
    }
    // Reactive Forms
    // myform: FormGroup;
    // ngOnInit() {
    //     this.myform = new FormGroup({
    //         "id": new FormControl(), "name": new FormControl()
    //     });
    // }
}