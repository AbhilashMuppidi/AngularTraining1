import {Component} from "@angular/core"
import { LoginService } from "./services/login.service";

@Component({
    //tag name for project
    selector:"app-header",
    //template:"<h2>My first angular component</h2>"   
    template:`"{{showUserName()}}"`
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
