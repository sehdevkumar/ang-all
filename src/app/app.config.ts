import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpBackend, HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects, storeReducer } from './store';
import { StoreModule } from '@ngrx/store';
import { ErrorBoundaries } from './global-error-boundaries';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export function initializeApp(...args: any[]) {
  return () => new Promise<void>((resolve) => {
    console.log(`initializeApp:: inside promise`,args);
     resolve();
  });
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    importProvidersFrom(
      [
        StoreModule.forRoot(),
        StoreModule.forFeature('store-reducer-featurekey', storeReducer),
        EffectsModule.forRoot([StoreEffects])
      ]
    ),
    
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [HttpClient, HttpBackend],
      multi: true, // This is set to true because APP_INITIALIZER is a multi-provider token. This means that multiple values can be provided for this token, and they will all be executed in order. If we set multi to false, it would replace any existing providers for APP_INITIALIZER, which is not what we want. We want to add our own provider to the existing ones.
    },
    {
      provide: ErrorHandler,
      useClass: ErrorBoundaries,
    }, provideAnimationsAsync(),
  ],
};
