import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  userMap: Map<number, string> = new Map();

  constructor(private service: JsonPlaceholderService) {}

  ngOnInit(): void {
    // Récupérer la map des utilisateurs pour avoir les noms
    this.service.getUserMap().subscribe((map) => {
      this.userMap = map;
    });

    // Charger les posts
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // Obtenir le nom de l'auteur à partir de l'ID
  getAuteurName(userId: number): string {
    return this.userMap.get(userId) || 'Auteur inconnu';
  }
}