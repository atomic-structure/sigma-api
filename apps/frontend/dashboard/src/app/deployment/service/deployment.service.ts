import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeploymentService {
  private apiUrl = 'http://localhost:3000/api/deployment';

  constructor(private http: HttpClient) {}

  getDeployments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createDeployment(deployment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, deployment);
  }
}
