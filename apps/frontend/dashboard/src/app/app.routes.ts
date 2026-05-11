import { Route } from '@angular/router';
import { DeploymentComponent } from './deployment/component/deployment.component';

export const appRoutes: Route[] = [
  { path: 'deployment', component: DeploymentComponent },
  { path: '', redirectTo: '/deployment', pathMatch: 'full' },
];
