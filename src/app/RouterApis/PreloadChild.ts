import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'preload-child',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="p-4 bg-blue-100 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center text-blue-700">
        Preload Child Component
      </h1>
      <p class="mt-2 text-center text-blue-600">
        This is a simple component styled with Tailwind CSS.
      </p>

      <ul class="flex flex-col gap-2">
        <li class="hover:text-blue-500 cursor-pointer">
          <a routerLink="p1">P1</a>
        </li>
        <li class="hover:text-blue-500 cursor-pointer">
          <a routerLink="p2">p2</a>
        </li>
        <li class="hover:text-blue-500 cursor-pointer">
          <a routerLink="p3">p3</a>
        </li>
      </ul>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class PreloadChild {}
