import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit, signal } from "@angular/core";

export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};



@Component({
  selector: 'app-api-call-test',
  template: `
    <div
      class="w-full h-full flex flex-wrap gap-6 justify-center items-center p-6 bg-gray-100"
    >
      @for (item of users(); track $index) {
      <div
        class="max-w-sm w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="text-lg font-semibold text-gray-800 mb-2">
          Name: {{ item.name }}
        </div>
        <div class="text-sm text-gray-600 mb-2">
          Email:
          <a
            href="mailto:{{ item.email }}"
            class="text-blue-500 hover:underline"
            >{{ item.email }}</a
          >
        </div>
        <div class="text-sm text-gray-600">
          Address: <span class="text-gray-800">{{ item.address.city }}</span>
        </div>
      </div>
      }
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class ApiCallTest implements OnInit {
  http = inject(HttpClient);
  users = signal<User[]>([]);

  ngOnInit(): void {
    this.http
      ?.get('https://jsonplaceholder.typicode.com/users')
      ?.subscribe((d) => {
        this.users.set(d as User[]);
      });
  }
}