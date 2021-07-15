<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use DB; 

class ProduitController extends Controller
{
   // AFFICHER TOUS LES PRODTUIS
   function index()
   {
    $produits = Product::all();
    return response($produits, 200);   
   }
   // CHERCHER PROD PAR ID
   function findprod($id) {
      $produit =  Product:: find($id);
      if($produit) {  
         return response([
            "res" => $produit ,
            "success" => true,    
         ], 200);
      } 
      return response([
         "success" => false,
         "message" => "categorie n est existe pas"
      ], 401);

   }
 // AJOUTER PRODUIT
   function store(Request $request) {
      $produit = Product::create([
         'nom' => $request->nom,
         'prixVente' => $request->prixVente,
         'prixAchat' => $request->prixAchat,
         'categorie_id' => $request->categorie_id
      ]);
      return response($produit, 200); 
   }
   // MODIFIER PRODUIT 
   function update(Request $request, $id) {
      $produit = Product::find($id);  
      $produit->update([
         'nom' => $request->nom,
         'prixVente' => $request->prixVente,
         'prixAchat' => $request->prixAchat,
         'categorie_id' => $request->categorie_id
      ]);
      return response([
         'success' => true,
         'message'=> 'mise ajour effectue avec succes'
      ], 200); 
   }  
   // SUPPRIMER PRODUIT
   function delete($id) {
      $produit =  Product:: find($id);
      if($produit) {
         $produit->delete();
         return response([
            "success" => true,
            "message" => "produit supprimer"
         ], 200);
      } 
      return response([
         "success" => false,
         "message" => "produit n est existe pas"
      ], 401);
   }
}
