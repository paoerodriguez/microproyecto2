import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepeliculaComponent } from './detallepelicula.component';

describe('DetallepeliculaComponent', () => {
  let component: DetallepeliculaComponent;
  let fixture: ComponentFixture<DetallepeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
