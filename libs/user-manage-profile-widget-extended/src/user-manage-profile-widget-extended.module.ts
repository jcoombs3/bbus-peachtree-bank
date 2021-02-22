import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { UserManageProfileWidgetExtendedComponent } from './user-manage-profile-widget-extended.component';
import { UserManageProfileWidgetModule } from '@backbase/retail-ang/users';
@NgModule({
  declarations: [UserManageProfileWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { UserManageProfileWidgetExtendedComponent },
    }),
    UserManageProfileWidgetModule,
  ],
})
export class UserManageProfileWidgetExtendedModule {}
