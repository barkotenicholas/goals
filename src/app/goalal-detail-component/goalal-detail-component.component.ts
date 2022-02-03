import { Component, Input, OnInit ,Output ,EventEmitter} from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goalal-detail-component',
  templateUrl: './goalal-detail-component.component.html',
  styleUrls: ['./goalal-detail-component.component.css']
})
export class GoalalDetailComponentComponent implements OnInit {
  
  @Input()
  hero!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output()  complete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  goalComplete(isTrue:boolean){
    this.isComplete.emit(isTrue);
  }

  goalDelete(complete :boolean){
    this.complete.emit(complete);
  }

}
