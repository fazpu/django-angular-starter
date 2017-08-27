import { browser } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/account/login');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Django Angular Starter';
    expect(subject).toEqual(result);
  });

});
