import { CommonModule } from "@angular/common";
import { Component, DestroyRef, inject, signal } from "@angular/core";

@Component({
  selector: 'app-destroy-me',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>Please Destroy me</p> `,
})
export class DestroyMe {
  destRef = inject(DestroyRef);

  constructor() {
    const unregister = this.destRef.onDestroy(() => {
      console.log('I am destory ok');
    });

    unregister()
  }

  ngOnDestroy(): void {
    
    console.log("When I will execute")

  }
}


@Component({
  selector: 'app-destroy-ref',
  standalone: true,
  imports: [DestroyMe, CommonModule],
  template: `
    @if (destroyChild()) {
    <app-destroy-me></app-destroy-me>
    }

    <button
      type="button"
      class="bg-red-700 p-3 rounded-md"
      (click)="destroyMeCalled()"
    >
      {{ destroyChild() ? 'Destroy Me' : 'Reincarnate Me' }}
    </button>
  `,
})
export class DestroyRefComponent {
  destroyChild = signal(true);

  destroyMeCalled() {
    this.destroyChild.update((d) => !d);
  }
}