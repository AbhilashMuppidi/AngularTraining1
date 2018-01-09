import { Component } from "@angular/core";

@Component({
    template: `<mytable [tblTitle]="title" [colHeadings]="headings"></mytable>`
})
export class ProductsListComponent{
    title:string="List of Products";
    headings:string[]=["Id","Product Name","Price", "Category Id"]
}