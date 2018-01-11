import { Component } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { Category } from "../models/category.model";

@Component({
    template: `<h3>Products</h3>
        <div class="col-sm-3 well">
            <ul class="nav navbar-sidebar">
                <li *ngFor="let link of catgLinks">
                    <a [routerLink]="link.id">{{link.name}}</a>
                </li>
            </ul>
        </div>
        <div class="col-sm-9"><router-outlet></router-outlet></div>`
})

export class ProductsComponent {
    catgLinks: Category[] = []
    constructor(private cs: CategoryService) {
        this.cs.getCategories().subscribe(
            (data) => this.catgLinks = data,
            (err) => console.log("Get Error", err)
        )
    }
    //this.catgLinks=this.cs.getCategories();
}

