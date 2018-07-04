import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DynComponent } from './dyn/dyn.component';
import { DynoneComponent } from './dyn/components/dynone/dynone.component';
import { DyntwoComponent } from './dyn/components/dyntwo/dyntwo.component';
import { NgModule } from '@angular/core';
import { ServiceOne } from './services/serviceone.service';
import { ServiceTwo } from './services/servicetwo.service';

@NgModule({
  declarations: [
    AppComponent,
    DynComponent,
    DynoneComponent,
    DyntwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceOne, ServiceTwo],
  bootstrap: [AppComponent]
})
export class AppModule { }
