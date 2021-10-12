import { NgModule } from '@angular/core';

import { PlacesJourneyModule } from '@backbase/places-journey-ang';
import { PlacesConfigProvider } from '../app/config.providers';

@NgModule({
  imports: [PlacesJourneyModule.forRoot()],
  providers: [PlacesConfigProvider],
})
export class PlacesJourneyBundleModule {}
