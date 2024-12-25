import path from 'node:path';
import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductsComponent } from './page/mainProduct/products/products.component';
import { ProductCreateComponent } from './page/mainProduct/product-create/product-create.component';
import { ProductUpdateComponent } from './page/mainProduct/product-update/product-update.component';
import { ProductDeleteComponent } from './page/mainProduct/product-delete/product-delete.component';
import { ProductDetailsComponent } from './page/mainProduct/product-details/product-details.component';
import { PageComponent } from './lessons/component-interaction/page/page.component';



/*********************************** setup Router - start ***********************************/


export const routes: Routes = [
    // Defaul page: domain/home
    {
        path:'',
        redirectTo:'Home',
        pathMatch:'full'
    },
    
    // lesson Page: lessons
    {path: 'lessons', component: PageComponent},

    // Home page:
    {path:'Home',component:HomeComponent},

    // About page:
    {path: 'About',component: AboutComponent},

    // Product page:
    {path: 'product', component: ProductsComponent,
        children: [
            // Product/Products/:id
            {path: 'products',component: ProductsComponent},

            // Product/Detail/:id
            {path: 'Detail/:id',component: ProductDetailsComponent},

            // Product/Create/:id
            {path: 'Create/:id',component: ProductCreateComponent},

            // Product/Update/:id
            {path: 'Update/:id',component: ProductUpdateComponent},

            // Product/Delete/:id
            {path: 'Delete/:id',component: ProductDeleteComponent}
        ]
    }
];

/*********************************** setup Router - end ***********************************/
