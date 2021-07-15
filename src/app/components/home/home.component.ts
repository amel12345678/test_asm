import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produits: any=[];
  categories: any=[];
  constructor(
    private produitService:ProduitService,
    private categorieService:CategorieService
  ) { }

  ngOnInit(): void {
   
   
  }
  
}
