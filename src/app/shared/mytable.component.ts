import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector:"mytable",
    template:`<h3> {{tblTitle}} </h3>
    <table class="table table-bordered">
    <tr>
        <th *ngFor="let heading of colHeadings">{{heading}}</th>
    </tr></table>`
})
export class MyTableComponent{
    @Input()
    tblTitle:string;
    @Input()
    colHeadings: string[]=[];
}