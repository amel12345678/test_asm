import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers , RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  public url="http://localhost:8000/blog1/public/api/";
  headers :Headers = new Headers();
  options : any;
  constructor(private http:HttpClient) {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('content-type','application/json');
      this.headers.append('X-Request-with','XMLHttpRequest');
      this.options= new RequestOptions({headers:this.headers});
   }

  allCategorie(){
  
    return this.http.get<any>(this.url+"categories");
  }

  addCategorie(categorie:Object){
 
    return this.http.post<any>(this.url+"categorie/store",categorie);
  }

  getCategorie(id:any){
  
    return this.http.get<any>(this.url+"categorie/find/"+id);
  }

  updateCategorie(id:any,categorie:Object){
 
    return this.http.put<any>(this.url+"categorie/update/"+id,categorie);
  }

  deleteCategorie(id:any)
  { 
    return this.http.delete<any>(this.url+"categorie/delete/"+id);
  }

}
