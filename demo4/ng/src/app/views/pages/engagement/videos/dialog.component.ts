import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface DialogData {
// 	animal: string;
// 	name: string;
//   }

@Component({
	selector: 'kt-dialog',
	templateUrl: 'dialog.component.html',
	styleUrls: ['./videos.component.scss']
  })
  export class Dialog {

	constructor(
	  public dialogRef: MatDialogRef<Dialog>,
	//   @Inject(MAT_DIALOG_DATA) public data: DialogData
	) {}

	onNoClick(): void {
	  this.dialogRef.close();
	}

  }
