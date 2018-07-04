import { Injector, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { DynComponent } from './dyn.component';
import { DynoneComponent } from './components/dynone/dynone.component';
import { DyntwoComponent } from './components/dyntwo/dyntwo.component';
import { ServiceOne } from '../services/serviceone.service';
import { ServiceTwo } from '../services/servicetwo.service';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    DynComponent,
    DynoneComponent,
    DyntwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceOne, ServiceTwo],
  entryComponents: [DynComponent]
})
export class DynModule {
  constructor(private injector: Injector) {
    const dyn = createCustomElement(DynComponent, {injector});
    customElements.define('app-dyn', dyn);
  }

  ngDoBootstrap() { }
}
