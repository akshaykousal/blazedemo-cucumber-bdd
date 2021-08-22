@Regression
Feature: Test should fail for incorrect user expectations

  Background:
    Given User launches application

  Scenario: Verify Welcome Message
    When User verifies welcome message as INCORRECT WELCOME MESSAGE!
    And User clicks on destination of the week link on welcome screen
    Then User is navigated to vacation screen

  Scenario: Choose Flight
    When User finds flights from Portland city to Dublin city
    And User is navigated to reserve screen
    And User chooses flight number INCORRECT NUMBER
    Then User is navigated to purchase screen
