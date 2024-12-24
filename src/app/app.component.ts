import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestInterceptor } from "./test-interceptor";
import { Encapsulation } from "./encapsulation";
import { ContentProjection } from "./content-projection";
import { CommonModule } from '@angular/common';
import { StructuralDirective } from "./structural-directive";
import { DynamicComponent } from "./dynamic-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestInterceptor, Encapsulation, ContentProjection, CommonModule, StructuralDirective, DynamicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-all';
}
