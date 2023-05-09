import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { BlogOneComponent } from './blog-one/blog-one.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleServiceComponent } from './single-service/single-service.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResearchComponent } from './research/research.component';
import { SingleResearchComponent } from './single-research/single-research.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { PharmacydisplayComponent } from './pharmacydisplay/pharmacydisplay.component';
import { Order2Component } from './order2/order2.component';
import { AddorederComponent } from './addoreder/addoreder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminSetsComponent } from './admin-sets/admin-sets.component';
import { AdminSecurityComponent } from './admin-security/admin-security.component';
import { AddpharmacyComponent } from './addpharmacy/addpharmacy.component';
import { DisplaypharmacyadminComponent } from './displaypharmacyadmin/displaypharmacyadmin.component';
import { UpdatepharmacyadminComponent } from './updatepharmacyadmin/updatepharmacyadmin.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'single-team', component: SingleTeamComponent },
  { path: 'blogOne', component: BlogOneComponent },
  { path: 'blogTwo', component: BlogTwoComponent },
  { path: 'single-blog', component: SingleBlogComponent },
  { path: 'single-service', component: SingleServiceComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'single-product', component: SingleProductComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'single-research', component: SingleResearchComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: 'pharmacy', component: PharmacydisplayComponent },
  { path: 'order', component:  Order2Component },
  { path: 'createorder', component:  AddorederComponent },
  { path: 'updateorder/:idOrder', component:  UpdateorderComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/users', component: AdminUsersComponent },
  
  { path: 'admin/profile', component: AdminProfileComponent },
  { path: 'admin/settings', component: AdminSetsComponent },
  { path: 'admin/security', component: AdminSecurityComponent },
  
  { path: 'admin/addpharmacy', component: AddpharmacyComponent },
  { path: 'admin/Displaypharmacyadmin', component: DisplaypharmacyadminComponent },
  { path: 'admin/Updatepharmacyadmin', component: UpdatepharmacyadminComponent },
  { path: 'admin/Updatepharmacyadmin/:idLocation', component:  UpdatepharmacyadminComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  CartComponent,
  AboutUsComponent,
  LoginComponent,
  ContactComponent,
  SingleTeamComponent,
  BlogOneComponent,
  BlogTwoComponent,
  SingleBlogComponent,
  SingleServiceComponent,
  ShopComponent,
  CheckoutComponent
];