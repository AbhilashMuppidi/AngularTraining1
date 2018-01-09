import { Component } from "@angular/core";

@Component({
    selector:"sign-up",
    // Properties of the class are accessed using [].
    template:`<mysign [title]="myTitle" (myEvent)="handleMyEvent($event)"></mysign>`
})
export class SignUpComponent{
    myTitle:string = "Quick Sign Up";
    handleMyEvent(userdata){
        console.log("SIGN UP COMPONENT >> ",userdata.uname,userdata.pwd)
    }
}