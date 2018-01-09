import { Component } from "@angular/core";
import { LoginService } from "../services/login.service";

@Component({
    //tag name for project
    selector:"sign-in",
    //template:"<h2>My first angular component</h2>"   
    template:`<mysign title="Sign In" (myEvent)="handleMyEvent($event)"></mysign>`
})
export class SignInComponent{
    handleMyEvent(userData){
        console.log("SIGN IN COMPONENT >>",userData.uname,userData.pwd);
        this.ls.setUserName(userData.uname);
    }
    constructor(private ls:LoginService){

    }
}