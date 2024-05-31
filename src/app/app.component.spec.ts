import { TestBed } from '@angular/core/testing';
import { TodosComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'hello-world' title`, () => {
    const fixture = TestBed.createComponent(TodosComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hello-world');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TodosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, hello-world');
  });
});
