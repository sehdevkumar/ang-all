import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControlDirective, FormGroupDirective, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  template: `
    <h1 class="text-4xl font-bold mb-4">Template Driven</h1>

    <form [class]="{'bg-red-100 border-red-500 p-4 mb-4': myNgForm?.controls?.['name']?.touched && myNgForm?.controls?.['name']?.invalid}" #myNgForm="ngForm">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
      <input type="text" id="name" name="name" [(ngModel)]="name" required="true" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
      <p class="mt-2 text-sm text-red-600" *ngIf="myNgForm?.controls?.['name']?.touched && myNgForm?.controls?.['name']?.invalid">Please enter your name</p>
      <button type="button" (click)="onSend()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Send</button>
    </form>
  `,
  imports: [FormsModule,CommonModule],
})
export class TemplateDriven implements OnInit {
  name = '';

  ngOnInit(): void {}

  onSend() {
    console.log(this.name);
  }
}
