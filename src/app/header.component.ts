import {Component} from "@angular/core"
import { LoginService } from "./services/login.service";

@Component({
    //tag name for project
    selector:"app-header",
    //template:"<h2>My first angular component</h2>"   
    template:`
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a href="#" class="navbar-brand">Optum</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
           <p class="navbar-text">Welcome {{showUserName()}}</p>
        </ul>       
    </nav>`
})
export class HeaderComponent
{   
    hdrUserName:string;
    constructor(private lsvc:LoginService){
        console.log("I am in App Component")
        this.hdrUserName = lsvc.getUserName();
    }
    showUserName():string{
        this.hdrUserName=this.lsvc.getUserName();
        return this.hdrUserName;
    }
}
