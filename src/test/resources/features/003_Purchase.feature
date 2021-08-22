@Sanity
Feature: To verify the Purchase page on the application

  Background:
    Given User launches application

  Scenario: Verify Flight reservation message
    When User finds flights from Portland city to Dublin city
    And User is navigated to reserve screen
    And User chooses flight number 234
    Then User is navigated to purchase screen
    And User verifies Your flight from TLV to SFO has been reserved. text on purchase screen

  Scenario: Verify user can Enter details and Purchase Flight
    When User finds flights from Portland city to Dublin city
    And User is navigated to reserve screen
    And User chooses flight number 234
    And User is navigated to purchase screen
    And User Purchase flight by entering details as
      | Name       | Address    | City | State       | Zip Code | Card Type        | Credit Card Number | Month | Year | Name on Card | Remember me |
      | Blaze Demo | Street 123 | Pune | Maharashtra | 444444   | American Express | 1234567891234567   | 12    | 2021 | ABC XYZ      | True        |
    Then User is navigated to confirmation screen
