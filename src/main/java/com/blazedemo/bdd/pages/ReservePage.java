package com.blazedemo.bdd.pages;

import com.blazedemo.bdd.utils.Common;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ReservePage {

    private WebDriver driver;

    public ReservePage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(tagName = "h3")
    private WebElement labelFlights;

    @FindBy(className = "table")
    private WebElement tableFlights;

    public String getFlightMsg() {
        return labelFlights.getText();
    }

    public boolean chooseFlight(String flightNo) {
        boolean flightFound = false;
        List<WebElement> tableRows = Common.tableRows(tableFlights);
        for (WebElement tr : tableRows) {
            List<WebElement> tableCols = Common.tableCols(tr);
            if (tableCols.get(1).getText().equals(flightNo)) {
                tableCols.get(0).findElement(By.xpath(".//input[@value='Choose This Flight']")).click();
                flightFound = true;
                break;
            }
        }
        return flightFound;
    }

    public boolean chooseFlight(String airline, String departTime) {
        boolean flightFound = false;
        List<WebElement> tableRows = Common.tableRows(tableFlights);
        for (WebElement tr : tableRows) {
            List<WebElement> tableCols = Common.tableCols(tr);
            if (tableCols.get(2).getText().equals(airline) && tableCols.get(3).getText().equals(departTime)) {
                tableCols.get(0).findElement(By.xpath(".//input[@value='Choose This Flight']")).click();
                flightFound = true;
                break;
            }
        }
        return flightFound;
    }

    public String getPageTitle() {
        return driver.getTitle();
    }

}
