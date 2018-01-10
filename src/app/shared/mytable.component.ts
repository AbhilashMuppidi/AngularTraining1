import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector: "mytable",
    template: `<h3> {{tblTitle}} </h3>
     Selected Value -> {{selectedValue}}
    <table class="table table-bordered">
    <tr>
        <th *ngFor="let heading of colHeadings">{{heading}}</th>
        <th>Action</th>
    </tr>
    <tr *ngFor="let row of data">
        <td *ngFor="let col of cols">{{row[col]}}</td>
        <td><button class="btn btn-primary" (click)="updateHeader(row)">View</button></td>
    </tr>
    <tr *ngIf="data.length==0">
        <td [colSpan]="colHeadings.length">No Data Found.</td>
    </tr>   
    </table>`
})
export class MyTableComponent {
    @Input()
    tblTitle: string;
    @Input()
    colHeadings: string[] = [];
    @Input()
    data: any[] = [];

    cols;
    selectedValue;
    constructor()
    {
        console.log(this.data[0])
    }
    ngOnChanges(){
        if(this.data[0]!=undefined){        
            this.cols=Object.keys(this.data[0])
        }
    }
    updateHeader(row):void{
        this.selectedValue=row.name
    }
}