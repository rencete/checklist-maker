import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { NavigationModule } from './app/navigation/navigation.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NavigationModule)
  .catch(err => console.error(err));
