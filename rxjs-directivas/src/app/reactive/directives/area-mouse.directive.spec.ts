import { AreaMouseDirective } from './area-mouse.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveContainerComponent } from '../reactive-container/reactive-container.component';

describe('AreaMouseDirective', () => {
  let component: ReactiveContainerComponent;

  let fixture: ComponentFixture<ReactiveContainerComponent>;

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [ ReactiveContainerComponent, AreaMouseDirective ]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear un div con el Background azul y un tamaño de 400px', () => {
    const area : HTMLDivElement = fixture.debugElement.query(By.directive(AreaMouseDirective)).nativeElement;
    expect(area.style.backgroundColor).toEqual('blue');
    expect(area.style.height).toEqual('400px');
  });
});
