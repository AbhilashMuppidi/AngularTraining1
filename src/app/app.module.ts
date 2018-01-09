import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {BrowserModule} from "@angular/platform-browser"
import { HeaderComponent } from "./header.component";
import { LoginModule } from "./login/login.module";
import { LoginService } from "./services/login.service";

@NgModule({
    //Registering component s
    declarations:[AppComponent, HeaderComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,LoginModule],
    providers: [LoginService]
})
export class AppModule{    
    constructor(){
        console.log("App Module Constructor...")
    }
}