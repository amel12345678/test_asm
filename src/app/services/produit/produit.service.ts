import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Headers , RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  public url="http://localhost:8000/blog1/public/api/";
  headers :Headers = new Headers();
  options : any;
  constructor(private http:HttpClient)
   { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('content-type','application/json');
      this.headers.append('X-Request-with','XMLHttpRequest');
      this.options= new RequestOptions({headers:this.headers});
   }
  allProduit()
  {
    return this.http.get<any>(this.url+"produits");
  }
  getProduit(id:number)
  {
    return this.http.get<any>(this.url+"produit/find/"+id);
  }

  addProduit(produit:Object){
  
    return this.http.post<any>(this.url+"produit/store",produit);
  }

  updateProduit(id:number,produit:Object){
  
    return this.http.put<any>(this.url+"produit/update/"+id,produit);
  }

  deleteProduit(id:any){
   
    return this.http.delete<any>(this.url+"produit/delete/"+id);
  }
}
