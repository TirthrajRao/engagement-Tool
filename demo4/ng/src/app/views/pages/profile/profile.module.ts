// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { ProfileComponent } from './profile.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule, MatFormFieldModule, MatInputModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProfileComponent
			},
		]),
	],
	providers: [],
	declarations: [
		ProfileComponent,
	]
})
export class ProfileModule {
}
