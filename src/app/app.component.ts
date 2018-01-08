import {Component} from "@angular/core"

@Component({
    //tag name for project
    selector:"app-root",
    //template:"<h2>My first angular component</h2>"   
    templateUrl:"./app.component.html"
})
export class AppComponent
{
    title:string;    
    constructor(){
        console.log("I am in App Component")
        this.title = "the Jungle";
    }
    handleButtonClick():void{
        this.title="Optum, Hyderabad"
    }
}
