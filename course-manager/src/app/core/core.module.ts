import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent
    ],
    imports: [ // Módulo de rotas
        RouterModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}