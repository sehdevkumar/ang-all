import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-route-data',
    template: `
        <div class="container mx-auto p-4">
           
            <p class="mt-4 text-lg">
                Route Data: {{ routeData }}
            </p>
        </div>
    `,
    styles: [],
    standalone: true
})
export class RouteDataComponent {
    routeData: any;

    constructor(private route: ActivatedRoute) {
        this.route.data.subscribe(data => {
            if((data as any)?.config) {
                this.routeData = (data as any).config;
            }
        });
    }
}