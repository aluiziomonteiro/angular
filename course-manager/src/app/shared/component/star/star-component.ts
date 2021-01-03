
import { Component, Input, OnChanges } from "@angular/core";

@Component({ 
    selector: 'app-star',
    templateUrl: './star-component.html',

    // Este carinha recebe um array de styles
    styleUrls: ['./star-component.css'] 
})

export class StarComponent implements OnChanges{

    @Input() // Vai virar um atributo do seletor
    rating: number = 0;

    starWidth: number;
    
    ngOnChanges(){
        // this.starWidth = this.rating * 94 / 5;
        this.starWidth = this.rating * 74 / 5;
    }
}