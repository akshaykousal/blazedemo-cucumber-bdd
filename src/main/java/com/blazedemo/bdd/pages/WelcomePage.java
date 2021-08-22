package com.blazedemo.bdd.pages;

import com.blazedemo.bdd.utils.Common;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class WelcomePage {

    private WebDriver driver;

    public WelcomePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(tagName = "h1")
    private WebElement labelWelcome;

    @FindBy(name = "fromPort")
    private WebElement drpFromCity;

    @FindBy(name = "toPort")
    private WebElement drpToCity;

    @FindBy(xpath = "//input[@value='Find Flights']")
    private WebElement btnFindFlights;

    @FindBy(partialLinkText = "destination of the week")
    private WebElement linkDestinationOfWeek;

    public String getWelcomeMsg() {
        return labelWelcome.getText();
    }

    public void selectDepartureCity(String value) {
        Common.selectDropDownValue(drpFromCity, value);
    }

    public void selectDestinationCity(String value) {
        Common.selectDropDownValue(drpToCity, value);
    }

    public void clickFindFlightsButton() {
        btnFindFlights.click();
    }

    public void clickDestinationOfWeek() {
        linkDestinationOfWeek.click();
    }

    /*public ReservePage findFlights(String departureCity, String destinationCity) {
        selectDepartureCity(departureCity);
        selectDestinationCity(destinationCity);
        btnFindFlights.click();
        return new ReservePage(driver);
    }*/

    public void findFlights(String departureCity, String destinationCity) {
        selectDepartureCity(departureCity);
        selectDestinationCity(destinationCity);
        clickFindFlightsButton();
    }

}
