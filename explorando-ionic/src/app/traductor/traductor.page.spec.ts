import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraductorPage } from './traductor.page';

describe('TraductorPage', () => {
  let component: TraductorPage;
  let fixture: ComponentFixture<TraductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TraductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
