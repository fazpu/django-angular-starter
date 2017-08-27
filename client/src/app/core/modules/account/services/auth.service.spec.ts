import { ComponentFixture, fakeAsync, TestBed, tick, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, ConnectionBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AUTH_SERVICES } from './index';


describe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        ...AUTH_SERVICES,
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
                       defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  function expectURL(backend: MockBackend, url: string) {
    backend.connections.subscribe(c => {
      expect(c.request.url).toBe(url);
      const response = new ResponseOptions({body: '{"test": "test"}'});
      c.mockRespond(new Response(response));
    });
  }

  describe('login', () => {
    it('checks login url is correct',
      inject([...AUTH_SERVICES, MockBackend], fakeAsync((svc, backend) => {
        let res;
        expectURL(backend, 'http://aaa.com');
        svc.login().subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe('{"test": "test"}');
    }))
    );
  });
});
