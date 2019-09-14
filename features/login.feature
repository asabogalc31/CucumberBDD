Feature: Login into losestudiantes
    As an user I want to authenticate myself within los estudiantes website in order to rate teachers

Scenario Outline: Login failed
    Given I go to los estudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>
	
	Examples:
	  | email            | password | error                    |
	  |                  |          | Ingresa una contraseña   |
	  | miso@gmail.com   |    1234  | Upss! El correo y        |
	
Scenario Outline: Login success
    Given I go to los estudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to log in
	
	Examples:
	  | email            | password    |
	  | abc@example.com  | Prueb41234  |