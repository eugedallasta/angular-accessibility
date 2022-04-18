import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ShopComponent } from './shop/shop.component';

// TODO: #4. Define unique page titles
const routes: Routes = [
  { path: 'shop', component: ShopComponent, data: { title: 'Our Shop - Dumplings' } },
  { path: 'about', component: AboutComponent, data: { title: 'Our Story - Dumplings' } },
  { path: 'locate', component: LocationComponent, data: { title: 'Find Us - Dumplings' } },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: '**', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
