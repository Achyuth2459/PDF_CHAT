import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfchatComponent } from './pdfchat.component';

describe('PdfchatComponent', () => {
  let component: PdfchatComponent;
  let fixture: ComponentFixture<PdfchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfchatComponent]
    });
    fixture = TestBed.createComponent(PdfchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
