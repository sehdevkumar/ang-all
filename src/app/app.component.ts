import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestInterceptor } from "./test-interceptor";
import { Encapsulation } from "./encapsulation";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestInterceptor, Encapsulation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-all';
}
