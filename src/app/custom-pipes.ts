import { Component, Pipe } from '@angular/core';

@Pipe({
  name: 'stringTransform',
  standalone: true,
})
export class StringTransformPipe {
  transform(str: any, ...arg: ["upper"| "lower" | "capital"]) {
    arg?.forEach((d) => {
      if (d === 'upper') {
        str = str?.toUpperCase();
      }
      if (d === 'lower') {
        str = str?.toLowerCase();
      }
      if (d === 'capital') {
        str = str?.slice(0, 1)?.toUpperCase() + str?.slice(1)?.toLowerCase();
      }
    });

    return str;
  }
}

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  template: `
    <h1 class="text-3xl text-red-700">Change Me ok</h1>
    <p>{{ 'i am alone!' | stringTransform : 'lower' }}</p>
  `,
  imports: [StringTransformPipe],
})
export class CustomPipe {}
