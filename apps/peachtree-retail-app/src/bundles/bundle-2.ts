// apps/peachtree-retail-app/src/bundles/bundle-2.ts
import { NgModule } from '@angular/core';

import { PocketsModule} from '@peachtree/pockets';
import { PocketsDetailsModule} from '@peachtree/pockets-details';
import { PocketsFormModule} from '@peachtree/pockets-form';

@NgModule({
  imports: [PocketsModule, PocketsDetailsModule, PocketsFormModule],
})
export class Bundle2Module {}
