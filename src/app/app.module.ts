import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerComponent } from './Components/timer/timer.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinService } from './services/bitcoin.service';

const routs: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs, { useHash: true }),
  ],
  declarations: [AppComponent, HelloComponent, TimerComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [BitcoinService],
})
export class AppModule {}
