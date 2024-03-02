import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  constructor(private appService: AppService) {}

  sendNotification() {
    this.appService.setMessageForNotificationSubject('new sms');
  }
}
