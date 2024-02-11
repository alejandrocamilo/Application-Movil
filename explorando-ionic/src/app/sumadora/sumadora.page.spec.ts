import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumadoraPage } from './sumadora.page';

describe('SumadoraPage', () => {
  let component: SumadoraPage;
  let fixture: ComponentFixture<SumadoraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SumadoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
