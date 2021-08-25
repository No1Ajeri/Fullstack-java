import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNewTableComponent } from './crud-new-table.component';

describe('CrudNewTableComponent', () => {
  let component: CrudNewTableComponent;
  let fixture: ComponentFixture<CrudNewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNewTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
