import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-add-engagement',
  templateUrl: './add-engagement.component.html',
  styleUrls: ['./add-engagement.component.scss']
})
export class AddEngagementComponent implements OnInit {

  userName;

  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.url.subscribe(param => {
      console.log("avi jaje0", param)
      if (this.router.url.includes('addEngagement')) {
      } 
    });
   }

  ngOnInit() {
    this.userName = [
      {

        username: "Ravi",
      }
    ]
  }
  manageTypes(){
    console.log("helllooooooooooo")
this.router.navigate(['/manageTypes'])
  }
}
