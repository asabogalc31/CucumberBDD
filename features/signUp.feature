Feature: Register into los estudiantes
	As an user I want to register myself within los estudiantes website

Scenario Outline: Register success
    Given I go to los estudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies <university>, is MBA <isMBA> and <program>
	And I set the password <password> and sign up
	Then I expect to log in
	
	Examples:
	|      name       |  lastName           | email            | university             | isMBA	 |program       |password | 
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| false	 |Historia|Prueb41234|
	
Scenario Outline: Register failed
    Given I go to los estudiantes home screen
	When I open the register screen
	And I fill basic information <name>, <lastName> and <email>
	And I select studies <university>, is MBA <isMBA> and <program>
	And I set the password <password> and sign up
	Then I expect to be on sign up
	
	Examples:
	|      name       |  lastName           | email            | university             | isMBA	 |program       |password  |
	|                 |    Perez            | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |                     | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            |         		   | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| true	 | 				|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|		   |
	|                 |    Perez            | abc@example.com  | Universidad del Rosario| false	 |Jurisprudencia|Prueb41234|
	|      Pepito     |                     | abc@example.com  | Universidad del Rosario| false	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            |         		   | Universidad del Rosario| false	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| false	 | 				|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| false	 |Jurisprudencia|		   |
	|      /*-#$%     |    Perez            | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    /*-#$%           | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | /*-#$%"#$%?¡?//  | Universidad del Rosario| true	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| true	 |Jurisprudencia|1         |
	|      /*-#$%     |    Perez            | abc@example.com  | Universidad del Rosario| false	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    /*-#$%           | abc@example.com  | Universidad del Rosario| false	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | /*-#$%"#$%?¡?//  | Universidad del Rosario| false	 |Jurisprudencia|Prueb41234|
	|      Pepito     |    Perez            | abc@example.com  | Universidad del Rosario| false	 |Jurisprudencia|1         |