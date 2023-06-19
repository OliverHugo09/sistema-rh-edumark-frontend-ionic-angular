import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginEntityPage } from './login-entity.page';

describe('LoginEntityPage', () => {
  let component: LoginEntityPage;
  let fixture: ComponentFixture<LoginEntityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginEntityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
