import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class DeploymentService {
  constructor(
    private http: HttpClient,
    @Inject(API_BASE_URL) private baseUrl: string,
  ) {}

  getDeployments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/deployment`);
  }

  createDeployment(deployment: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/deployment`, deployment);
  }
}
