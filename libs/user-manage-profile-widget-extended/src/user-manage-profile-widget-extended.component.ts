import { Component } from '@angular/core';
import { ManageProfilePreferencesService } from '@backbase/user-common';
import { UserManageProfileService } from '@backbase/user-manage-profile-widget-ang';
import { ManageProfileService } from '@backbase/user-common';

@Component({
  selector: 'pt-user-manage-profile-widget-extended',
  templateUrl: 'user-manage-profile-widget-extended.component.html',
  providers: [ManageProfilePreferencesService, UserManageProfileService, ManageProfileService],
})
export class UserManageProfileWidgetExtendedComponent {}
