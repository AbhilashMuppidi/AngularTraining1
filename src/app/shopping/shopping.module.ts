import { NgModule } from "@angular/core";
import { CategoriesListComponent } from "./categories-list.component";
import { ProductsListComponent } from "./products-list.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "../shared/routes.components";

let dashboardroutes = [
    {path:"dashboard",component:DashboardComponent, children:[
        {path:"ctg",component:CategoriesListComponent},
        {path:"products",component:ProductsListComponent}
    ]}  
];
@NgModule({
    declarations:[ProductsListComponent,CategoriesListComponent,
        DashboardComponent],
    imports: [RouterModule.forChild(dashboardroutes),SharedModule]
})
export class ShoppingModule{}