import { NgModule } from '@angular/core';
import {
  ManagePayeesJourneyModule,
  ManagePayeesJourneyConfiguration,
  ManagePayeesJourneyConfigurationToken,
} from '@backbase/manage-payees-journey-ang';

@NgModule({
  imports: [ManagePayeesJourneyModule.forRoot()],
  providers: [
    {
      provide: ManagePayeesJourneyConfigurationToken,
      useValue: <ManagePayeesJourneyConfiguration>{
        notificationDismissTime: 3000,
        multipleBillsMode: true,
      },
    },
  ],
})
export class ManagePayeesJourneyBundleModule {}
