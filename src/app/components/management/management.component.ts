import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie-model';
import { Produit } from 'src/app/models/produit-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  categories: Categorie[] = [];
  produits: Produit[] = [];
  //@Input()categorie: any ;
 
  constructor(
    private serviceCategorie: CategorieService, 
    private serviceProduit: ProduitService,
    private router: Router,
    private toastr: ToastrService) { }
    
  ngOnInit() {
    // charger liste de produits 
    this.reloadData();
    const helper = new JwtHelperService();
  
    }
  reloadData() {
    // charger liste de categories 
    this.serviceCategorie.allCategorie().subscribe(
      (res) => this.categories = res
    );
     // charger liste de produits 
    this.serviceProduit.allProduit().subscribe(
      (res) => this.produits = res
    );
  }
// supprimer produit
  deleteProduit(produit: Produit) {
    const index = this.produits.indexOf(produit);
    this.produits.splice(index, 1);
    this.serviceProduit.deleteProduit(produit.id).subscribe(
      data => {
     //   console.log(data);
        this.toastr.success(produit.nom+' est supprimé!');

      }
      , 
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
  }
// supprimer categorie
  deleteCategorie(categorie: Categorie) {
    const index = this.categories.indexOf(categorie);
    this.categories.splice(index, 1);
      
    this.serviceCategorie.deleteCategorie(categorie.id).subscribe(
      data => {
       // console.log(data);
        this.toastr.success('La catégorie est supprimé!');
      },
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
  }
}
