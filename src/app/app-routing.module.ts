import { NgModule } from '@angular/core';

import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';
import { FactureComponent } from './facture/facture.component';
import { UpdateLivraisonComponent } from './update-livraison/update-livraison.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';

import { TypeEvenementFormComponent } from './type-evenement-form/type-evenement-form.component';
import { TypeEvenementListComponent } from './type-evenement-list/type-evenement-list.component';
import { TypeEvenementDetailsComponent } from './type-evenement-details/type-evenement-details.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { EvenementFormComponent } from './evenement-form/evenement-form.component';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';

import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { EditProductCategoryComponent } from './edit-product-category/edit-product-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';


import { EspeceCreateComponent } from './components/espece-create/espece-create.component';
import { EspeceListComponent } from './components/espece-list/espece-list.component';
import { EspeceClientComponent } from './components/espece-client/espece-client.component';

import { EspeceEditComponent } from './components/espece-edit/espece-edit.component';

import { CategorieCreateComponent } from './components/categorie-create/categorie-create.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { CategorieEditComponent } from './components/categorie-edit/categorie-edit.component';

import { AddProgrammeComponent } from './add-programme/add-programme.component';
import { ListProgrammeComponent } from './list-programme/list-programme.component';
import { UpdateProgrammeComponent } from './update-programme/update-programme.component';


import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilmembreComponent } from './profilmembre/profilmembre.component';
import { MembreupdateComponent } from './membreupdate/membreupdate.component';



const routes: Routes = [
  {path: 'panier', component: PanierComponent},
  {path: 'commande', component: CommandeComponent},
  {path: 'livraison', component: LivraisonComponent},
  {path: 'livreur', component: LivreurComponent},
  {path: 'facture', component: FactureComponent},
  {path: 'livraison/updateliv', component: UpdateLivraisonComponent},
  {path: 'commande/updatecmd', component: UpdateCommandeComponent},

  {path: 'typeEvenement', component: TypeEvenementListComponent},
  {path: 'typeEvenement/create', component: TypeEvenementFormComponent},
  {path: 'typeEvenement/show', component: TypeEvenementDetailsComponent},
  {path: 'evenement', component: EvenementListComponent},
  {path: 'evenement/create', component: EvenementFormComponent},
  {path: 'evenement/show', component: EvenementDetailsComponent},

  {    path :'', component:AppComponent },
  {    path :'product', component:ProductComponent },
  {    path :'newProduct', component:AddProductComponent  },
  {    path :'editProduct/:id', component:EditProductComponent  },
  {    path :'newProductCategory', component:AddProductCategoryComponent  },
  {    path :'productCategory', component:ProductCategoryComponent  },
  {    path :'editProductCategory/:id', component:EditProductCategoryComponent  },
  {    path :'ajoutProduit', component:AjoutProduitComponent  },
  {    path :'listProduit', component:ListProduitComponent  },
  {    path :'modifProduit/:id', component:ModifProduitComponent  },

  { path: '', pathMatch: 'full', redirectTo: 'create-espece' },
  { path: 'create-espece', component: EspeceCreateComponent },
  { path: 'edit-espece/:id', component: EspeceEditComponent },
  { path: 'especes-list', component: EspeceListComponent },
  { path: 'especes-list-client', component: EspeceClientComponent },

  { path: '', pathMatch: 'full', redirectTo: 'create-categorie' },
  { path: 'create-categorie', component: CategorieCreateComponent },
  { path: 'edit-categorie/:id', component: CategorieEditComponent },
  { path: 'categories-list', component: CategorieListComponent },


  { path: 'programme/add', component: AddProgrammeComponent },
  { path: 'programme', component: ListProgrammeComponent },
  { path: 'programme/update', component: UpdateProgrammeComponent },

  {path: 'login', component: LoginComponent},
  {path: 'login1', component: Login1Component},
  {path: 'admin', component: AdminListComponent},
  {path: 'admin/create', component: AdminFormComponent},
  {path: 'admin/update', component: AdminDetailsComponent},

  {path: 'profil', component: ProfilComponent},
  {path: 'membre', component: MembreListComponent},
  {path: 'membre/update', component: MembreupdateComponent},
  {path: 'membre/profilmembre', component: ProfilmembreComponent},
  
];


const config: ExtraOptions = {
  useHash: true,
  preloadingStrategy: PreloadAllModules // when I added this line its working
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
