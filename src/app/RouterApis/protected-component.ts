import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-protected-component',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 class="text-xl font-medium text-black">Protected Component</h2>
            <p class="text-gray-500">This is a standalone Angular component styled with Tailwind CSS.</p>
        </div>
    `,
    styles: []
})
export class ProtectedComponent {}