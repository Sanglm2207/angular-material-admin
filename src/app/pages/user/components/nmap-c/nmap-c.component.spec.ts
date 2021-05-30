import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmapCComponent } from './nmap-c.component';

describe('NmapCComponent', () => {
  let component: NmapCComponent;
  let fixture: ComponentFixture<NmapCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmapCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmapCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
