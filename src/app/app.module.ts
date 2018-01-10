import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {BrowserModule} from "@angular/platform-browser"
import { HeaderComponent } from "./header.component";
import { LoginModule } from "./login/login.module";
import { LoginService } from "./services/login.service";
import { HomeComponent, NotFoundComponent, ExamplesComponent, BindingDemoComponent, PipesDemoComponent, DashboardComponent } from "./shared/routes.components";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./login/sign-in.component";
import { SignUpComponent } from "./login/sign-up.component";
import { ShoppingModule } from "./shopping/shopping.module";
let approutes = [
    {path:"",component:HomeComponent},
    {path:"examples",component:ExamplesComponent, children:[
        {path:"binding",component:BindingDemoComponent},
        {path:"pipes",component:PipesDemoComponent}
    ]},
    {path:"dashboard",component:DashboardComponent},
    {path:"signin",component:SignInComponent},
    {path:"signup",component:SignUpComponent},
    {path:"**",component:NotFoundComponent}
];

@NgModule({
    //Registering component s
    declarations:[AppComponent, HeaderComponent,HomeComponent,
         NotFoundComponent,ExamplesComponent,BindingDemoComponent,PipesDemoComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,LoginModule, 
        RouterModule.forRoot(approutes, {useHash: true}), ShoppingModule],
    providers: [LoginService]
})
export class AppModule{    
    constructor(){
        console.log("App Module Constructor...")
    }
}
