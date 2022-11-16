import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: String = 'Vanessa de Oliveira';
  zeros: String = '00';
  raNumber: number = 50832021044;

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.update();
  }

  getName(): String {
    return this.name;
  }

  getRaNumber(): number {
    return this.raNumber;
  }

  getZeros(): String {
    return this.zeros;
  }

  getCompleteNumber(): String {
    return 'RA: ' + this.getZeros().toString() + this.getRaNumber().toString();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
  }
}
