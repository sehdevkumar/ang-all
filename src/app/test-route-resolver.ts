import { Component } from "@angular/core";
import { Route, Routes } from "@angular/router";



export const TestRoutes: Routes = [
    {
        path: '',
        resolve: {
            data:(...arg: any)=> {
                 console.log(arg);
                 return new Promise((res, rej) => {
                     setTimeout(() => {
                         res({
                             data: 'resolved'   
                         })
                     }, 1000);
                 })
            }
        },
        loadComponent: () => TestRouteResolver
    }
]




@Component({
    selector: 'app-test-route-resolver',
    template:  `
       
       <h1>Test Route Resolver</h1>
    
    `,
    standalone: true
})
export class TestRouteResolver {}