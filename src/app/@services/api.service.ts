import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {formatDate} from "@angular/common";

type BaseHttpHeaders = HttpHeaders | {
  [header: string]: string | string[];
};
@Injectable({providedIn: 'root'})
export class ApiService{


  constructor(
    private http: HttpClient,
  ) {

  }





GetChange(){
  return this.get<string>(`/p24api/exchange_rates?json&date=${formatDate(Date.now(), 'dd.MM.YYYY', 'en')}`);
}



get = <T>(action: string, headers?: BaseHttpHeaders): Observable<T> => {
  return this.http.get<T>(action, {headers})
}

}
