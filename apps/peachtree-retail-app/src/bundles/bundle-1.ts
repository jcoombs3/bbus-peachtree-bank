// apps/peachtree-retail-app/src/bundles/bundle-1.ts
import { NgModule } from '@angular/core';
import { UserContextMenuWidgetModule } from '@backbase/retail-ang/access-control';
import { NotificationsBadgeWidgetModule } from '@backbase/notifications-badge-widget-ang';
import { ContentWidgetModule } from '@backbase/universal-ang/content';

@NgModule({
  imports: [ContentWidgetModule, NotificationsBadgeWidgetModule, UserContextMenuWidgetModule],
})
export class Bundle1Module {}
