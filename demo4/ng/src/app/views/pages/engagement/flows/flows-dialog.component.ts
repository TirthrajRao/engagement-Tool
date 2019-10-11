import {Component, Inject} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-flowsdialog',
	templateUrl: 'flows-dialog.component.html',
  })
  export class FlowsDialog {

	constructor(
	  public dialogRef: MatDialogRef<FlowsDialog>,
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
