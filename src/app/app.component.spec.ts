import { TestBed } from '@angular/core/testing';
import { HomeListComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TheRoastHouse-public'`, () => {
    const fixture = TestBed.createComponent(HomeListComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TheRoastHouse-public');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, TheRoastHouse-public');
  });
});
