import {Component, OnInit} from '@angular/core';
import {ApiService} from "@services/api.service";
import {ExchangeRate} from "@models/ExchangeRate";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  exchangeRates: Array<ExchangeRate> = new Array<ExchangeRate>()
  exchangeSelectForm1: FormControl = new FormControl()
  exchangeSelectForm2: FormControl = new FormControl()
  exchangeInputForm1: FormControl = new FormControl()
  exchangeInputForm2: FormControl = new FormControl()


  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.GetChange().subscribe((data: any) => {
      this.exchangeRates = data.exchangeRate
      this.exchangeSelectForm1.setValue(23)
      this.exchangeInputForm1.setValue(100)
      this.exchangeSelectForm2.setValue(24)
    })

    this.exchangeSelectForm1.valueChanges.subscribe(() => {
      this.exchangeInput1();
    })

    this.exchangeSelectForm2.valueChanges.subscribe(() => {
      this.exchangeInput1();
    })

  }

  exchangeInput1() {
    if (this.exchangeSelectForm1.value && this.exchangeSelectForm2.value) {
      this.exchangeInputForm2.setValue((this.exchangeInputForm1.value / this.exchangeRates[this.exchangeSelectForm1.value].purchaseRateNB * this.exchangeRates[this.exchangeSelectForm2.value].purchaseRateNB).toFixed(3))


    }
  }

  exchangeInput2() {
    if (this.exchangeSelectForm1.value && this.exchangeSelectForm2.value) {
      this.exchangeInputForm1.setValue((this.exchangeInputForm2.value / this.exchangeRates[this.exchangeSelectForm2.value].purchaseRateNB * this.exchangeRates[this.exchangeSelectForm1.value].purchaseRateNB).toFixed(3))

    }
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode
    return   !(charCode == 107  || charCode == 109 || charCode == 187 || charCode == 189)
  }


}
