import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UserDetailsComponent implements OnInit {
  utilisateur: any;
  posts: any[] = [];

  constructor(private route: ActivatedRoute, private service: JsonPlaceholderService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getUserById(id).subscribe((data) => {
      this.utilisateur = data;
    });
    this.service.getPostsByUser(id).subscribe((data) => {
      this.posts = data;
    });
  }
}