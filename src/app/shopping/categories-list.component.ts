import { Component } from "@angular/core";

@Component({
    template: `<mytable tblTitle="List of Categories"
    [colHeadings]="headings"></mytable>`
})
export class CategoriesListComponent{
    headings:string[]=[];
    constructor(){
        this.headings=["Id","Category Name"]
    }
}