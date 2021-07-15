<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|*/
Route::get('/produits', [ProduitController::class, 'index']);
Route::post('/produit/store', [ProduitController::class, 'store']);
Route::patch('/produit/update/{id}', [ProduitController::class, 'update']);
Route::delete('/produit/delete/{id}', [ProduitController::class, 'delete']);
Route::get('/produit/find/{id}', [ProduitController::class, 'findprod']);
Route::get('/categories', [CategorieController::class, 'index']);
Route::post('/categorie/store', [CategorieController::class, 'store']);
Route::patch('/categorie/update/{id}', [CategorieController::class, 'update']);
Route::delete('/categorie/delete/{id}', [CategorieController::class, 'delete']);
Route::get('/categorie/find/{id}', [CategorieController::class, 'find']);


/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


