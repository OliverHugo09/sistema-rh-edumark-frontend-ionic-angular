import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterEntityPage } from './register-entity.page';

describe('RegisterEntityPage', () => {
  let component: RegisterEntityPage;
  let fixture: ComponentFixture<RegisterEntityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterEntityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
