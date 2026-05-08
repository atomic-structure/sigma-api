import { ApplicationConfig, provideZoneChangeDetection, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app.routes';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    { provide: API_BASE_URL, useValue: '/api' },
  ],
};
