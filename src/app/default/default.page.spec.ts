import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultPage } from './default.page';

describe('DefaultPage', () => {
  let component: DefaultPage;
  let fixture: ComponentFixture<DefaultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
