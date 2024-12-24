import { CommonModule } from "@angular/common";
import { Component, inject, Input, OnInit } from "@angular/core";
import {ControlContainer, FormBuilder, FormControlDirective, FormGroup, FormGroupDirective, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-nested-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],

  template: `
    <div
      class="p-10 w-full h-full bg-gray-200 rounded-lg border-2 flex flex-col gap-y-2 border-gray-500 shadow-orange-500 shadow-md"
      [formGroupName]="addressGroupName"
    >
      <input
        [type]="'text'"
        class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
        [placeholder]="'city'"
        formControlName="city"
      />
      <input
        [type]="'text'"
        class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
        [placeholder]="'Zipcode'"
        formControlName="zipCode"
      />
    </div>
  `,
})
export class NestedForm {
  @Input() addressGroupName!: string;
}



@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NestedForm],
  template: `
    <div
      class="p-10 w-full flex flex-col gap-y-2 h-full bg-gray-200 rounded-lg border-2 border-gray-500 shadow-orange-500 shadow-md"
    >
      <form [formGroup]="myform" class="flex flex-col gap-y-2">
        <input
          [type]="'text'"
          class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
          [placeholder]="'Name'"
          formControlName="name"
        />
        <input
          [type]="'text'"
          class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
          [placeholder]="'Roll No'"
          formControlName="rollno"
        />
        <app-nested-form [addressGroupName]="'address'"> </app-nested-form>
      </form>
    </div>
  `,
})
export class ReactiveFormComponent implements OnInit {
  myform!: FormGroup;
  fb = inject(FormBuilder);

  get getAddressFormGp() {
    return this.myform.get('address') as FormGroup;
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      name: [''],
      rollno: [''],
      address: this.fb.group({
        city: [''],
        zipCode: [''],
      }),
    });

    this.myform.valueChanges.subscribe((d) => {
      console.log(d);
    });
  }
}