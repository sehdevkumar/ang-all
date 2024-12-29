import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-optimization',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="flex justify-center gap-3 flex-wrap">
      <ng-container *ngFor="let image of images">
        <img
          class="rounded-lg shadow-lg opacity-100"
          fetchpriority="high"
          [width]="300"
          [loading]="'lazy'"
          [height]="300"
          [ngSrc]="image.url"
          placeholder="https://fakeimg.pl/250x100/ff0000/"
        />
      </ng-container>
    </div>
  `,
})
export class ImageOptimization {
  images: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((response: any) => {
        this.images = (response as any).slice(1, 200);
      });
  }
}
