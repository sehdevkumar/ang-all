import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector: 'app-custom-content',
    template: `
        <header class="bg-slate-500 text-white p-4">
            <ng-content select="header"></ng-content>
        </header>
        <main class="p-4 prose">
            <ng-content></ng-content>
        </main>
        <footer class="bg-slate-500 text-white p-4">
            <ng-content select="footer"></ng-content>
        </footer>
    `,
    standalone: true,
    imports: [CommonModule]
})
export class CustomContent {}




@Component({
    selector: 'app-content-projection',
    template: `
        <app-custom-content>
            <footer>Footer</footer>
            <header>Header</header>
            <p>This is my conent Content</p>
        </app-custom-content>
    `,
    standalone: true,
    imports: [CustomContent]
})  

export class ContentProjection {}