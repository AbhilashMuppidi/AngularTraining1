import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{
    private userName:string="Guest"
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
            return true;            
        }
        else
            return false;

    }
}