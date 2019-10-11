import {Component, Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-formdialog',
	templateUrl: 'form-dialog.component.html',
	styleUrls: ['./forms-quizzes.component.scss']
  })
  export class FormDialog {

	constructor(
	  public dialogRef: MatDialogRef<FormDialog>,
	  private router: Router
	) {}

	onNoClick(): void {
	  this.dialogRef.close();
	}
	public createNew(){
		this.dialogRef.close();
		this.router.navigateByUrl('/engagement/create-quizzes');
	  }
  }
