import { CommonModule } from "@angular/common";
import { AfterContentInit, Component, inject, Input, OnInit } from "@angular/core";
import {ControlContainer, FormBuilder, FormControlDirective, FormGroup, FormGroupDirective, FormGroupName, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-nested-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
      <p class="text-2xl text-bold">
        {{ addressGroupName | uppercase }}
      </p>
      <input
        [type]="'text'"
        class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
        [placeholder]="'city'"
        formControlName="city"
      />
      @if (this.fg.form.get("address")?.get('city')?.touched &&
      this.fg.form.get('address')?.get('city')?.invalid) {
      <p class="text-red-500">Enter the City</p>
      }
      <input
        [type]="'text'"
        class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
        [placeholder]="'Zipcode'"
        formControlName="zipCode"
      />
    </div>
  `,
})
export class NestedForm implements AfterContentInit {
  @Input() addressGroupName!: string;

  fg = inject(FormGroupDirective);

  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.fg.form);
  }
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
        @if (myform.get("name")?.touched && myform.get("name")?.invalid) {
        <p class='text-red-500'>Enter Name</p>
        }
        <input
          [type]="'text'"
          class="p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition ease-in-out duration-300"
          [placeholder]="'Roll No'"
          formControlName="rollno"
        />
        @if (myform.get("rollno")?.touched && myform.get("rollno")?.invalid) {
        <p class='text-red-500'>Enter Rollno </p>
        }
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
      name: ['', Validators.required],
      rollno: ['',Validators.required],
      address: this.fb.group({
        city: ['',Validators.required],
        zipCode: [''],
      }),
    });

    this.myform.valueChanges.subscribe((d) => {
      console.log(d);
    });
  }
}