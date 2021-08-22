@Sanity
Feature: To verify the reserve page on the application

  Background:
    Given User launches application

  Scenario: Verify Flight details from Departure to Destination cities
    When User finds flights from Boston city to London city
    Then User is navigated to reserve screen
    And User verifies Flights from Boston to London: text is displayed on reserve screen

  Scenario: Verify user can choose flight by Flight Number
    When User finds flights from Portland city to Dublin city
    And User is navigated to reserve screen
    And User chooses flight number 234
    Then User is navigated to purchase screen

  Scenario: Verify user can choose flight by Airline name and Depart Time
    When User finds flights from Paris city to Cairo city
    And User is navigated to reserve screen
    And User chooses flight having Airline and Depart time details as
      | Airline        | Departs  |
      | Virgin America | 11:23 AM |
    Then User is navigated to purchase screen