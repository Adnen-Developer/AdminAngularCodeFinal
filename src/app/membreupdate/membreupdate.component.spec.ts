import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreupdateComponent } from './membreupdate.component';

describe('MembreupdateComponent', () => {
  let component: MembreupdateComponent;
  let fixture: ComponentFixture<MembreupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
