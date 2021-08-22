package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.VacationPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.io.IOException;

public class VacationPageStepDefinition extends StepDefinition {

    public VacationPageStepDefinition() {
        vacationPage = new VacationPage(driver);
    }

    @Then("^User is navigated to vacation screen$")
    public void user_is_navigated_to_vacation_screen() {
        if (vacationPage.getPageTitle().equals("BlazeDemo - vacation")) {
            stepPass("User is successfully navigated to vacation screen");
        } else {
            stepFail("User is not navigated to vacation screen");
        }
    }

    @When("^User verifies (.*) text is displayed on vacation screen$")
    public void user_verifies_text_is_displayed_on_vacation_screen(String expectedMsg) {
        String actualMsg = vacationPage.getDestinationOfWeekCaption();
        if (actualMsg.equals(expectedMsg)) {
            stepPass(expectedMsg + " caption is displayed on vacation screen");
        } else {
            stepFail("Expected Message : " + expectedMsg + "Actual Message : " + actualMsg);
        }
    }

    @When("^User verifies (.*) image is displayed on vacation screen$")
    public void user_verifies_image_is_displayed_on_vacation_screen(String expectedImageSrc) throws IOException {
        String expected = configManager.getProperty("url") + expectedImageSrc;
        String actual = vacationPage.getImgSrcDestinationOfWeek();
        if (actual.equals(expected)) {
            stepPass(expected + " image src is displayed on vacation screen");
        } else {
            stepFail("Expected image src : " + expected + "Actual image src : " + actual);
        }
    }

}
