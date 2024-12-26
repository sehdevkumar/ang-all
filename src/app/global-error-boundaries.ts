import { CommonModule } from "@angular/common";
import { Component, ErrorHandler, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ErrorBoundaries  implements ErrorHandler  {
    handleError(error: any): void {
        console.error(error.message)
    }
    
} 


@Component({
    selector: 'app-error-handler-component',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="container mx-auto p-4">
            <h1 class="text-5xl text-center animate-pulse font-bold mb-2">Global Error Boundaries</h1>
            <p class="text-center mb-4">This component catches all the errors thrown in the application and displays a nice error message.</p>
            <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" (click)="onGenerateMockError()">Generate Error</button>
            <div class="mt-4 p-4 bg-red-100 border border-red-400 rounded" *ngIf="error">
                <p class="font-bold">Error Message:</p>
                <pre>{{ error.message }}</pre>
            </div>
        </div>
    `
})

export class ErrorHandlerComponent {
    error: any;

    onGenerateMockError() {
        try {
            throw new Error("This is an Mock Error")
        } catch (error) {
            this.error = error;
        }
    }
}