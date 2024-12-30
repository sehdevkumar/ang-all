import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'use-only-form-control',
  standalone: true,
  template: `
    <mat-form-field>
      <input
        [formControl]="nameControl"
        matInput
        type="text"
        required
        placeholder="Enter Someting"
      />
    </mat-form-field>
  `,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UseOnlyFormControl {
  nameControl = new FormControl();

  constructor() {
    this.nameControl.valueChanges.subscribe((d) => {
      console.log(d);
    });
  }
}

/**
 *  To Achieve the Form Patch , Set and Reset Better to use the Reactive form Module
 */
@Component({
  selector: 'use-patch-set-reset-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <form [formGroup]="form" class="border-2 border-gray-400 p-2">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input
          matInput
          formControlName="name"
          type="text"
          required
          placeholder=""
        />
      </mat-form-field>

      <div [formArrayName]="'phones'" class="flex flex-col gap-y-2">
        @for (item of getForms?.controls; track $index) {

        <mat-form-field>
          <mat-label>Phone {{ $index + 1 }}</mat-label>
          <input
            matInput
            [formControlName]="$index"
            type="text"
            required
            placeholder=""
          />
        </mat-form-field>

        }
      </div>

      <div [formGroupName]="'address'" class="flex flex-col gap-y-2">
        <mat-form-field>
          <mat-label>City</mat-label>
          <input
            matInput
            [formControlName]="'city'"
            type="text"
            required
            placeholder=""
          />
        </mat-form-field>

        <mat-form-field>
          <mat-label>Zip Code</mat-label>
          <input
            matInput
            [formControlName]="'zipCode'"
            type="text"
            required
            placeholder=""
          />
        </mat-form-field>
      </div>

      <div class="w-full h-auto flex justify-between">
        <button mat-raised-button color='primary' (click)="patchValues()">PatchValues</button>
        <button mat-raised-button (click)="setValues()">setValues</button>
        <button mat-raised-button (click)="resetValues()">ResetValues</button>
      </div>
    </form>
  `,
})
export class UsePatchSetAndResetForm {
  form!: FormGroup;

  get getForms(): FormArray<any> {
    return this.form.get('phones') as FormArray<any>;
  }

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      phones: new FormArray([new FormControl(), new FormControl()]),
      address: new FormGroup({
        city: new FormControl(),
        zipCode: new FormControl(),
      }),
    });
  }

  // Partial Updates
  patchValues() {
           
     const values = {
       name: 'sehdev',
       phones: ["1222222"],
       address: {
         zipCode: 123
       }
     }
     
     this.form.patchValue(values)

  }

  // Full form Updates
  setValues() {
    
     const values = {
       name: 'sehdev',
       phones: ['1222222','929239234'],
       address: {
         zipCode: 123,
         city: 'HYD'
       },
     };

     this.form.setValue(values);

  }

  // Reset the Form
  resetValues() {
     
    this.form.reset()

  }
}

/**
 * @fileoverview This component is parent component will help to understand the Forms in Deep , how the template driven and reactive form works and what are the common functionalities shared between them.
 *
 */

@Component({
  selector: 'app-investigate-form',
  standalone: true,
  imports: [UseOnlyFormControl, UsePatchSetAndResetForm],
  template: `
    <div
      class="w-full h-full bg-zinc-600 shadow-xl shadow-zinc-200 rounded-sm flex flex-col gap-y-2"
    >
      <div class="w-full h-auto p-2 text-white">
        <h1>Use Only Form Control</h1>
        <use-only-form-control></use-only-form-control>
      </div>

      <div class="w-full h-auto p-2 text-white">
        <h1>Use Patch , Set And Reset Form</h1>
        <use-patch-set-reset-form></use-patch-set-reset-form>
      </div>
    </div>
  `,
})
export class InvetigateForm {}
