import { NgModule } from '@angular/core';
import { PayBillsJourneyModule, PayBillsJourneyConfigurationToken } from '@backbase/pay-bills-journey-ang';

@NgModule({
  imports: [PayBillsJourneyModule.forRoot()],
  providers: [
    {
      provide: PayBillsJourneyConfigurationToken,
      useValue: {
        notificationDismissTime: 5000,
        accountNumberMasked: true,
        paymentDetailsTitle: 'Payment Details',
        paymentDefaultCurrency: 'USD',
        multipleBillsMode: true,
        deliveryDateMessage: 'Delivered in 5 working days',
      },
    },
  ],
})
export class PayBillsJourneyBundleModule {}
