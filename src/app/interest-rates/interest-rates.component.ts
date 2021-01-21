import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-interest-rates",
  templateUrl: "./interest-rates.component.html",
  styleUrls: ["./interest-rates.component.css"]
})
export class InterestRatesComponent implements OnInit {
  interestRatesList = [
    { rateClass: "NHG", rate: "1" },
    { rateClass: "t/m 67,50% MW", rate: "1.3" },
    { rateClass: "t/m 81% MW", rate: "1.5" },
    { rateClass: "meer dan 81%", rate: "1.8" }
  ];

  constructor() {}

  ngOnInit() {}
}
