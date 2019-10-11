import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dialog } from './dialog.component';

@Component({
	selector: 'kt-videos',
	templateUrl: './videos.component.html',
	styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
	}
	openDial(): void {
		const dialogRef = this.dialog.open(Dialog, {
			width: '450px',
			height: '200px'
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}
