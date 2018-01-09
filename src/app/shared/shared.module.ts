import { NgModule } from "@angular/core";
import { MySignComponent} from "./mysign.component";
import { MyTableComponent } from "./mytable.component";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [MySignComponent,MyTableComponent],
    exports:[MySignComponent,MyTableComponent],
    imports: [CommonModule]
})
export class SharedModule{
    constructor(){
        console.log("I am inside the shared module")
    }
}