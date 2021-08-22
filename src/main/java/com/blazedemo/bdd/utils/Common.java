package com.blazedemo.bdd.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class Common {

    private static void waitABit(long milliSec) {
        try {
            Thread.sleep(milliSec);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void selectDropDownValue(WebElement eleDrpDown, String value) {
        Select city = new Select(eleDrpDown);
        boolean found = false;
        for (WebElement ele : city.getOptions()) {
            if (ele.getText().trim().contains(value)) {
                found = true;
                break;
            }
        }
        if (!found) throw new AssertionError(value + " not available in the dropdown");
        city.selectByValue(value);
        waitABit(1000);
    }

    public static void selectDropDownByVisibleText(WebElement eleDrpDown, String value) {
        Select city = new Select(eleDrpDown);
        boolean found = false;
        for (WebElement ele : city.getOptions()) {
            if (ele.getText().trim().contains(value)) {
                found = true;
                break;
            }
        }
        if (!found) throw new AssertionError(value + " not available in the dropdown");
        city.selectByVisibleText(value);
        waitABit(1000);
    }

    public static List<WebElement> tableRows(WebElement table) {
        return table.findElements(By.tagName("tr"));
    }

    public static List<WebElement> tableCols(WebElement tableRow) {
        List<WebElement> eleCols = tableRow.findElements(By.tagName("td"));
        if (eleCols.size() == 0) {
            eleCols = tableRow.findElements(By.tagName("th"));
        }
        return eleCols;
    }

    public static void setText(WebElement ele, String text) {
        ele.clear();
        ele.sendKeys(text);
        waitABit(1000);
    }

    public static void selectCheckBox(WebElement chkBox) {
        if (!chkBox.isSelected()) {
            chkBox.click();
            waitABit(1000);
        }
    }

    public static void deSelectCheckBox(WebElement chkBox) {
        if (chkBox.isSelected()) {
            chkBox.click();
            waitABit(1000);
        }
    }

}
