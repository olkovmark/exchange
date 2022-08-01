export class ExchangeRate {


  constructor(
    public baseCurrency: string,
    public currency: string,
    public saleRateNB: number,
    public purchaseRateNB: number
  ) {
  }


}
