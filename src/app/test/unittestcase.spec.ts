import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [], // Add any required providers (like services)
      imports: [AppComponent], // Add any required modules (if any)
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Ensure bindings are applied
  });

  it('should render the container div with correct classes', () => {
    const containerDiv = fixture.debugElement.query(By.css('.container'));
    expect(containerDiv).toBeTruthy();
    expect(containerDiv.nativeElement.classList).toContain('mx-auto');
    expect(containerDiv.nativeElement.classList).toContain('p-4');
  });

  it('should render h1 with correct text and classes', () => {
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element).toBeTruthy();

    // Check for the correct text content
    const expectedTitle = `${component.title.toUpperCase()} Test All Angular Concepts`;
    expect(h1Element.nativeElement.textContent.trim()).toBe(expectedTitle);

    // Check for classes
    const classList = h1Element.nativeElement.classList;
    expect(classList).toContain('text-5xl');
    expect(classList).toContain('text-center');
    expect(classList).toContain('animate-pulse');
    expect(classList).toContain('font-bold');
    expect(classList).toContain('mb-2');
  });
});
