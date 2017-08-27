import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthForgottenPasswordConfirmComponent  } from './forgotten-password-confirm.component';
import { TEST_IMPORTS, TEST_PROVIDERS } from '../../tests/conf-test-module';

describe('ForgottenPasswordConfirmComponent', () => {
  let component: AuthForgottenPasswordConfirmComponent ;
  let fixture: ComponentFixture<AuthForgottenPasswordConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForgottenPasswordConfirmComponent ],
      imports: [
        ...TEST_IMPORTS
      ],
      providers: [
        ...TEST_PROVIDERS
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForgottenPasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
