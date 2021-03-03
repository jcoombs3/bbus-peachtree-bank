import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule as PtPocketsApiModule } from './pockets/api.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PtPocketsApiModule],
})
export class PtOpenapiModule {}
