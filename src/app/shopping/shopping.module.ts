import { NgModule } from "@angular/core";
import { CategoriesListComponent } from "./categories-list.component";
import { ProductsListComponent } from "./products-list.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[ProductsListComponent,CategoriesListComponent],
    imports: [RouterModule.forChild([
        {path:"ctg", component:CategoriesListComponent},
        {path:"products", component:ProductsListComponent},
    ]),SharedModule]
})
export class ShoppingModule{}