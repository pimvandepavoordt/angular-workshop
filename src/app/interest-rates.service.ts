import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class InterestRatesService {
  constructor(private http: HttpClient) {}

  public getInterestRates() {
    return this.http.get(
      "https://my-json-server.typicode.com/pimvandepavoordt/fake-server/simpleList"
    );
  }
}
