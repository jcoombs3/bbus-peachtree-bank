import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { UserIdentitySecurityCenterWidgetExtendedComponent } from './user-identity-security-center-widget-extended.component';
import { UserIdentitySecurityCenterWidgetModule } from '@backbase/retail-ang/users';
import { IconModule } from '@backbase/ui-ang';

@NgModule({
  declarations: [UserIdentitySecurityCenterWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { UserIdentitySecurityCenterWidgetExtendedComponent },
    }),
    UserIdentitySecurityCenterWidgetModule,
    IconModule,
  ],
})
export class UserIdentitySecurityCenterWidgetExtendedModule {}
