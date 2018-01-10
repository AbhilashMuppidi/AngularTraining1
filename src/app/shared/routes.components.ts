import { Component } from "@angular/core";

@Component({
    template:`<h2> Home Page </h2>`
})
export class HomeComponent{}

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
    `
    

})
export class BindingDemoComponent{
    orgName:String="<b><u>UHG</u></b>"
    count:number=0;
    incrementCounter(){
        this.count++;
    }
}

@Component({
    template: `<h2>Angular Pipes example</h2>`
})
export class PipesDemoComponent{}

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
    