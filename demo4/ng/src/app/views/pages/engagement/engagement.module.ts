// Angular
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Metronic
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { EngagementComponent } from './engagement.component';
import {
	MatCardModule, MatFormFieldModule,
	MatInputModule, MatButtonModule, MatMenuModule,
	MatSelectModule,
} from '@angular/material';
import { VideosComponent } from './videos/videos.component';
import { FormDialog } from './forms-quizzes/form-dialog.component';
import { Dialog } from './videos/dialog.component';
import { EmailDialog } from './emails/email-dialog.component';
import { FlowsDialog } from './flows/flows-dialog.component';
import { FormsQuizzesComponent } from './forms-quizzes/forms-quizzes.component';
import { CreateQuizzesComponent } from './create-quizzes/create-quizzes.component';
import { EmailsComponent } from './emails/emails.component';
import { FlowsComponent } from './flows/flows.component';
import {ManageTypesComponent} from './manage-types/manage-types.component';

@NgModule({
	declarations: [
		EngagementComponent,
		VideosComponent, Dialog, FormDialog, EmailDialog,
		FormsQuizzesComponent, FlowsDialog,
		CreateQuizzesComponent,
		EmailsComponent,
		FlowsComponent,
		ManageTypesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		PartialsModule,
		CoreModule,
		MatCardModule, MatFormFieldModule,
		MatSelectModule,
		MatInputModule, MatButtonModule, MatMenuModule,
		RouterModule.forChild([
			{
				path: '',
				component: EngagementComponent,
				children: [
					{
						path: 'videos',
						component: VideosComponent
					},
					{
						path: 'forms-quizzes',
						component: FormsQuizzesComponent
					},
					{
						path: 'create-quizzes',
						component: CreateQuizzesComponent
					},
					{
						path: 'emails',
						component: EmailsComponent
					},
					{
						path: 'flows',
						component: FlowsComponent
					},
					{
						path: 'manageTypes',
						component: ManageTypesComponent
					},
				]
			},
		]),
	],
	entryComponents: [
		Dialog, FormDialog, EmailDialog, FlowsDialog
	]
})
export class EngagementModule {
}
