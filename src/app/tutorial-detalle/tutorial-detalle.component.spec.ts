import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetalleComponent } from './tutorial-detalle.component';

describe('TutorialDetalleComponent', () => {
  let component: TutorialDetalleComponent;
  let fixture: ComponentFixture<TutorialDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
