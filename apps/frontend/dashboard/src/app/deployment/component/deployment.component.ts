import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentService } from '../service/deployment.service';

@Component({
  selector: 'app-deployment',
  imports: [CommonModule],
  templateUrl: './deployment.component.html',
  styleUrl: './deployment.component.scss',
})
export class DeploymentComponent implements OnInit {
  deployments: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private deploymentService: DeploymentService) {}

  ngOnInit(): void {
    this.loadDeployments();
  }

  loadDeployments(): void {
    this.loading = true;
    this.error = null;
    this.deploymentService.getDeployments().subscribe({
      next: (data) => {
        this.deployments = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load deployments';
        this.loading = false;
        console.error('Error loading deployments', err);
      },
    });
  }
}
