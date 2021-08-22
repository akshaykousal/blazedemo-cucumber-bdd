package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.ConfirmationPage;
import cucumber.api.java.en.Then;

public class ConfirmationPageStepDefinition extends StepDefinition {

    public ConfirmationPageStepDefinition() {
        confirmationPage = new ConfirmationPage(driver);
    }

    @Then("^User is navigated to confirmation screen$")
    public void user_is_navigated_to_reserve_screen() {
        if (confirmationPage.getPageTitle().equals("BlazeDemo Confirmation")) {
            stepPass("User is successfully navigated to confirmation screen");
        } else {
            stepFail("User is not navigated to confirmation screen");
        }
    }

    @Then("^User verifies (.*) text on confirmation screen$")
    public void user_verifies_text_on_confirmation_screen(String expected) {
        String actual = confirmationPage.getFlightConfirmationMsg();
        if (actual.equals(expected)) {
            stepPass(expected + " text is present on confirmation screen");
        } else {
            stepFail(expected + " text is NOT present on confirmation screen");
        }
    }

    @Then("^User verifies (.*) digit Id is generated successfully on confirmation screen$")
    public void user_verifies_id_is_generated_successfully_on_confirmation_screen(String digitCount) {
        String id = confirmationPage.getConfirmationId();
        if ((id.length() == Integer.parseInt(digitCount))) {
            stepPass(digitCount + " digit '" + id + "' ID is generated and is visible on confirmation screen");
        } else {
            stepFail("Expected : " + digitCount + " digit id should be generated. Actual : " + id);
        }
    }

    @Then("^User verifies Status as (.*) on confirmation screen$")
    public void user_verifies_status_on_confirmation_screen(String expected) {
        String actualStatus = confirmationPage.getConfirmationStatus();
        if (actualStatus.equals(expected)) {
            stepPass(expected + " status should be available on confirmation screen");
        } else {
            stepFail(expected + " status is NOT available on confirmation screen");
        }
    }
}
