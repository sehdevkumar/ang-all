import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestInterceptor } from '../test-interceptor';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: TestInterceptor;
  let fixture: ComponentFixture<TestInterceptor>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient], // Add any required providers (like services)
      imports: [TestInterceptor, HttpClientModule], // Add any required modules (if any)
    }).compileComponents();

    fixture = TestBed.createComponent(TestInterceptor);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ensure bindings are applied
  });

  it('Created', () => {
    expect(component).toBeTruthy();
  });

  it('h1 tag', () => {
    let element = fixture.debugElement.query(By.css('h1'));

    expect(element).toBeTruthy();
    expect(element.nativeElement.textContent.trim()).toContain(
      'Test Interceptor'
    );
  });
});
