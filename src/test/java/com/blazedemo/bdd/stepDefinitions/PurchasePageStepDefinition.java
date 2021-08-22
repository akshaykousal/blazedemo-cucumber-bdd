package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.PurchasePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;

import java.util.List;
import java.util.Map;

public class PurchasePageStepDefinition extends StepDefinition {

    public PurchasePageStepDefinition() {
        purchasePage = new PurchasePage(driver);
    }

    @Then("^User is navigated to purchase screen$")
    public void user_is_navigated_to_reserve_screen() {
        if (purchasePage.getPageTitle().equals("BlazeDemo Purchase")) {
            stepPass("User is successfully navigated to purchase screen");
        } else {
            stepFail("User is not navigated to purchase screen");
        }
    }

    @Then("^User verifies (.*) text on purchase screen$")
    public void user_verifies_text_on_purchase_screen(String expected) {
        String actual = purchasePage.getFlightReservedMsg();
        if (actual.equals(expected)) {
            stepPass(expected + " text is present on purchase screen");
        } else {
            stepFail(expected + " text is NOT present on purchase screen");
        }
    }


    @Then("^User Purchase flight by entering details as$")
    public void user_purchase_flight_by_entering_details_as(DataTable inputData) {
        List<Map<String, String>> listMap = inputData.asMaps(String.class, String.class);
        Map<String, String> map = listMap.get(0);

        String name = null;
        String address = null;
        String city = null;
        String state = null;
        String zip = null;
        String cardType = null;
        String cardNo = null;
        String cardMon = null;
        String cardYr = null;
        String nameOnCard = null;
        boolean remember = false;

        for (String key : map.keySet()) {
            String value = map.get(key);
            if (key.equalsIgnoreCase("name")) {
                name = value;
            } else if (key.equalsIgnoreCase("Address")) {
                address = value;
            } else if (key.equalsIgnoreCase("City")) {
                city = value;
            } else if (key.equalsIgnoreCase("State")) {
                state = value;
            } else if (key.equalsIgnoreCase("Zip Code")) {
                zip = value;
            } else if (key.equalsIgnoreCase("Card Type")) {
                cardType = value;
            } else if (key.equalsIgnoreCase("Credit Card Number")) {
                cardNo = value;
            } else if (key.equalsIgnoreCase("Month")) {
                cardMon = value;
            } else if (key.equalsIgnoreCase("Year")) {
                cardYr = value;
            } else if (key.equalsIgnoreCase("Name on Card")) {
                nameOnCard = value;
            } else if (key.equalsIgnoreCase("Remember me")) {
                remember = value.equalsIgnoreCase("true");
            } else {
                stepFail(key + " field not available on screen");
            }
        }

        purchasePage.purchaseFlight(name, address, city, state, zip, cardType, cardNo, cardMon, cardYr, nameOnCard, remember);

    }


}
