import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    DialogModule,
    CalendarModule,
    InputTextModule,
    TableModule
  ],
  providers: [],
})
export class PrimeModule {}
