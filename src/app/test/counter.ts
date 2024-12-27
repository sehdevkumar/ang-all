import { CommonModule } from "@angular/common";
import { Component, inject, Injectable, signal } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class CounterService{
    
    private storeCounter = signal(0);
   
    setCounter(sign: string) {
      this.storeCounter.update(d=>  sign == '-'  ? d-1:  d+1);
    }


    getCounter() {
         return this.storeCounter();
    }

}



@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  providers:[],
  template: `
    <section class="w-full shadow-inner rounded-r-xl shadow-orange-300 gap-x-10 justify-center min-h-[200px] items-center h-full bg-lime-200 flex">
      <button
        class="w-[100px] bg-slate-300 p-1 rounded-md shadow-md hover:bg-slate-600 text-5xl"
        type="button"
        (click)="onCunterChange('-')"
      >
        -
      </button>

      <p class='text-3xl text-purple-500'>Counter: {{ cs.getCounter() }}</p>
      <button
        class="w-[100px] bg-slate-300  p-1 rounded-md shadow-md hover:bg-slate-600 text-5xl"
        type="button"
        (click)="onCunterChange('+')"
      >
        +
      </button>
    </section>
  `,
})
export class CounterComponent {
  cs  = inject(CounterService)

  onCunterChange(mode: string) {
    this.cs.setCounter(mode);
  }
}