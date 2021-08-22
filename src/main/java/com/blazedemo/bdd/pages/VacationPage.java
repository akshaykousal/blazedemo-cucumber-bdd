package com.blazedemo.bdd.pages;

import com.blazedemo.bdd.utils.Common;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class VacationPage {

    private WebDriver driver;

    public VacationPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//*[contains(text(),'Destination of the week')]")
    private WebElement captionDestinationOfWeek;

    @FindBy(xpath = "//*[contains(text(),'Destination of the week')]/img")
    private WebElement imgDestinationOfWeek;

    public String getPageTitle() {
        return driver.getTitle();
    }

    public String getDestinationOfWeekCaption() {
        return captionDestinationOfWeek.getText().trim();
    }

    public String getImgSrcDestinationOfWeek() {
        return imgDestinationOfWeek.getAttribute("src");
    }


}
