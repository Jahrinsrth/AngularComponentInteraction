import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  notificationSubject = new Subject<string>();
  constructor() { }

  setMessageForNotificationSubject(msg:string){
      this.notificationSubject.next(msg);
  }

}
