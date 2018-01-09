import { Component, Input } from "@angular/core";

@Component({
    selector: "mysign",
    template:`<h3>{{title}}</h3>
        <form>
        <input type="text" placeholder="Enter UserName">
        <input type="password" placeholder="Enter Password">
        <button type="button">{{title}}</button>
        </form>`
})
export class MySignComponent{
    @Input()
    title:string;

}