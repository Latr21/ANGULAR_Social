import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UserListComponent implements OnInit {
  utilisateurs: any[] = [];

  constructor(private service: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.utilisateurs = data;
    });
  }
}