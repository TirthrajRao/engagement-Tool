// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';

import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { MyPageComponent } from './my-page/my-page.component';
import { AddEngagementComponent } from './engagement/add-engagement/add-engagement.component';
import { TypesOfEngagementComponent } from './engagement/types-of-engagement/types-of-engagement.component';
import { FormsQuizzesComponent } from './engagement/forms-quizzes/forms-quizzes.component';
import {MatCardModule} from '@angular/material';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailListComponent } from './engagement/email-list/email-list.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NewVideoEmailComponent } from './engagement/new-video-email/new-video-email.component';



@NgModule({
	declarations: [MyPageComponent, AddEngagementComponent, TypesOfEngagementComponent, FormsQuizzesComponent, EmailListComponent,CustomHeaderComponent, NewVideoEmailComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		MatCardModule,
		NgbModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule
	],
	providers: []
})
export class PagesModule {
}
