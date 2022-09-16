import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTutorialesComponent } from './lista-tutoriales.component';

describe('ListaTutorialesComponent', () => {
  let component: ListaTutorialesComponent;
  let fixture: ComponentFixture<ListaTutorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTutorialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTutorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
