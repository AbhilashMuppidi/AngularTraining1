import {Component} from "@angular/core"

@Component({
    //tag name for project
    selector:"app-header",
    //template:"<h2>My first angular component</h2>"   
    template:`"{{showUserName()}}"`
})
export class HeaderComponent
{   
    hdrUserName:string;
    constructor(){
        console.log("I am in App Component")
        this.hdrUserName = "Guest";
    }
    showUserName():string{
        return this.hdrUserName;
    }
}
