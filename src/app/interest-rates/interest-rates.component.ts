import { Component, OnInit } from "@angular/core";
import { InterestRatesService } from "../interest-rates.service";

@Component({
  selector: "app-interest-rates",
  templateUrl: "./interest-rates.component.html",
  styleUrls: ["./interest-rates.component.css"]
})
export class InterestRatesComponent implements OnInit {
  interestRatesList;

  constructor(private interestRatesService: InterestRatesService) {}

  ngOnInit() {
    this.interestRatesService
      .getInterestRates()
      .subscribe(interestRates => (this.interestRatesList = interestRates));
  }
}
