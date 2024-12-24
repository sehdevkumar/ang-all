import { Component, ViewEncapsulation } from "@angular/core";



// I am isolated using ViewEncapsulation.ShadowDom , so external css will not effects me
@Component({
    selector: 'app-encapsulation-child1',
    template: `<h1 class="hidden">Encapsulation Child1</h1>`,
    styles: [`
                h1 {
                    color: green;
                    position: relative;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    width: 100px;
                    height: 100px;
                    transform-origin: center center;
                    transition: transform 0.5s ease-in-out;   
                    rotate: 90deg;             
                }
            `],
    standalone: true,
    encapsulation: ViewEncapsulation.ShadowDom
})

export class EncapsulationChild1 { }





// i am exposed using ViewEncapsulation.None , so i will effects other components
@Component({
    selector: 'app-encapsulation-child2',
    template: `<h1>Encapsulation Child2</h1>`,
    styles: [`
                h1 {
                    color: red;
                }
            `],
    standalone: true,
    encapsulation: ViewEncapsulation.None
})

export class EncapsulationChild2 { }

@Component({
    selector: 'app-encapsulation',
    template: `<h1>
        
        Encapsulation
      
        
    </h1> 
    <app-encapsulation-child2></app-encapsulation-child2>
    <app-encapsulation-child1></app-encapsulation-child1>
    `,
    styles: [`
       
    `],
    standalone: true,
    imports: [EncapsulationChild1, EncapsulationChild2],
})

export class Encapsulation { }


