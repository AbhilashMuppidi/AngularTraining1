import { Component, Input,OnInit,OnChanges,OnDestroy, SimpleChanges, Output,EventEmitter } from "@angular/core";

@Component({
    selector: "mysign",
    template:`<h3>{{title}}</h3>
        <form>
        <input type="text" placehol der="Enter UserName" #frmUser>
        <input type="password" placeholder="Enter Password" #frmPwd>
        <button type="button" (click)="handleClick(frmUser.value,frmPwd.value)">{{title}}</button>
        </form>`
})
export class MySignComponent implements OnInit, OnChanges,OnDestroy{
    ngOnDestroy(): void {
        console.log("My Sign Component Ng On onDestroy", this.title);        
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("My Sign Component Ng On onChanges",this.title);        
    }
    ngOnInit(): void {
        console.log("My Sign Component Ng On Init",this.title);        
    }
    constructor()
    {
        console.log("My Sign Constructor Called", this.title);
    }

    //Input value from parent components
    @Input()
    title:string;

    handleClick(uname, pwd){
        console.log("User Name", uname," Password",pwd);
        this.myEvent.emit({uname,pwd});
    }

    // Sensds the data to the parent components
    @Output()
    myEvent = new EventEmitter();
}