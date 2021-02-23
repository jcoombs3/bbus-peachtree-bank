// apps/peachtree-retail-app/src/bundles/bundle-3.ts
import { NgModule } from '@angular/core';

import { UserIdentitySecurityCenterWidgetExtendedModule} from '@peachtree/user-identity-security-center-widget-extended';
import { UserManageProfileWidgetExtendedModule} from '@peachtree/user-manage-profile-widget-extended';

@NgModule({
  imports: [UserManageProfileWidgetExtendedModule, UserIdentitySecurityCenterWidgetExtendedModule],
})
export class Bundle3Module {}
