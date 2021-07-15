import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/management/management.component';
import { AjouterCategorieComponent } from './components/management/categorie/ajouter-categorie/ajouter-categorie.component';
import { UpdateCategorieComponent } from './components/management/categorie/update-categorie/update-categorie.component';
import { AjouterProduitComponent } from './components/management/produit/ajouter-produit/ajouter-produit.component';
import { UpdateProduitComponent } from './components/management/produit/update-produit/update-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitService } from './services/produit/produit.service';
import { CategorieService } from './services/categorie/categorie.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ManagementComponent,
    AjouterCategorieComponent,
    UpdateCategorieComponent,
    AjouterProduitComponent,
    UpdateProduitComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
    ChartsModule
  ],
  providers: [
    ProduitService,
    CategorieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
