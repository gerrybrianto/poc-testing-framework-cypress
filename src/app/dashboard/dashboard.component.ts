import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [MatCardModule, RouterModule],
})
export class DashboardComponent {
  projects = [
    {
      id: 1,
      name: 'Project Alpha',
      status: 'In Progress',
      tasks: 5,
      team: ['Alice', 'Bob'],
    },
    {
      id: 2,
      name: 'Project Beta',
      status: 'Completed',
      tasks: 10,
      team: ['Charlie', 'Dana'],
    },
  ];
}
