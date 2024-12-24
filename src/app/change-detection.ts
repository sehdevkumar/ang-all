import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from "@angular/core";



@Component({
  selector: 'app-change-detection-child2',
  template: `
    <div class="w-full shadow-lg shadow-orange-800 p-5 rounded-xl h-full bg-yellow-400">
      <h1>I am Child2</h1>
      <p>Counter: {{counter()}}</p>
      <p>Normal Counter : {{normalCounter}}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class ChangeDetectionChild2 {
  counter = signal(0);
  timerRef = signal<null>(null);
  normalCounter = 0
  cdRef = inject(ChangeDetectorRef)
  constructor() {
    this.timerRef = setInterval(() => {
    //   this.counter.update((d) => d + 1);
       this.normalCounter +=1;
       this.cdRef.markForCheck()
    }, 2000) as any;
  }

  ngOnDestroy(): void {
    
     clearInterval(this.timerRef as any);
    
  }
}



@Component({
  selector: 'app-change-detection-child1',
  template: `
    <div
      class="w-full shadow-lg shadow-orange-800 p-5 rounded-xl h-full bg-teal-500"
    >
      <h1>I am Child1</h1>
      <p>Counter: {{ counter() }}</p>
      <p class='text-[#191919] text-bold' >Normal Counter : {{ normalCounter }}</p>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChild1 {
  counter = signal(0);
  normalCounter = 0;
  timerRef = signal<null>(null);

  constructor() {
    this.timerRef = setInterval(() => {
      this.counter.update((d) => d + 1);
      this.normalCounter +=1;
    }, 2000) as any;
  }

  ngOnDestroy(): void {
    clearInterval(this.timerRef as any);
  }
}

@Component({
  selector: 'app-change-detection',
  template: `
    <div class="w-full h-full flex gap-10 flex-col">
      <h1 class="text-4xl  text-center">Hey I am the Parent</h1>
      <p>Counter: {{normalCounter}}</p>
      <app-change-detection-child1></app-change-detection-child1>
      <app-change-detection-child2></app-change-detection-child2>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, ChangeDetectionChild1, ChangeDetectionChild2],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionApp {
  normalCounter = 0;
  timerRef = signal<null>(null);
  cdRef = inject(ChangeDetectorRef)
  constructor() {
    this.timerRef = setInterval(() => {
      this.normalCounter += 1;
    }, 2000) as any;
  }

  ngOnDestroy(): void {
    clearInterval(this.timerRef as any);
  }
}