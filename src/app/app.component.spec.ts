import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const titleStub = () => ({ setTitle: arg => ({}) });
    const routerStub = () => ({
      events: { pipe: () => ({ subscribe: f => f({}) }) }
    });
    const activatedRouteStub = () => ({
      firstChild: { snapshot: { data: {} } }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: Title, useFactory: titleStub },
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`title has default value`, () => {
    expect(component.title).toEqual(`LoanSimulator`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const titleStub: Title = fixture.debugElement.injector.get(Title);
      spyOn(titleStub, 'setTitle').and.callThrough();
      component.ngOnInit();
      expect(titleStub.setTitle).toHaveBeenCalled();
    });
  });
});
