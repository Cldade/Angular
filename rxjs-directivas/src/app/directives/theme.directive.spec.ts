import { By } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ThemeDirective } from './theme.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ThemeDirective', () => {

  let component: AppComponent;

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ AppComponent, ThemeDirective ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear un Div con el Background #333 y el color del texto snow', () => {
    const div : HTMLDivElement = fixture.debugElement.query(By.directive(ThemeDirective)).nativeElement;
    expect(div.style.backgroundColor).toEqual('rgb(51, 51, 51)');
    expect(div.style.color).toEqual('snow');
  });
});
