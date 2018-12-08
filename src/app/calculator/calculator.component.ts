import { Component, OnInit } from '@angular/core';
import { Class } from '../class';
import { ap_grade } from '../gpa';
import { honors_grade } from '../gpa';
import { academic_grade } from '../gpa';
import { letter_range } from '../gpa';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numberOfclasses: number;
  classes: Class[] = [];
  gpa: number;
  gradeType: String;
  weightType: String;
  constructor() { }

  ngOnInit() {
    this.classes.push(new Class("", "",0));
    this.gradeType = "number";
    this.weightType = "weighted"
  }
  
  addClass(){
    if (this.gradeType == "number"){
      this.classes.push(new Class("", "",0));
    }
    else if (this.gradeType == "letter"){
      this.classes.push(new Class("", "","A"));
    }
    this.gpa = 0.0;
    console.log(this.gradeType)
  }

  changeType(type: string){
    if (this.gradeType == "number"){
      for (let i of this.classes) {
        if (i.grade !=null) {i.grade = letter_range[i.grade][0]}
      }
    }
    else if (this.gradeType == "letter"){
      for (let i of this.classes) {
        for (let key in letter_range) {
          if (i.grade !=null){
            if ((i.grade >= letter_range[key][0]) && (i.grade <= letter_range[key][1])){
              i.grade = key;
              break;
            }
          }
        }
      }
    }
  }

  changeWeighting(type: string){
    this.calculateGPA();
  }



  calculateGPA(){

    var grade = null;
    var sum = 0;
    for (let i of this.classes) {
      grade = i.grade;

      //changes the number to a letter
      if (this.gradeType == "number"){
        for (let key in letter_range) {
          if ((i.grade >= letter_range[key][0]) && (i.grade <= letter_range[key][1])){
            grade = key;
            break;
          }
        }
      }
      if (this.weightType === "unweighted"){
        console.log(academic_grade[grade]);
        sum = sum + academic_grade[grade];
      }
      else if (this.weightType === "weighted"){
        if (i.weight === "Academic"){
          console.log(academic_grade[grade]);
          sum = sum + academic_grade[grade];
        }
        else if (i.weight ==="Honors"){
          console.log(honors_grade[grade]);
          sum = sum + honors_grade[grade];
        }
        else if (i.weight === "AP"){
          console.log(ap_grade[grade]);
          sum = sum + ap_grade[grade];
        }
      }
      console.log(sum)

    }
    this.gpa = sum / this.classes.length
    console.log(this.gpa); 
    
  }

  deleteValue(i){
    this.classes.splice(i, 1);
  }
  

}
