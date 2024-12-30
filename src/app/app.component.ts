import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestInterceptor } from "./test-interceptor";
import { Encapsulation } from "./encapsulation";
import { ContentProjection } from "./content-projection";
import { CommonModule } from '@angular/common';
import { StructuralDirective } from "./structural-directive";
import { DynamicComponent } from "./dynamic-component";
import { ChangeDetectionApp } from "./change-detection";
import { ReactiveFormComponent } from './reactive-forms';
import { RxjsOperators } from "./rxjs-operators";
import { CustomDirectives } from "./custom-directive";
import { CustomPipe } from "./custom-pipes";
import { TemplateDriven } from "./template-driven-form";
import { LazyModules } from './load-lazy-module-routes';
import { StoreComponent } from "./store";
import { ErrorHandlerComponent } from "./global-error-boundaries";
import { CounterComponent } from "./test/counter";
import { ApiCallTest } from "./test/api-call-test";
import { DestroyRefComponent } from "./destroy-ref";
import { ImageOptimization } from "./image-optimization";
import { InvetigateForm } from "./investigate-form";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestInterceptor, Encapsulation, ContentProjection, CommonModule, StructuralDirective, DynamicComponent, ChangeDetectionApp, ReactiveFormComponent, RxjsOperators, CustomDirectives, CustomPipe, TemplateDriven, LazyModules, StoreComponent, ErrorHandlerComponent, CounterComponent, ApiCallTest, DestroyRefComponent, ImageOptimization, InvetigateForm],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang-all';
   

  constructor() {
     console.log("Hi, from the app component")
  }
  
}
