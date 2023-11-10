import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BtnDirective } from './btn.directive';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('BtnDirective', () => {
  
  let component: AppComponent;

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ AppComponent, BtnDirective ]
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

  it('Debe crear un botón con el Background rojo, un color del texto snow y un tamaño del 100%', () => {
    const btn : HTMLButtonElement = fixture.debugElement.query(By.directive(BtnDirective)).nativeElement;
    expect(btn.style.backgroundColor).toEqual('purple');
    expect(btn.style.color).toEqual('snow');
    expect(btn.style.width).toEqual('100%');
  });
});
