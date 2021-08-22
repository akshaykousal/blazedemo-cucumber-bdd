package com.blazedemo.bdd.pages;

import com.blazedemo.bdd.utils.Common;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class PurchasePage {

    private WebDriver driver;

    public PurchasePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(tagName = "h2")
    private WebElement txtFlightReserved;

    @FindBy(id = "inputName")
    private WebElement txtName;

    @FindBy(id = "address")
    private WebElement txtAddress;

    @FindBy(id = "city")
    private WebElement txtCity;

    @FindBy(id = "state")
    private WebElement txtState;

    @FindBy(id = "zipCode")
    private WebElement txtZipCode;

    @FindBy(name = "cardType")
    private WebElement drpCardType;

    @FindBy(id = "creditCardNumber")
    private WebElement txtCreditCardNumber;

    @FindBy(id = "creditCardMonth")
    private WebElement txtCreditCardMonth;

    @FindBy(id = "creditCardYear")
    private WebElement txtCreditCardYear;

    @FindBy(id = "nameOnCard")
    private WebElement txtNameOnCard;

    @FindBy(id = "rememberMe")
    private WebElement chkRememberMe;

    @FindBy(xpath = "//input[@value='Purchase Flight']")
    private WebElement btnPurchaseFlight;

    public String getFlightReservedMsg() {
        return txtFlightReserved.getText();
    }

    public void purchaseFlight(String name, String address, String city, String state, String zip, String cardType, String cardNo, String cardMon, String cardYr, String nameOnCard, boolean remember) {
        Common.setText(txtName, name);
        Common.setText(txtAddress, address);
        Common.setText(txtCity, city);
        Common.setText(txtState, state);
        Common.setText(txtZipCode, zip);
        Common.selectDropDownByVisibleText(drpCardType, cardType);
        Common.setText(txtCreditCardNumber, cardNo);
        Common.setText(txtCreditCardMonth, cardMon);
        Common.setText(txtCreditCardYear, cardYr);
        Common.setText(txtNameOnCard, nameOnCard);
        if (remember) {
            Common.selectCheckBox(chkRememberMe);
        } else {
            Common.deSelectCheckBox(chkRememberMe);
        }
        btnPurchaseFlight.click();
    }

    public String getPageTitle() {
        return driver.getTitle();
    }
}
