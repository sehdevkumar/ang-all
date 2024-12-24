// export const AngularStructuralDirectives = [
//   'ngIf',
//   'ngFor',
//   'ngSwitch',
//   'ngTemplateOutlet',
//   'ngTemplate',
//   'ngContainer',
// ] as const;

import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";




@Component({
    selector: 'app-structural-directive',
    template: `
    <div class="container mx-auto py-4 px-8">
      <h1 class="text-5xl text-center font-bold">Structural Directives</h1>

      <div class="mt-8 flex flex-col gap-4">
        <!-- if -->
        <div *ngIf="true" class="bg-green-500 p-4 rounded-md">Hello</div>
        
        <!-- switch -->
        <div [ngSwitch]="case">
          <div *ngSwitchCase="'1'" class="bg-blue-500 p-4 rounded-md">1</div>
          <div *ngSwitchCase="'2'" class="bg-yellow-500 p-4 rounded-md">2</div>
          <div *ngSwitchDefault class="bg-red-500 p-4 rounded-md">default</div>
        </div>
        
        <!-- render based on the condition -->
        <ng-container>
          <div class="bg-gray-500 p-4 rounded-md">Container</div>
        </ng-container>

        <!-- With template need condition and also used withth ng-container -->
        <ng-template>
          <div class="bg-purple-500 p-4 rounded-md">Template</div>
        </ng-template>

        <!-- ng template without condition with the ng-container it is used for the common case -->
        <ng-container *ngTemplateOutlet="dumpTemplate; context: { title: 'title1', description: 'description1' }"></ng-container>
        <ng-container *ngTemplateOutlet="dumpTemplate; context: { title: 'title2', description: 'description2' }"></ng-container>

        <ng-template #dumpTemplate let-title="title" let-description="description">
          <div class="bg-white border-2 border-black p-4 rounded-md">
            {{ title }}
            {{ description }}
          </div>
        </ng-template>
      </div>
    </div>
    
    ` ,
    standalone: true,
    imports: [CommonModule]
})
export class StructuralDirective {
  
    case = '1';
}