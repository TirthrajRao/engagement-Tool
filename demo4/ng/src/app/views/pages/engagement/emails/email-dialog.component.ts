import {Component, Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-emaildialog',
	templateUrl: 'email-dialog.component.html',
	styleUrls: ['./emails.component.scss']
  })
  export class EmailDialog {

	constructor(
	  public dialogRef: MatDialogRef<EmailDialog>,
	  private router: Router
	) {}

	onNoClick(): void {
	  this.dialogRef.close();
	}
	public createNew(){
		this.dialogRef.close();
		this.router.navigateByUrl('');
	  }
  }
