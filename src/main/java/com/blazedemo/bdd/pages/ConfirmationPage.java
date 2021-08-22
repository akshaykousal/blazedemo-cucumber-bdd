package com.blazedemo.bdd.pages;

import com.blazedemo.bdd.utils.Common;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ConfirmationPage {

    private WebDriver driver;

    public ConfirmationPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(tagName = "h1")
    private WebElement txtConfirmation;

    @FindBy(className = "table")
    private WebElement tableFlightConfirmation;

    public String getFlightConfirmationMsg() {
        return txtConfirmation.getText();
    }

    private String getTableFieldValue(String field){
        String fieldValue = null;
        List<WebElement> tableRows = Common.tableRows(tableFlightConfirmation);
        for (WebElement tr : tableRows) {
            List<WebElement> tableCols = Common.tableCols(tr);
            if (tableCols.get(0).getText().equals(field)) {
                fieldValue = tableCols.get(1).getText();
                break;
            }
        }
        return fieldValue;
    }

    public String getConfirmationId() {
        return getTableFieldValue("Id");
    }

    public String getConfirmationStatus() {
        return getTableFieldValue("Status");
    }

    public String getPageTitle() {
        return driver.getTitle();
    }
}
