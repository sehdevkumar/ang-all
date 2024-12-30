import { Component } from '@angular/core';

@Component({
    selector: 'app-load',
    standalone: true,
    template: `
        <div class="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div class="text-center">
                <p>This is a Lazy Loaded Component</p>
            </div>
        </div>
    `,
    styles: []
})
export class LoadComponent {}
