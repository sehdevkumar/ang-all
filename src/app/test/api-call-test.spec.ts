import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { ApiCallTest } from './api-call-test';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApiCallTest', () => {
  let component: ApiCallTest;
  let fixture: ComponentFixture<ApiCallTest>;
  let httpMock: HttpTestingController;

  const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      address: {
        street: 'Test Street',
        suite: 'Apt 123',
        city: 'Test City',
        zipcode: '12345',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      address: {
        street: 'Another Street',
        suite: 'Suite 456',
        city: 'Another City',
        zipcode: '67890',
        geo: {
          lat: '-38.3159',
          lng: '82.1496',
        },
      },
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCallTest, HttpClientTestingModule],
      providers: [],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ApiCallTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    req.flush(mockUsers);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that there are no outstanding HTTP requests
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have ${mockUsers?.length}`, async () => {
    fixture.detectChanges();
    let element = fixture.debugElement.queryAll(By.css('div'));
    expect(element.length).toEqual(9);
  });

  it(`should Render the Name`, async () => {
    fixture.detectChanges();
    let element = fixture.debugElement.queryAll(By.css('div'));
    const getTag = (index: number) => {
      let nestedDiv = element.at(index)?.nativeElement;
      return nestedDiv;
    };
    expect(getTag(0)?.textContent).toContain(' Name: John Doe ');
    expect(getTag(6)?.textContent).toContain(' Name: Jane Smith ');
  });
});
