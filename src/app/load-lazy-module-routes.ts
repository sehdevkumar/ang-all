import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  template: `
    <h1 class="text-3xl text-blue-500">I am Lazy Loaded Component</h1>
  `,
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  exports: [LazyComponent],
  imports: [],
})
export class LazyModules {
   
    hey =  'hello'

}
