import { Component, OnInit } from '@angular/core';

import Event from './../shared/models/event'

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  myEvents: Event[] = []
  filterDays: any[] = []

  constructor() { }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.loadEvents()
    }
  }

  /**
   * Load events from Local Storage (where we store user's events)
   */
  loadEvents() {
    let event: Event;
    for (let i = 0; i < localStorage.length; i++) {
      event = JSON.parse(localStorage.getItem(localStorage.key(i)))
      event["startDate"] = new Date(event.startDate)                  // change to Date objects
      event["endDate"] = new Date(event.endDate)                      // change to Date objects
      this.filterDays.push(Object.assign({}, 
        {
          weekday: event.startDate.toLocaleString('en', { weekday: 'long' }), 
          day: event.startDate.getDate(),
          month: event.startDate.getMonth(),
          monthName: event.startDate.toLocaleString('en', { month: 'long' })
        }
      ))
      this.myEvents.push(event)
    }
  }

    /**
   * Return events by days and months, we assume the day to filter an event is the day when starts
   * @param day
   * @param month 
   */
  getEventsByDayOfMonth(day, month): Event[] {
    return this.myEvents.filter((event) => {
      return (event.startDate.getDate() == day) && (event.startDate.getMonth() == month)
    })
  }

}
