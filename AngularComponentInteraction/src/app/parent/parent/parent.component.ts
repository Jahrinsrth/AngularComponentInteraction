import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../../child/child/child.component';
import { AppService } from '../../services/app.service';
import { NotificationComponent } from '../../notification/notification/notification.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,NotificationComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit{
  msgToChild: string = '';
  msgFromChild: string = '';
  subjectMsg: string = ''; 

  constructor(private appService: AppService) {}

  
  ngOnInit(): void {
     //  Subject usage
    this.appService.notificationSubject.subscribe(msg => this.subjectMsg = msg);
  }

  sendMsgToChild() {
    this.msgToChild = 'message from parent to child';
  }

  getChildMsg(data: string) {
    this.msgFromChild = data;
  }

 



}
