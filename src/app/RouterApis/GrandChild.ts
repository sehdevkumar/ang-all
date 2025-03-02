import { Component } from '@angular/core';
@Component({
    selector: 'app-grand-child',
    template: `
        <div class="p-4 bg-blue-100 rounded-lg shadow-md">
            <h1 class="text-2xl font-bold text-gray-800">GrandChild Component</h1>
            <p class="mt-2 text-gray-600">
                This is a simple GrandChild component styled with Tailwind CSS.
            </p>
        </div>
    `,
    styles: [],
    standalone:true
})
export class GrandChildComponent {}