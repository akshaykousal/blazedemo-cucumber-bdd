package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.WelcomePage;

import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.concurrent.TimeUnit;

public class WelcomePageStepDefinition extends StepDefinition {

    public WelcomePageStepDefinition() {
        welcomePage = new WelcomePage(driver);
    }

    @When("^User verifies welcome message as (.*)$")
    public void user_verifies_welcome_message_as(String expectedMsg) {
        String actualMsg = welcomePage.getWelcomeMsg();
        if (actualMsg.equals(expectedMsg)) {
            stepPass(expectedMsg + " message is displayed on screen");
        } else {
            stepFail("Expected Message : " + expectedMsg + "Actual Message : " + actualMsg);
        }
    }

    @When("^User clicks on (.*) link on welcome screen")
    public void user_clicks_on_link_on_welcome_screen(String link) {
        welcomePage.clickDestinationOfWeek();
        driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
    }


    @When("^User selects (.*) as (.*) city$")
    public void user_selects_as_city(String value, String field) {
        if (field.equalsIgnoreCase("departure")) {
            welcomePage.selectDepartureCity(value);
        } else if (field.equalsIgnoreCase("destination")) {
            welcomePage.selectDestinationCity(value);
        } else {
            stepFail(field + " not found on screen");
        }
    }

    @When("^User clicks Find Flights button$")
    public void user_clicks_find_flights_button() {
        welcomePage.clickFindFlightsButton();
    }

    @When("^User finds flights from (.*) city to (.*) city$")
    public void user_finds_flights_from_departure_city_to_destination_city(String departure, String destination) {
        welcomePage.findFlights(departure, destination);
    }


}
