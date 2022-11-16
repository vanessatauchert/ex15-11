import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  disclaimer: string;
  bpi: {
    [key in 'USD' | 'BRL']: {
      rate_float: number;
      rate: string;
    };
  };
}

interface PriceUpdate {
  USD: number;
  BRL: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;

  updateList: Array<PriceUpdate> = [];
  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.currentPrice = data;
        this.updateList.push({
          USD: this.currentPrice.bpi.USD.rate_float,
          BRL: this.currentPrice.bpi.BRL.rate_float,
        });
      });
  }
}
