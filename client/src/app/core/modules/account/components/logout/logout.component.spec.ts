import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLogoutComponent } from './logout.component';
import { TEST_IMPORTS, TEST_PROVIDERS } from '../../tests/conf-test-module';


describe('LogoutComponent', () => {
  let component: AuthLogoutComponent ;
  let fixture: ComponentFixture<AuthLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLogoutComponent ],
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
    fixture = TestBed.createComponent(AuthLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
