import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize counter with 0', () => {
    const counterText = fixture.debugElement.query(By.css('p')).nativeElement
      .textContent;
    expect(counterText).toContain('Counter: 0');
  });

  it('should increment counter when + button is clicked', () => {
    // Get the increment button
    const incrementButton = fixture.debugElement.queryAll(By.css('button'))[1];

    // Click the button
    incrementButton?.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Check if counter was incremented
    const counterText = fixture.debugElement.query(By.css('p')).nativeElement
      .textContent;
    expect(counterText).toContain('Counter: 1');
  });

  it('should decrement counter when - button is clicked', () => {
    // Get the decrement button
    const decrementButton = fixture.debugElement.queryAll(By.css('button'))[0];

    // Click the button
    decrementButton?.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Check if counter was decremented
    const counterText = fixture.debugElement.query(By.css('p')).nativeElement
      .textContent;
    expect(counterText).toContain('Counter: -1');
  });

  it('should handle multiple clicks correctly', () => {
    const incrementButton = fixture.debugElement.queryAll(By.css('button'))[1];
    const decrementButton = fixture.debugElement.queryAll(By.css('button'))[0];

    // Click increment twice and decrement once
    incrementButton?.triggerEventHandler('click', null);
    incrementButton?.triggerEventHandler('click', null);
    decrementButton?.triggerEventHandler('click', null);
    fixture.detectChanges();

    const counterText = fixture.debugElement.query(By.css('p')).nativeElement
      .textContent;
    expect(counterText).toContain('Counter: 1');
  });
});
