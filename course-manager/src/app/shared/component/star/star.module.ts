import { NgModule } from "@angular/core";
import { StarComponent } from "./star-component";

@NgModule({
    declarations:[
        StarComponent
    ],
    // Informa ao Angular que queremos exportar coisas deste módulo para serem utilizadas no módulo que o importar.
    // Quando formos importar este componente dentro de course módule, este export vai torná-lo disponível.
    exports: [
        StarComponent
    ]
})
export class StarModule{

}