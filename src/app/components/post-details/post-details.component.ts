import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class PostDetailsComponent implements OnInit {
  post: any;
  commentaires: any[] = [];
  userMap: Map<number, string> = new Map();

  constructor(private route: ActivatedRoute, private service: JsonPlaceholderService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Récupérer le post par ID
    this.service.getPostById(id).subscribe((data) => {
      this.post = data;
    });

    // Récupérer les commentaires associés
    this.service.getCommentsByPost(id).subscribe((data) => {
      this.commentaires = data;
    });

    // Récupérer la map des utilisateurs (id -> nom)
    this.service.getUserMap().subscribe((map) => {
      this.userMap = map;
    });
  }

  // ✅ Fonction pour obtenir le nom de l'auteur
  getAuteurName(userId: number): string {
    return this.userMap.get(userId) || 'Auteur inconnu';
  }
}