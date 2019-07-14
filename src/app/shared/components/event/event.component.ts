import { Component, OnInit, Input } from '@angular/core';

import Event from '../../models/event'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Event

  constructor() { }

  ngOnInit() {  }

  getDurationHours(): number {
    let diff = new Date()
    diff.setHours((this.event.endDate.getHours() - this.event.startDate.getHours()))
    return diff.getHours()
  }

}
