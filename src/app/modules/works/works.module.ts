import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksComponent } from './works.component';
import { ActivityComponent } from './activity/activity.component';
import { HomeworkComponent } from './homework/homework.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { WorksRoutingModule } from './works-routing.module';
import { CurrentHomeworkComponent } from './homework/current-homework/current-homework.component';
import { CurrentTestComponent } from './online-test/current-test/current-test.component';
import { TasksComponent } from './homework/current-homework/tasks/tasks.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorksComponent,
    ActivityComponent,
    HomeworkComponent,
    OnlineTestComponent,
    CurrentHomeworkComponent,
    CurrentTestComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    WorksRoutingModule
  ]
})
export class WorksModule { }
