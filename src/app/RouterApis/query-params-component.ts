import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: 'app-query-params',
    standalone:true,
    template: `
        <div class="container mx-auto p-4">
            <h1 class="text-2xl font-bold mb-4">Query Params Component</h1>
            <p class="text-gray-700">This is a simple component using Tailwind CSS.</p>
        </div>
    `,
    styles: []
})
export class QueryParamsComponent {

    ar = inject(ActivatedRoute);
    
    constructor() {
         console.log(this.ar.snapshot.params,this.ar.snapshot.queryParams)
    }

}