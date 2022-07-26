import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilmembreComponent } from './profilmembre.component';

describe('ProfilmembreComponent', () => {
  let component: ProfilmembreComponent;
  let fixture: ComponentFixture<ProfilmembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilmembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilmembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
