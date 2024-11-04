import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule],
})
export class ProjectDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  projectId: number | null = null;
  tasks = [
    { id: 1, name: 'Task 1', description: 'First task', completed: false },
    { id: 2, name: 'Task 2', description: 'Second task', completed: true },
  ];

  ngOnInit(): void {
    this.projectId = Number(this.route.snapshot.paramMap.get('id'));
  }

  addTask() {
    // Logic to add a task
  }

  editTask(taskId: number) {
    // Logic to edit a task
  }

  deleteTask(taskId: number) {
    // Logic to delete a task
  }
}
