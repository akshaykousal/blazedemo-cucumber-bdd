$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("001_Welcome.feature");
formatter.feature({
  "line": 2,
  "name": "To verify the welcome page on the application",
  "description": "",
  "id": "to-verify-the-welcome-page-on-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "duration": 3247507600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 1935808400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify Welcome Message and Destination of the week details",
  "description": "",
  "id": "to-verify-the-welcome-page-on-the-application;verify-welcome-message-and-destination-of-the-week-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User verifies welcome message as Welcome to the Simple Travel Agency!",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on destination of the week link on welcome screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to vacation screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User verifies Destination of the week: Hawaii ! text is displayed on vacation screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verifies assets/vacation.jpg image is displayed on vacation screen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the Simple Travel Agency!",
      "offset": 33
    }
  ],
  "location": "WelcomePageStepDefinition.user_verifies_welcome_message_as(String)"
});
formatter.result({
  "duration": 101447200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "destination of the week",
      "offset": 15
    }
  ],
  "location": "WelcomePageStepDefinition.user_clicks_on_link_on_welcome_screen(String)"
});
formatter.result({
  "duration": 1640775100,
  "status": "passed"
});
formatter.match({
  "location": "VacationPageStepDefinition.user_is_navigated_to_vacation_screen()"
});
formatter.result({
  "duration": 9303900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Destination of the week: Hawaii !",
      "offset": 14
    }
  ],
  "location": "VacationPageStepDefinition.user_verifies_text_is_displayed_on_vacation_screen(String)"
});
formatter.result({
  "duration": 50076400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "assets/vacation.jpg",
      "offset": 14
    }
  ],
  "location": "VacationPageStepDefinition.user_verifies_image_is_displayed_on_vacation_screen(String)"
});
formatter.result({
  "duration": 56153900,
  "status": "passed"
});
formatter.after({
  "duration": 367500,
  "status": "passed"
});
formatter.before({
  "duration": 271000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 566233700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Find Flights for Departure and Destination cities",
  "description": "",
  "id": "to-verify-the-welcome-page-on-the-application;find-flights-for-departure-and-destination-cities",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User selects Boston as departure city",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User selects London as destination city",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks Find Flights button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User is navigated to reserve screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 13
    },
    {
      "val": "departure",
      "offset": 23
    }
  ],
  "location": "WelcomePageStepDefinition.user_selects_as_city(String,String)"
});
formatter.result({
  "duration": 1261868200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 13
    },
    {
      "val": "destination",
      "offset": 23
    }
  ],
  "location": "WelcomePageStepDefinition.user_selects_as_city(String,String)"
});
formatter.result({
  "duration": 1226746800,
  "status": "passed"
});
formatter.match({
  "location": "WelcomePageStepDefinition.user_clicks_find_flights_button()"
});
formatter.result({
  "duration": 879361000,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 12867800,
  "status": "passed"
});
formatter.after({
  "duration": 325400,
  "status": "passed"
});
formatter.uri("002_Reserve.feature");
formatter.feature({
  "line": 2,
  "name": "To verify the reserve page on the application",
  "description": "",
  "id": "to-verify-the-reserve-page-on-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "duration": 325000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 601977500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify Flight details from Departure to Destination cities",
  "description": "",
  "id": "to-verify-the-reserve-page-on-the-application;verify-flight-details-from-departure-to-destination-cities",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User finds flights from Boston city to London city",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is navigated to reserve screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User verifies Flights from Boston to London: text is displayed on reserve screen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 24
    },
    {
      "val": "London",
      "offset": 39
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3015252200,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 10507500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 27
    },
    {
      "val": "London",
      "offset": 37
    }
  ],
  "location": "ReservePageStepDefinition.user_verifies_flights_from_to_text_is_displayed_on_reserve_screen(String,String)"
});
formatter.result({
  "duration": 50377400,
  "status": "passed"
});
formatter.after({
  "duration": 271400,
  "status": "passed"
});
formatter.before({
  "duration": 267000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 754482500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify user can choose flight by Flight Number",
  "description": "",
  "id": "to-verify-the-reserve-page-on-the-application;verify-user-can-choose-flight-by-flight-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User finds flights from Portland city to Dublin city",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is navigated to reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User chooses flight number 234",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is navigated to purchase screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 24
    },
    {
      "val": "Dublin",
      "offset": 41
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3339096400,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 5699400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234",
      "offset": 27
    }
  ],
  "location": "ReservePageStepDefinition.user_chooses_flight_number(String)"
});
formatter.result({
  "duration": 10815735600,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 27506200,
  "status": "passed"
});
formatter.after({
  "duration": 277900,
  "status": "passed"
});
formatter.before({
  "duration": 370200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 516828500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify user can choose flight by Airline name and Depart Time",
  "description": "",
  "id": "to-verify-the-reserve-page-on-the-application;verify-user-can-choose-flight-by-airline-name-and-depart-time",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "User finds flights from Paris city to Cairo city",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User is navigated to reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User chooses flight having Airline and Depart time details as",
  "rows": [
    {
      "cells": [
        "Airline",
        "Departs"
      ],
      "line": 22
    },
    {
      "cells": [
        "Virgin America",
        "11:23 AM"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User is navigated to purchase screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 24
    },
    {
      "val": "Cairo",
      "offset": 38
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3095511800,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 8567000,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_chooses_flight_having_airline_and_depart_time_details_as(DataTable)"
});
formatter.result({
  "duration": 10855101900,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 12631600,
  "status": "passed"
});
formatter.after({
  "duration": 285800,
  "status": "passed"
});
formatter.uri("003_Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "To verify the Purchase page on the application",
  "description": "",
  "id": "to-verify-the-purchase-page-on-the-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "duration": 452800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 526819800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify Flight reservation message",
  "description": "",
  "id": "to-verify-the-purchase-page-on-the-application;verify-flight-reservation-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User finds flights from Portland city to Dublin city",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is navigated to reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses flight number 234",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is navigated to purchase screen",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verifies Your flight from TLV to SFO has been reserved. text on purchase screen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 24
    },
    {
      "val": "Dublin",
      "offset": 41
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3207093700,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 9644400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234",
      "offset": 27
    }
  ],
  "location": "ReservePageStepDefinition.user_chooses_flight_number(String)"
});
formatter.result({
  "duration": 10866962500,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 12496200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your flight from TLV to SFO has been reserved.",
      "offset": 14
    }
  ],
  "location": "PurchasePageStepDefinition.user_verifies_text_on_purchase_screen(String)"
});
formatter.result({
  "duration": 42114900,
  "status": "passed"
});
formatter.after({
  "duration": 287700,
  "status": "passed"
});
formatter.before({
  "duration": 295600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 563897700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user can Enter details and Purchase Flight",
  "description": "",
  "id": "to-verify-the-purchase-page-on-the-application;verify-user-can-enter-details-and-purchase-flight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User finds flights from Portland city to Dublin city",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User is navigated to reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User chooses flight number 234",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User is navigated to purchase screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Purchase flight by entering details as",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "State",
        "Zip Code",
        "Card Type",
        "Credit Card Number",
        "Month",
        "Year",
        "Name on Card",
        "Remember me"
      ],
      "line": 20
    },
    {
      "cells": [
        "Blaze Demo",
        "Street 123",
        "Pune",
        "Maharashtra",
        "444444",
        "American Express",
        "1234567891234567",
        "12",
        "2021",
        "ABC XYZ",
        "True"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User is navigated to confirmation screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 24
    },
    {
      "val": "Dublin",
      "offset": 41
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3203307300,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 12727300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234",
      "offset": 27
    }
  ],
  "location": "ReservePageStepDefinition.user_chooses_flight_number(String)"
});
formatter.result({
  "duration": 10869926900,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 14610800,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_purchase_flight_by_entering_details_as(DataTable)"
});
formatter.result({
  "duration": 13487231600,
  "status": "passed"
});
formatter.match({
  "location": "ConfirmationPageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 13142800,
  "status": "passed"
});
formatter.after({
  "duration": 212200,
  "status": "passed"
});
formatter.uri("004_End_To_End.feature");
formatter.feature({
  "line": 2,
  "name": "To Test End to End Flight Booking functionality",
  "description": "",
  "id": "to-test-end-to-end-flight-booking-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 345900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 509748700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user can Enter details and Purchase Flight",
  "description": "",
  "id": "to-test-end-to-end-flight-booking-functionality;verify-user-can-enter-details-and-purchase-flight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User finds flights from Portland city to Dublin city",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User is navigated to reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User verifies Flights from Portland to Dublin: text is displayed on reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User chooses flight number 234",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User is navigated to purchase screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User Purchase flight by entering details as",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "State",
        "Zip Code",
        "Card Type",
        "Credit Card Number",
        "Month",
        "Year",
        "Name on Card",
        "Remember me"
      ],
      "line": 14
    },
    {
      "cells": [
        "Blaze Demo",
        "Street 123",
        "Pune",
        "Maharashtra",
        "444444",
        "American Express",
        "1234567891234567",
        "12",
        "2021",
        "ABC XYZ",
        "True"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is navigated to confirmation screen",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User verifies Thank you for your purchase today! text on confirmation screen",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User verifies 13 digit Id is generated successfully on confirmation screen",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User verifies Status as PendingCapture on confirmation screen",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 24
    },
    {
      "val": "Dublin",
      "offset": 41
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3108643300,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 8944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 27
    },
    {
      "val": "Dublin",
      "offset": 39
    }
  ],
  "location": "ReservePageStepDefinition.user_verifies_flights_from_to_text_is_displayed_on_reserve_screen(String,String)"
});
formatter.result({
  "duration": 52311700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234",
      "offset": 27
    }
  ],
  "location": "ReservePageStepDefinition.user_chooses_flight_number(String)"
});
formatter.result({
  "duration": 10770578800,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 10804800,
  "status": "passed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_purchase_flight_by_entering_details_as(DataTable)"
});
formatter.result({
  "duration": 13431139600,
  "status": "passed"
});
formatter.match({
  "location": "ConfirmationPageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 11427400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your purchase today!",
      "offset": 14
    }
  ],
  "location": "ConfirmationPageStepDefinition.user_verifies_text_on_confirmation_screen(String)"
});
formatter.result({
  "duration": 47115700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13",
      "offset": 14
    }
  ],
  "location": "ConfirmationPageStepDefinition.user_verifies_id_is_generated_successfully_on_confirmation_screen(String)"
});
formatter.result({
  "duration": 10126604500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PendingCapture",
      "offset": 24
    }
  ],
  "location": "ConfirmationPageStepDefinition.user_verifies_status_on_confirmation_screen(String)"
});
formatter.result({
  "duration": 10209316600,
  "status": "passed"
});
formatter.after({
  "duration": 220400,
  "status": "passed"
});
formatter.uri("005_Negative_Failing_Scenarios.feature");
formatter.feature({
  "line": 2,
  "name": "Test should fail for incorrect user expectations",
  "description": "",
  "id": "test-should-fail-for-incorrect-user-expectations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 221500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 487465200,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify Welcome Message",
  "description": "",
  "id": "test-should-fail-for-incorrect-user-expectations;verify-welcome-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User verifies welcome message as INCORRECT WELCOME MESSAGE!",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on destination of the week link on welcome screen",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is navigated to vacation screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "INCORRECT WELCOME MESSAGE!",
      "offset": 33
    }
  ],
  "location": "WelcomePageStepDefinition.user_verifies_welcome_message_as(String)"
});
formatter.result({
  "duration": 53603600,
  "error_message": "java.lang.AssertionError: Expected Message : INCORRECT WELCOME MESSAGE!Actual Message : Welcome to the Simple Travel Agency!\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat com.blazedemo.bdd.stepDefinitions.StepDefinition.stepFail(StepDefinition.java:54)\r\n\tat com.blazedemo.bdd.stepDefinitions.WelcomePageStepDefinition.user_verifies_welcome_message_as(WelcomePageStepDefinition.java:22)\r\n\tat ✽.When User verifies welcome message as INCORRECT WELCOME MESSAGE!(005_Negative_Failing_Scenarios.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "destination of the week",
      "offset": 15
    }
  ],
  "location": "WelcomePageStepDefinition.user_clicks_on_link_on_welcome_screen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VacationPageStepDefinition.user_is_navigated_to_vacation_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 186664900,
  "status": "passed"
});
formatter.before({
  "duration": 227400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User launches application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionCommon.user_launches_application()"
});
formatter.result({
  "duration": 437694500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Choose Flight",
  "description": "",
  "id": "test-should-fail-for-incorrect-user-expectations;choose-flight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User finds flights from Portland city to Dublin city",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is navigated to reserve screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User chooses flight number INCORRECT NUMBER",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User is navigated to purchase screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 24
    },
    {
      "val": "Dublin",
      "offset": 41
    }
  ],
  "location": "WelcomePageStepDefinition.user_finds_flights_from_departure_city_to_destination_city(String,String)"
});
formatter.result({
  "duration": 3145187600,
  "status": "passed"
});
formatter.match({
  "location": "ReservePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "duration": 8868200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INCORRECT NUMBER",
      "offset": 27
    }
  ],
  "location": "ReservePageStepDefinition.user_chooses_flight_number(String)"
});
formatter.result({
  "duration": 10233984700,
  "error_message": "java.lang.AssertionError: Flight with Flight number as INCORRECT NUMBER NOT found on the screen\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat com.blazedemo.bdd.stepDefinitions.StepDefinition.stepFail(StepDefinition.java:54)\r\n\tat com.blazedemo.bdd.stepDefinitions.ReservePageStepDefinition.user_chooses_flight_number(ReservePageStepDefinition.java:41)\r\n\tat ✽.And User chooses flight number INCORRECT NUMBER(005_Negative_Failing_Scenarios.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PurchasePageStepDefinition.user_is_navigated_to_reserve_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 167401900,
  "status": "passed"
});
});