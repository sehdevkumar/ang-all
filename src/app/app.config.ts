import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects } from './store';
import { StoreModule } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    importProvidersFrom([
      StoreModule.forRoot(),
      EffectsModule.forRoot([StoreEffects]),
    ]),
  ],
};
