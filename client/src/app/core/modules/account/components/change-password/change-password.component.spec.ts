import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthChangePasswordComponent  } from './change-password.component';
import { TEST_IMPORTS, TEST_PROVIDERS } from '../../tests/conf-test-module';


describe('ChangePasswordComponent', () => {
  let component: AuthChangePasswordComponent ;
  let fixture: ComponentFixture<AuthChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthChangePasswordComponent ],
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
    fixture = TestBed.createComponent(AuthChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
