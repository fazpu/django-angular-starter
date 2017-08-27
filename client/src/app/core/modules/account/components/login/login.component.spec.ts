import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLoginComponent  } from './login.component';

import { TEST_IMPORTS, TEST_PROVIDERS } from '../../tests/conf-test-module';


describe('LoginComponent', () => {
  let component: AuthLoginComponent ;
  let fixture: ComponentFixture<AuthLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginComponent ],
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
    fixture = TestBed.createComponent(AuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
