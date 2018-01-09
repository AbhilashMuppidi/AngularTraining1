import { Component } from "@angular/core";

@Component({
    selector:"sign-up",
    // Properties of the class are accessed using [].
    template:`<mysign [title]="myTitle"></mysign>`
})
export class SignUpComponent{
    myTitle:string = "Quick Sign Up";

}