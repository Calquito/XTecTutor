import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDeConocimientoComponent } from './entrada-de-conocimiento.component';

describe('EntradaDeConocimientoComponent', () => {
  let component: EntradaDeConocimientoComponent;
  let fixture: ComponentFixture<EntradaDeConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaDeConocimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaDeConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
