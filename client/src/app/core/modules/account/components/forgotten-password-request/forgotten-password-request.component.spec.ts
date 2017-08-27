import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthForgottenPasswordRequestComponent } from './forgotten-password-request.component';
import { TEST_IMPORTS, TEST_PROVIDERS } from '../../tests/conf-test-module';

describe('ForgottenPasswordRequestComponent', () => {
  let component: AuthForgottenPasswordRequestComponent ;
  let fixture: ComponentFixture<AuthForgottenPasswordRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForgottenPasswordRequestComponent ],
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
    fixture = TestBed.createComponent(AuthForgottenPasswordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
