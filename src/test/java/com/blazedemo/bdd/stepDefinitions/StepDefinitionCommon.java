package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.WelcomePage;
import com.blazedemo.bdd.utils.WebDriverManager;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.openqa.selenium.NoSuchSessionException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.concurrent.TimeUnit;

public class StepDefinitionCommon extends StepDefinition {

    @Before
    public void beforeEachScenario(Scenario scenario) {
        this.scenario = scenario;
        System.out.println("Execution started for Scenario : " + scenario.getName() + ". Start Time : " + dtf.format(LocalDateTime.now()) + "\n");
        logger.info("Execution started for Scenario : " + scenario.getName() + ". Start Time : " + dtf.format(LocalDateTime.now()) + "\n");
    }

    @After
    public void afterEachScenario() {
        System.out.println("Execution completed for Scenario : " + scenario.getName() + ". End Time : " + dtf.format(LocalDateTime.now()) + "\n");
        logger.info("Execution completed for Scenario : " + scenario.getName() + ". End Time : " + dtf.format(LocalDateTime.now()) + "\n");
        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot,"image/png");
        }
    }

    @Given("^User launches application$")
    public void user_launches_application() throws IOException {
        try {
            driver.get(configManager.getProperty("url"));
        } catch (NoSuchSessionException e) {
            driver = null;
            WebDriverManager driverManager = new WebDriverManager();
            driver = driverManager.getDriver();
            welcomePage = new WelcomePage(driver);
            driver.get(configManager.getProperty("url"));
            driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        }
    }

}
