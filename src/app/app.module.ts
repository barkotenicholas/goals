import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalalDetailComponentComponent } from './goalal-detail-component/goalal-detail-component.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalalDetailComponentComponent,
    StrikethroughDirective,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
