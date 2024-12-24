import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, Input, ViewChild, ViewContainerRef } from "@angular/core";


@Component({
  selector: 'app-child-dynamic',
  template:`
    <h1 class='text-5xl'>I am Ready to load , You Can Load Me</h1>
    <p class='text-[#887ddd] text-2xl'>{{title}}</p>
  `,
  standalone:true,
 

})
export class ChildDynamic{
   
  @Input() title:string = '';


  constructor() {
    
  }
    

}

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  template: `
    <h1 class="text-red text-4xl pt-4">Loading the dymaic Component</h1>

    <div
      class="w-full h-full bg-[#191919] shadow-md shadow-slate-600"
      #loadDynamicComponent
    ></div>
  `,
  imports: [CommonModule],
})
export class DynamicComponent  implements AfterViewInit{
  @ViewChild('loadDynamicComponent', { read: ViewContainerRef }) loadDynamicComponent!: ViewContainerRef;




  ngAfterViewInit(): void {
   
    const instance  = this.loadDynamicComponent.createComponent(ChildDynamic)
    instance.setInput("title","This message sent from the parent")
    instance.changeDetectorRef.detectChanges()
  }
   


}