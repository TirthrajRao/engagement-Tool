// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
import { ErrorPageComponent } from './views/theme/content/error-page/error-page.component';
import { AddEngagementComponent } from './views/pages/engagement/add-engagement/add-engagement.component';
import { TypesOfEngagementComponent } from './views/pages/engagement/types-of-engagement/types-of-engagement.component';
import {FormsQuizzesComponent} from './views/pages/engagement/forms-quizzes/forms-quizzes.component';
import {EmailListComponent} from './views/pages/engagement/email-list/email-list.component';
import {NewVideoEmailComponent} from './views/pages/engagement/new-video-email/new-video-email.component';
// Auth
import { AuthGuard } from './core/auth';
import { from } from 'rxjs';
const routes: Routes = [
	{path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule)},

	{
		path: '',
		component: BaseComponent,
		// canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'mail',
				loadChildren: () => import('./views/pages/apps/mail/mail.module').then(m => m.MailModule)
			},
			{
				path: 'ecommerce',
				loadChildren: () => import('./views/pages/apps/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
			},
			{
				path: 'ngbootstrap',
				loadChildren: () => import('./views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule)
			},
			{
				path: 'material',
				loadChildren: () => import('./views/pages/material/material.module').then(m => m.MaterialModule)
			},
			{
				path: 'user-management',
				loadChildren: () => import('./views/pages/user-management/user-management.module').then(m => m.UserManagementModule)
			},
			{
				path: 'wizard',
				loadChildren: () => import('./views/pages/wizard/wizard.module').then(m => m.WizardModule)
			},
			{
				path: 'pages',
				loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
			},
			{
				path: 'builder',
				loadChildren: () => import('./views/theme/content/builder/builder.module').then(m => m.BuilderModule)
			},
			{path: 'addEngagement', component:AddEngagementComponent},
			{path: 'manageTypes', component:TypesOfEngagementComponent},
			{path: 'form-Quizzez', component:FormsQuizzesComponent},
			{path: 'emailList', component:EmailListComponent},
			{path: 'newVideoEmail', component:NewVideoEmailComponent},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					'type': 'error-v6',
					'code': 403,
					'title': '403... Access forbidden',
					'desc': 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator'
				}
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'addEngagement', pathMatch: 'full'},
			// {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
		]
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
