import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit-model';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  submitted:boolean = false;
  produit:Produit=new Produit();
  categories: Categorie[] = [];

  constructor(
    private categorieService:CategorieService ,
    private service:ProduitService,
    private router:Router,
    private toastr:ToastrService) { }
  ngOnInit() {
    // charger les categories dans select options
    this.categorieService.allCategorie().subscribe(
      res=>this.categories=res
    )
  }
  // ajouter produit
  onSubmit(){
    this.submitted=true;
    this.service.addProduit(this.produit).subscribe(
    data=>{
      console.log(data);
      this.toastr.success("Le produit est ajouté!");
    }
    ,
    error=>{
      console.log(error);
      this.toastr.error("Erreur");
    });
    setTimeout(() => {
      this.router.navigate(['/management']);
    }, 200);
  }

}
