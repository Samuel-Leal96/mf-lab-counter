import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RemoteEntryRoutingModule } from './remote-entry-routing-module';
import { CounterComponent } from '../pages/counter/counter';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RemoteEntryRoutingModule,
    CounterComponent
  ],
  declarations: [
  ],
})
export class RemoteEntryModule { }
