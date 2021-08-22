@Sanity
Feature: To verify the welcome page on the application

  Background:
    Given User launches application

  Scenario: Verify Welcome Message and Destination of the week details
    When User verifies welcome message as Welcome to the Simple Travel Agency!
    And User clicks on destination of the week link on welcome screen
    Then User is navigated to vacation screen
    And User verifies Destination of the week: Hawaii ! text is displayed on vacation screen
    And User verifies assets/vacation.jpg image is displayed on vacation screen

  Scenario: Find Flights for Departure and Destination cities
    When User selects Boston as departure city
    And User selects London as destination city
    And User clicks Find Flights button
    Then User is navigated to reserve screen