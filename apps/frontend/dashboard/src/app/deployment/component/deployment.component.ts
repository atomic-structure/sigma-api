import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentService } from '../service/deployment.service';

@Component({
  selector: 'app-deployment',
  imports: [CommonModule],
  templateUrl: './deployment.component.html',
  styleUrl: './deployment.component.css',
})
export class DeploymentComponent implements OnInit {
  deployments: any[] = [];

  constructor(private deploymentService: DeploymentService) {}

  ngOnInit(): void {
    this.loadDeployments();
  }

  loadDeployments(): void {
    this.deploymentService.getDeployments().subscribe(
      (data) => (this.deployments = data),
      (error) => console.error('Error loading deployments', error)
    );
  }
}
