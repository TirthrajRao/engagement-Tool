import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FlowsDialog } from './flows-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-flows',
  templateUrl: './flows.component.html',
  styleUrls: ['./flows.component.scss']
})
export class FlowsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDial(): void {
	const dialogRef = this.dialog.open(FlowsDialog, {
		width: '450px',
		height: '200px'
	});
	dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
	});
}
}
