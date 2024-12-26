import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';

@Directive({
  selector: '[loadImageLazy]',
  standalone: true,
  host: {
    '(mousemove)': 'callKeydown($event)',
  },
})
export class LoadImageLazy implements OnInit, OnDestroy {
  @Input() imageSrc = '';
  private renderer = inject(Renderer2);
  private ele = inject(ElementRef);
  private intersectObserver!: IntersectionObserver;
  
  callKeydown(event: MouseEvent) {
    
  }

  ngOnInit(): void {
    // Set a placeholder or loading image initially
    this.renderer.setAttribute(
      this.ele.nativeElement,
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    );

    requestAnimationFrame(()=> {
      this.useIntersectObserver();
    })
  }

  ngOnDestroy(): void {
    if (this.intersectObserver) {
      this.intersectObserver.disconnect();
    }
  }

  private loadImage() {
    if (this.imageSrc) {
      // Create a new image to preload
      const img = new Image();
      img.src = this.imageSrc;
      img.onload = () => {
        this.renderer.setAttribute(
          this.ele.nativeElement,
          'src',
          this.imageSrc
        );
        // Add a loaded class for potential animations
        this.renderer.addClass(this.ele.nativeElement, 'loaded');
      };
    }
  }

  private useIntersectObserver() {
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px', // No margin
      threshold: buildThresholdList(), // Multiple thresholds for smoother detection
    };

    if ('IntersectionObserver' in window) {
      this.intersectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // Check if element is in the middle portion of the viewport
          if (entry.isIntersecting) {
            this.loadImage();
            this.intersectObserver.disconnect();
          }
        });
      }, options);
      this.intersectObserver.observe(this.ele.nativeElement);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      this.loadImage();
    }
  }
}

// Helper function to create multiple thresholds
function buildThresholdList(): number[] {
  const thresholds = [];
  const numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    thresholds.push(i / numSteps);
  }
  return thresholds;
}

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [LoadImageLazy, CommonModule],
  template: `
    <div class="image-container">
      @for (item of imagesList(); track $index) {
      <img
        class="w-full h-full object-cover rounded-md shadow-slate-700 shadow-md bg-red-200 opacity-0 transition-opacity duration-300"
        loadImageLazy
        [imageSrc]="item.url"
        [attr.alt]="item.title"
      />
      }
    </div>
  `,
  styles: [
    `
      .image-container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
      img {
        min-height: 200px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      img.loaded {
        opacity: 1;
      }
    `,
  ],
})
export class CustomDirectives implements OnInit {
  http = inject(HttpClient);
  imagesList = signal<
    {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }[]
  >([]);

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((d) => {
        this.imagesList.set((d as any)?.slice(0, 500) as any);
      });
  }
}
