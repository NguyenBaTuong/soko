import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CpHomeComponent } from './components/cp-home/cp-home.component';
import { CpBestSellerComponent } from './components/cp-best-seller/cp-best-seller.component';


const routes: Routes = [
    { path: '', component: CpHomeComponent },
    { path: 'best__seller', component: CpBestSellerComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
