// Angular
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Metronic
import { PartialsModule } from "../../partials/partials.module";
import { CoreModule } from "../../../core/core.module";
import { EngagementReportsComponent } from './engagement-reports/engagement-reports.component';
import { MatCardModule } from '@angular/material';
import { ReportsComponent } from './reports.component';

@NgModule({
	declarations: [
		EngagementReportsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		PartialsModule,
		CoreModule,
		MatCardModule,
		RouterModule.forChild([
			{
				path: '',
				component: ReportsComponent,
				children: [
					{
						path: 'engagementReports',
						component: EngagementReportsComponent
					},
				]
			},
		]),
	]
})
export class ReportsModule {
}
