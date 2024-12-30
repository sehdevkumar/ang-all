import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



@Component({
    selector: 'app-child-component',
    standalone:true,
    imports: [],
    template: `I am a child for Lazy Loaded Component`
})
class ChildComponent{}

export const routesLazyLoaded: Routes = [
    {
        path: '',
        component: ChildComponent
    }
];

