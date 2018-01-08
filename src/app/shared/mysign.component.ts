import { Component } from "@angular/core";

@Component({
    selector: "mysign",
    template:`<h3> My sign Heading </h3>
        <form>
        <input type="text" placeholder="Enter UserName">
        <input type="password" placeholder="Enter Password">
        <button type="button">my button</button>
        </form>`
})
export class MySignComponent{}