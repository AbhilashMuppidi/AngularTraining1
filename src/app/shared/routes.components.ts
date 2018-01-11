import { Component,ViewChild,ViewChildren,QueryList } from "@angular/core";
import {DomSanitizer} from '@angular/platform-browser';


@Component({
    selector:"hello",
    template:`<h3><i><u>Hello<ng-content></ng-content></u></i></h3>` 
})
export class HelloComponent{
   
}

@Component({
    template:`<h2 #header> Welcom Home Page {{myTemp?.length}}</h2>
            <hello><b #inNgContent>Optum</b></hello>
            <iframe [src]="trustUrl" width="75%" height="300">` 
})
export class HomeComponent{
    @ViewChild(HelloComponent) vc:HelloComponent
    @ViewChildren(HelloComponent) vcs:QueryList<HelloComponent>
    myVideoURL="https://www.youtube.com/embed/3TGCuKztsJ0";
    trustUrl;
    constructor(private sanity:DomSanitizer){
        this.trustUrl=this.sanity.bypassSecurityTrustResourceUrl(this.myVideoURL);
        console.log("viewing Child", this.vc)
    }
    ngAfterViewInit()
    {
        console.log("View Child in Ng Afer VIew Inid",this.vc)
        console.log("View Child in Ng Afer VIew Inid",this.vcs.length)
    }
}

@Component({
    template: `<h1>404. Not Available</h1>`
})
export class NotFoundComponent{}

@Component({
    template: `<h3> Angular 5 Examples</h3>
    <div class="col-sm-3 well">
        <ul class="nav navbar-sidebar">
            <li><a routerLink="binding">Binding Demo</a></li>
            <li><a routerLink="pipes">Pipes Demo</a></li>
        </ul>
    </div>
    <div class="col-sm-9"><router-outlet></router-outlet></div>`
})
@Component({
    template: `<h2>Angular 5 Examples</h2>`
})
export class ExamplesComponent{}

@Component({
    template: `<h2>Angular 5 Binding example</h2>
    Count Value is {{count}}
    Organization Name is:{{orgName}}
    <h3 [innerHTML]="orgName"></h3>
    <button (click)="incrementCounter()">Increase</button>
    <h1 [innerHTML]="count"></h1>
    <input type="text" value="count">
    <input type="number" [value]="count">
    <input type="number" [(ngModel)]="count">`
})
export class BindingDemoComponent{
    orgName:String="<b><u>UHG</u></b>"
    count:number=0;
    incrementCounter(){
        this.count++;
    }
}

@Component({
    template: `<h2>Angular Pipes example</h2>
    <br>Price Value {{price|currency:'EUR'|lowercase}}
    <br>Date is {{dateVal|date: 'd/M/y'}}
    <br>Product name is {{productName|uppercase | reverseText}}`
})
export class PipesDemoComponent{
    price = 100.1234
    dateVal=new Date()
    productName="Sony Tv"
}

@Component({
    template: `<h3> Shopping Dashboard </h3>
            <a routerLink="ctg">Categories</a> |
            <a routerLink="products">Products</a>
        <hr>
    <div class="col-sm-9"><router-outlet></router-outlet></div>`
})
export class DashboardComponent{}
@Component({
    template: `<h2 class="well">Your are logged out</h2>`
})
export class LogoutComponent{}
@Component({
        template: `<h2 class="jumbtron">Your are not authorized</h2>`
})
export class ErrorComponent{}
    