import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import {Toast, ToastModule} from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ChartModule } from 'primeng/chart';


@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    ToastModule,
    DropdownModule,
    SliderModule,
    ChartModule,
  ],
  providers: [MessageService],
})
export class PrimeModule {}
