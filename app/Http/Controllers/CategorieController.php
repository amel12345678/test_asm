<?php

namespace App\Http\Controllers;
use App\Models\Categorie;
use Illuminate\Http\Request;
use DB; 

class CategorieController extends Controller
{ 
   //AFFICHER TOUS LES CATEGORIES
    function index()
    {
     $categories = Categorie::all();
     return response($categories, 200); 
    }
  // AJOUTER CATEGORIE
    function store(Request $request) {
       $categorie = Categorie::create([
          'nom' => $request->nom
       ]);
       return response($categorie, 200); 
    }
    //MODIFIER CATEGORIE
    function update(Request $request, $id) {
       
       $categorie = Categorie::find($id);
       
       $categorie->update([
          'nom' => $request->nom
         
       ]);
       return response([
          'success' => true,
          'message'=> 'mise ajour effectué avec succes'
       ], 200); 
    }
 
    
    // SUPPRIMER CATEGORIE
    function delete($id) {
       $categorie =  Categorie:: find($id);
       if($categorie) {
          $categorie->delete();
          return response([
             "success" => true,
             "message" => "categorie supprimé"
          ], 200);
       } 
 
       return response([
          "success" => false,
          "message" => "categorie n est existe pas"
       ], 401);
  
 
    }
    // CHERCHER CATEGORIE PAR ID
    function find($id) {
      $categorie =  Categorie:: find($id);
      if($categorie) {
         
         return response([
            "res" => $categorie ,
            "success" => true,    
         ], 200);
      } 

      return response([
         "success" => false,
         "message" => "categorie n est existe pas"
      ], 401);
 

   }
}
