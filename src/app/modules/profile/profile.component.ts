import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Registration } from 'src/app/auth/registration/registration.model';
import { HomeworkService } from '../works/homework.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userProfiles: Registration[] = [];
  userEmail: string = '';
  userProfile: Registration;

  profilesSub: Subscription;

  activityPercentage: number = 0;
  homeworkPercentage: number = 0;
  testPercentage: number = 0;
  averagePercentage: number = 0;

  constructor(
    public authService: AuthService,
    public homeworkService: HomeworkService
  ) { }

  ngOnInit(): void {
    this.authService.user
    .subscribe(data => {
      if(!data) return;
      this.userEmail = data.email;
    });

    this.profilesSub = this.authService.fetchProfiles().subscribe();
    this.userProfiles = this.authService.getProfiles();
    this.userProfile = this.userProfiles.find(dataFromEmail => dataFromEmail.email === this.userEmail);

    // try {
    //   this.userProfile = this.userProfiles.find(dataFromEmail => dataFromEmail.email === this.userEmail);
    // } catch {
    //   if(!this.userProfile) console.error('data ar shemosula');
    // }
    if(this.homeworkService.answeredHomework.length === 0) return;
    this.homeworkPercentage = this.homeworkService.getAnsweredHomeworksPercentage();
    this.activityPercentage = +this.homeworkPercentage * 0.9;
    this.testPercentage = 60;
    this.averagePercentage = Math.round((this.homeworkPercentage + this.activityPercentage + this.testPercentage)/3);
  }

  ngOnDestroy() {
    this.profilesSub.unsubscribe();
  }

}
