// component
import { SimulationFormComponent } from './simulation-form.component';

// package
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

describe('SimulationFormComponent', () => {
  let component: SimulationFormComponent;
  let fixture: ComponentFixture<SimulationFormComponent>;

  beforeEach(async(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SimulationFormComponent],
      providers: [{ provide: FormBuilder, useFactory: formBuilderStub }]
    });
    fixture = TestBed.createComponent(SimulationFormComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`simulated has default value`, () => {
    expect(component.simulated).toEqual(false);
  });
});
