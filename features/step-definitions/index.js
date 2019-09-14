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

  When(/^I fill basic information (.*), (.*) and (.*)$/  , (name, lastName, email) => {
	var cajaSignUp = browser.element('.cajaSignUp');
	
	var nameInput = cajaSignUp.element('input[name="nombre"]');
	nameInput.click();
	nameInput.keys(name);

	var lastNameInput = cajaSignUp.element('input[name="apellido"]');
	lastNameInput.click();
	lastNameInput.keys(lastName)
		
	browser.pause(1000);
	var mailInput = cajaSignUp.element('input[name="correo"]');
	mailInput.click();
	mailInput.keys(email);
  });
	
  When(/^I select studies (.*), is MBA (.*) and (.*)$/  , (university, isMBA, program) => {
	var cajaSignUp = browser.element('.cajaSignUp');
	
	$('select[name="idUniversidad"]').selectByIndex(2)
		
	var selectUniversidad = cajaSignUp.element('select[name="idUniversidad"]');
	selectUniversidad.selectByVisibleText("Universidad del Rosario");
	
	if(isMBA) {
		var isMBAElement = cajaSignUp.element('input[class="jsx-527058112"]');
		isMBAElement.click();
	}
	
	var selectPrograma = cajaSignUp.element('select[name="idPrograma"]');
    selectPrograma.selectByVisibleText(program);
  });

  When(/^I set the password (.*) and sign up$/, (password) => {
	var cajaSignUp = browser.element('.cajaSignUp');
    var passwordInput = cajaSignUp.element('input[name="password"]');
	passwordInput.click();
	passwordInput.keys(password);
  });
 
  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  When('I open the register screen', () => {
	let loginButton = $('button=Ingresar');
	if(loginButton.isEnabled() && browser.isVisible('button=Ingresar')){
		browser.click('button=Ingresar');
	}
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
  
  Then('I expect to be on sign up', () => {
	var signUpScreen = browser.isVisible('.cajaSignUp')
	expect(signUpScreen).to.be.true;
  });
});