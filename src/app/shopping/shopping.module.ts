import { NgModule } from "@angular/core";
import { CategoriesListComponent } from "./categories-list.component";
import { ProductsListComponent } from "./products-list.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "../shared/routes.components";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { LoginGuard } from "../login/login.guard";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
let dashboardroutes = [
    {
        path: "dashboard", component: DashboardComponent,
        //canActivate:[LoginGuard], 
        children: [
            { path: "", component: CategoriesListComponent },
            { path: "ctg", component: CategoriesListComponent },
            {
                path: "products", component: ProductsComponent, children: [
                    { path: "", component: ProductsListComponent },
                    { path: ":ctgId", component: ProductsListComponent }
                ]
            }
        ]
    }
];
@NgModule({
    declarations: [ProductsListComponent, CategoriesListComponent,
        DashboardComponent, ProductsComponent],
    imports: [RouterModule.forChild(dashboardroutes), SharedModule,
        CommonModule, ReactiveFormsModule, FormsModule],
    providers: [LoginGuard]
})
export class ShoppingModule { }