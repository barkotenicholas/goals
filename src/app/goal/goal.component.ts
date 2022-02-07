import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  alertService: AlertService;
  constructor(goalService:GoalService,alertService:AlertService) { 
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
  }

  toggleDetails(index:number){
    this.goals[index].istrue = !this.goals[index].istrue;
  }

  completeGoal(isComplete:boolean,i:number){
    if(isComplete){
      this.goals.splice(i,1)
    }
  }

  deleteGoal(isComplete:boolean,i:number){
    if(isComplete){

      let toDelete = confirm(`Are you sure you want to delete ${this.goals[i].name}?`)

      if (toDelete){
        this.goals.splice(i,1)
        this.alertService.alertMe("The goal has been deleted")
      } 

    }
  }
  addNewGoal(goal:Goal){

    let goallength = this.goals.length;
    goal.id = goallength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);

  }
}
