import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { ap_grade } from '../gpa';
import { honors_grade } from '../gpa';
import { academic_grade } from '../gpa';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  constructor(private router: Router) { }
  dummy:String[] = [];
  ap: {};
  ngOnInit() {
    this.dummy.push("Hello");
    this.dummy.push("Chiraag");
    this.ap = ap_grade;
  }
  redirect() {
    this.router.navigate(['./calculator']);
  }
}
