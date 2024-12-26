import {
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects, storeReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { ErrorBoundaries } from './global-error-boundaries';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    importProvidersFrom([
      StoreModule.forRoot(),
      StoreModule.forFeature("store-reducer-featurekey",storeReducer),
      EffectsModule.forRoot([StoreEffects]),
    ]),
    {
      provide: ErrorHandler,
      useClass: ErrorBoundaries
    }
  ],
};
