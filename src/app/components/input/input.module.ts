import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InputComponent } from "./input.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [ InputComponent ],
    imports: [ CommonModule, IonicModule ],
    exports: [ InputComponent ]
})

export class InputModule {}