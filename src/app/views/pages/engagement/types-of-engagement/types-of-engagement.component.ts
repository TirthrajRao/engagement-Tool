import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kt-types-of-engagement',
  templateUrl: './types-of-engagement.component.html',
  styleUrls: ['./types-of-engagement.component.scss']
})
export class TypesOfEngagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  formQuizze() {
    this.router.navigate(['/form-Quizzez'])
  }
  emailList(){
    this.router.navigate(['/emailList'])
  }
}
