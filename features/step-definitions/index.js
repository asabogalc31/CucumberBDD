var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to los estudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
	let loginButton = $('button=Ingresar');
	if(loginButton.isEnabled() && browser.isVisible('button=Ingresar')){
		browser.click('button=Ingresar');
	}
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
	var cajaLogIn = browser.element('.cajaLogIn');

	var mailInput = cajaLogIn.element('input[name="correo"]');
	mailInput.click();
	mailInput.keys(email);

	var passwordInput = cajaLogIn.element('input[name="password"]');
	passwordInput.click();
	passwordInput.keys(password)
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to see {string}', error => {
	browser.waitForVisible('.aviso.alert.alert-danger', 10000);
	var alertText = browser.element('.aviso.alert.alert-danger').getText();
	expect(alertText).to.include(error);
  });
  
  Then('I expect to log in', () => {
	browser.waitForVisible('#cuenta', 10000);
	var account = browser.isVisible('#cuenta')
	expect(account).to.be.true;
  });
});