import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestInterceptor } from "./test-interceptor";
import { Encapsulation } from "./encapsulation";
import { ContentProjection } from "./content-projection";
import { CommonModule } from '@angular/common';
import { StructuralDirective } from "./structural-directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestInterceptor, Encapsulation, ContentProjection, CommonModule, StructuralDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-all';
}
