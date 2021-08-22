package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.ReservePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

import java.util.List;
import java.util.Map;

public class ReservePageStepDefinition extends StepDefinition {

    public ReservePageStepDefinition() {
        reservePage = new ReservePage(driver);
    }

    @Then("^User is navigated to reserve screen$")
    public void user_is_navigated_to_reserve_screen() {
        if (reservePage.getPageTitle().equals("BlazeDemo - reserve")) {
            stepPass("User is successfully navigated to reserve screen");
        } else {
            stepFail("User is not navigated to reserve screen");
        }
    }

    @Then("^User verifies Flights from (.*) to (.*): text is displayed on reserve screen$")
    public void user_verifies_flights_from_to_text_is_displayed_on_reserve_screen(String departure, String destination) {
        String expected = "Flights from " + departure + " to " + destination + ":";
        String actual = reservePage.getFlightMsg();
        if (actual.equals(expected)) {
            stepPass("Verified successfully - '" + expected + "' text is displayed on reserve screen");
        } else {
            stepFail("'" + expected + "' text is NOT displayed on reserve screen");
        }
    }

    @Then("^User chooses flight number (.*)$")
    public void user_chooses_flight_number(String flightNo) {
        if (reservePage.chooseFlight(flightNo)) {
            stepPass("Flight with Flight number as " + flightNo + " is selected successfully");
        } else {
            stepFail("Flight with Flight number as " + flightNo + " NOT found on the screen");
        }
    }


    @Then("^User chooses flight having Airline and Depart time details as$")
    public void user_chooses_flight_having_airline_and_depart_time_details_as(DataTable inputData) {
        List<Map<String, String>> listMap = inputData.asMaps(String.class, String.class);
        String airline = listMap.get(0).get("Airline");
        String departTime = listMap.get(0).get("Departs");
        if (reservePage.chooseFlight(airline, departTime)) {
            stepPass("Flight with '" + airline + "' Airline and Depart time '" + departTime + "' is selected successfully");
        } else {
            stepFail("Flight with '" + airline + "' Airline and Depart time '" + departTime + "' NOT Found");
        }
    }

}
