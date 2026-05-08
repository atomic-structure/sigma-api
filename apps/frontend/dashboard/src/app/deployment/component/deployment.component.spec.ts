import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { DeploymentComponent } from './deployment.component';
import { API_BASE_URL } from '../../app.config';

describe('DeploymentComponent', () => {
  let component: DeploymentComponent;
  let fixture: ComponentFixture<DeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentComponent],
            providers: [
              provideHttpClient(),
              provideHttpClientTesting(),
              { provide: API_BASE_URL, useValue: '/api' },
            ]
    }).compileComponents();

    const httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(DeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
