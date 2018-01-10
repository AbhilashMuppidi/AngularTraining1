import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "../services/login.service";

@Injectable()
export class LoginGuard implements CanActivate{
    constructor(private lsvc:LoginService){}
    canActivate(){
        return this.lsvc.getIsLoggedIn();
    }   
}