import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { ecsmop_routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(ecsmop_routes)]
};
