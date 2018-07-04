import { DynModule } from './app/dyn/dyn.module';
import { enableProdMode } from '@angular/core';
// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(DynModule)
  .catch(err => console.log(err));
