import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNewFormComponent } from './crud-new-form.component';

describe('CrudNewFormComponent', () => {
  let component: CrudNewFormComponent;
  let fixture: ComponentFixture<CrudNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
