import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { UserManageProfileWidgetExtendedComponent } from './user-manage-profile-widget-extended.component';

@NgModule({
  declarations: [UserManageProfileWidgetExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { UserManageProfileWidgetExtendedComponent }
    })
  ]
})
export class UserManageProfileWidgetExtendedModule { }