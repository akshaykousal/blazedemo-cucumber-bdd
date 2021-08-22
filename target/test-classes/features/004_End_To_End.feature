@Regression
Feature: To Test End to End Flight Booking functionality

  Background:
    Given User launches application

  Scenario: Verify user can Enter details and Purchase Flight
    When User finds flights from Portland city to Dublin city
    And User is navigated to reserve screen
    And User verifies Flights from Portland to Dublin: text is displayed on reserve screen
    And User chooses flight number 234
    And User is navigated to purchase screen
    And User Purchase flight by entering details as
      | Name       | Address    | City | State       | Zip Code | Card Type        | Credit Card Number | Month | Year | Name on Card | Remember me |
      | Blaze Demo | Street 123 | Pune | Maharashtra | 444444   | American Express | 1234567891234567   | 12    | 2021 | ABC XYZ      | True        |
    Then User is navigated to confirmation screen
    And User verifies Thank you for your purchase today! text on confirmation screen
    And User verifies 13 digit Id is generated successfully on confirmation screen
    And User verifies Status as PendingCapture on confirmation screen
