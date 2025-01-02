import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasgenotfoundComponent } from './pasgenotfound.component';

describe('PasgenotfoundComponent', () => {
  let component: PasgenotfoundComponent;
  let fixture: ComponentFixture<PasgenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasgenotfoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasgenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
