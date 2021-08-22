package com.blazedemo.bdd.stepDefinitions;

import com.blazedemo.bdd.pages.*;
import com.blazedemo.bdd.utils.ConfigManager;
import com.blazedemo.bdd.utils.WebDriverManager;
import cucumber.api.Scenario;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.time.format.DateTimeFormatter;

public class StepDefinition {

    static WebDriver driver;
    Scenario scenario;
    PurchasePage purchasePage;
    ReservePage reservePage;
    WelcomePage welcomePage;
    VacationPage vacationPage;
    ConfirmationPage confirmationPage;
    ConfigManager configManager = new ConfigManager();

    StepDefinition() {
        WebDriverManager driverManager = new WebDriverManager();
        try {
            if (StepDefinition.driver == null) {
                StepDefinition.driver = driverManager.getDriver();
            }
        } catch (IOException e) {
            e.printStackTrace();
            Assert.fail("Fail to load webdriver");
        }
    }

    static Logger logger;

    static {
        logger = Logger.getLogger(StepDefinition.class);
        PropertyConfigurator.configure("log4j.properties");
    }

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");

    void stepPass(String message) {
        System.out.println("PASS : " + message + "\n");
        Assert.assertTrue(message, true);
    }

    void stepFail(String message) {
        System.out.println("FAIL : " + message + "\n");
        Assert.fail(message);
    }
}
