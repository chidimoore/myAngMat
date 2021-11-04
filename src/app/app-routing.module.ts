import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxpayerFormComponent } from './manage-tax-payers/taxpayer-form/taxpayer-form.component';

import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
       
    },
    {
        path:'taxpayerresgistration',
        loadChildren: './manage-tax-payers/manage-tax-payers.module#ManageTaxPayersModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'customers',
        loadChildren: './customers/customers.module#CustomersModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'typography',
        loadChildren: './typography/typography.module#TypographyModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
