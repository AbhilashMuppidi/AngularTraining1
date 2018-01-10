import { Injectable } from "@angular/core";
import { isListLikeIterable } from "@angular/core/src/change_detection/change_detection_util";

@Injectable()
export class LoginService{
    private userName:string="Guest"
    private isLoggedIn:boolean=false
    setUserName(userName:string)
    {
        this.userName=userName;
    }
    getUserName()
    {
        return this.userName;
    }
    isValidUser(uname:string,pwd:string){
        if(uname=="Admin")
        {
            this.isLoggedIn=true;
            return true;            
        }
        else{
            this.isLoggedIn=false;
            return false;
        }
    }
    setIsLoggedIn(val:boolean){
        this.isLoggedIn=val;
    }
    getIsLoggedIn(){
        return this.isLoggedIn;
    }
}