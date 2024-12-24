import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";



@Component({
    selector: 'app-test-interceptor',
    template: `
        <h1>Test Interceptor</h1>
    `,
    standalone: true,
    imports: [CommonModule]
})

export class TestInterceptor {
  
    http  = inject(HttpClient);

    constructor() {
        this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
            console.log(res);
        })
    }
      

}