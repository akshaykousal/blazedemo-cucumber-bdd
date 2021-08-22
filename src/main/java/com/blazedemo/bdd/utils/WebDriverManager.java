package com.blazedemo.bdd.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;

public class WebDriverManager {

    final private String CHROME_DRIVER_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\drivers\\chromedriver.exe";
    final private String IE_DRIVER_PATH = System.getProperty("user.dir") + "\\src\\main\\resources\\drivers\\IEDriverServer.exe";

    private ConfigManager configManager = new ConfigManager();

    public WebDriver getDriver() throws IOException {

        String driverType = configManager.getProperty("browser");
        java.util.logging.Logger.getLogger("org.openqa.selenium").setLevel(Level.OFF);
        WebDriver driver;
        if (driverType.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_PATH);
            System.setProperty("webdriver.chrome.silentOutput", "true");
            driver = new ChromeDriver();
        } else if (driverType.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", IE_DRIVER_PATH);
            DesiredCapabilities dc = new DesiredCapabilities();
            dc.setCapability("ignoreProtectedModeSettings", true);
            dc.setCapability("silent", true);
            InternetExplorerOptions options = new InternetExplorerOptions(dc);
            driver = new InternetExplorerDriver(options);
        } else {
            throw new AssertionError("Webdriver '" + driverType + "' not configured in the Framework!!");
        }

        EventFiringWebDriver eventFiringWebDriver = new EventFiringWebDriver(driver);
        WebDriverListener driverListener = new WebDriverListener();
        eventFiringWebDriver.register(driverListener);
        eventFiringWebDriver.manage().window().maximize();
        eventFiringWebDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        return eventFiringWebDriver;
    }
}
