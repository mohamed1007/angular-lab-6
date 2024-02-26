import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductListParentComponent } from './components/product-list-parent/product-list-parent.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewProductComponent } from './components/admin/new-product/new-product.component';
import { OrderComponent } from './components/admin/order/order.component';
import { authGuard } from './components/Guard/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path:"", component:HomeComponent},
    { path:"home", component:HomeComponent},
    { path:"about", component:AboutComponent},
    { path:"products", component:ProductListParentComponent},
    { path:"products/:id", component:ProductDetailsComponent},
    { path:"contact", component:ContactComponent},
    { path:"cart", component:CartComponent},
    { path: 'movies', component: MoviesComponent, canActivate: [authGuard] },
    { path: 'movieDetails/:id',component: MovieDetailsComponent,canActivate: [authGuard],},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin',component: AdminComponent,children: [
        {path: 'newProduct',component: NewProductComponent,canActivate: [authGuard],},
        { path: 'order', component: OrderComponent, canActivate: [authGuard] },],
    },
    { path:"**", component:PageNotFoundComponent},
];
