import { NgModule } from "@angular/core";
import { SignInComponent } from "./sign-in.component";
import { SignUpComponent } from "./sign-up.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[SignInComponent,SignUpComponent],
    exports:[SignInComponent,SignUpComponent],
    imports:[SharedModule]
})
export class LoginModule{
    constructor(){
        console.log("I am inside the login module")
    }
}