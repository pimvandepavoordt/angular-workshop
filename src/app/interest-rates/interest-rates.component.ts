import { Component, OnInit } from "@angular/core";
import { InterestRatesService } from "../interest-rates.service";

@Component({
  selector: "app-interest-rates",
  templateUrl: "./interest-rates.component.html",
  styleUrls: ["./interest-rates.component.css"]
})
export class InterestRatesComponent implements OnInit {
  interestRatesList;
  filteredList;
  searchValue = "";

  constructor(private interestRatesService: InterestRatesService) {}

  ngOnInit() {
    this.getInterestRates("1_jaar");
  }

  getInterestRates(period) {
    this.interestRatesService
      .getInterestRates(period)
      .subscribe(interestRates => {
        this.interestRatesList = interestRates;
        this.filterList();
      });
  }

  changePeriod(event) {
    this.getInterestRates(event.target.value);
  }

  onSearchChange(event) {
    this.searchValue = event.target.value;
    this.filterList();
  }

  filterList() {
    this.filteredList = this.interestRatesList.filter(item =>
      item.Hypotheek.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
