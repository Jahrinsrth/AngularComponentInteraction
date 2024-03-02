import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { ParentComponent } from '../../parent/parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

 @Input() parentToChildmsg : string = "";

 @Output() childOutMsgForParent  = new EventEmitter<string>();

 sendMsgToParent(){
  this.childOutMsgForParent.emit("msg from child to parent");
 }

  

}

