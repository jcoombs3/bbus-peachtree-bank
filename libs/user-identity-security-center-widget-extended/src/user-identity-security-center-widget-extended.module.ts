import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { UserIdentitySecurityCenterWidgetExtendedComponent } from './user-identity-security-center-widget-extended.component';

@NgModule({
  declarations: [UserIdentitySecurityCenterWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { UserIdentitySecurityCenterWidgetExtendedComponent }
    })
  ]
})
export class UserIdentitySecurityCenterWidgetExtendedModule { }