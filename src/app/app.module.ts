import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LivreurComponent } from './livreur/livreur.component';
import { PanierComponent } from './panier/panier.component';
import { FactureComponent } from './facture/facture.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { CommandeComponent } from './commande/commande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UpdateLivraisonComponent } from './update-livraison/update-livraison.component';
import { UpdatePanierComponent } from './update-panier/update-panier.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';


import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProductCategoryComponent } from './edit-product-category/edit-product-category.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import { QRCodeModule } from "angular2-qrcode";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AddProgrammeComponent } from './add-programme/add-programme.component';

import { ListProgrammeComponent } from './list-programme/list-programme.component';
import { UpdateProgrammeComponent } from './update-programme/update-programme.component';
import { CommonModule, DatePipe } from '@angular/common';
import { Ng2SearchPipe} from 'ng2-search-filter';


import { AdminFormComponent } from './admin-form/admin-form.component';

import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

import { MembreListComponent } from './membre-list/membre-list.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';

import { ProfilComponent } from './profil/profil.component';
import { ProfilmembreComponent } from './profilmembre/profilmembre.component';
import { MembreupdateComponent } from './membreupdate/membreupdate.component';






import { EspeceCreateComponent } from './components/espece-create/espece-create.component';
import { EspeceEditComponent } from './components/espece-edit/espece-edit.component';
import { EspeceListComponent } from './components/espece-list/espece-list.component';
import { CategorieCreateComponent } from './components/categorie-create/categorie-create.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { EspeceClientComponent } from './components/espece-client/espece-client.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SideBarComponent,
    LivreurComponent,
    PanierComponent,
    FactureComponent,
    LivraisonComponent,
    CommandeComponent,
    UpdateLivraisonComponent,
    UpdatePanierComponent,
    UpdateCommandeComponent,
    TypeEvenementFormComponent,
    TypeEvenementListComponent,
    TypeEvenementDetailsComponent,
    EvenementListComponent,
    EvenementDetailsComponent,
    EvenementFormComponent,


    AddProductComponent,
    ProductComponent,
    ProductCategoryComponent,
    EditProductComponent,
    EditProductCategoryComponent,
    AddProductCategoryComponent,
    AjoutProduitComponent,
    ListProduitComponent,
    ModifProduitComponent,


    EspeceCreateComponent,
    EspeceEditComponent,
    EspeceListComponent,
    CategorieCreateComponent,
    CategorieEditComponent,
    CategorieListComponent,
    EspeceClientComponent,

    AddProgrammeComponent,
    ListProgrammeComponent,
    UpdateProgrammeComponent,

    AdminFormComponent,
    AdminListComponent,
    AdminDetailsComponent,
    MembreListComponent,
    LoginComponent,
    Login1Component,
    ProfilComponent,
    ProfilmembreComponent,
    MembreupdateComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    FormsModule,   
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    QRCodeModule,
    Ng2SearchPipeModule,
  
   

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent, MenuComponent, FooterComponent]
})
export class AppModule { }
