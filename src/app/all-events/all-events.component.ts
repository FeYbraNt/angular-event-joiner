import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/service/event.service';

import Event from './../shared/models/event'

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {

  events: Event[] = []
  filterDays: any[] = []

  loading: boolean = true

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadEvents()
  }

  /**
   * Load events from service
   */
  loadEvents() {
    this.eventService.getAllEvents()
      .subscribe(list => {
        list[0].forEach((event) => {
          event["city"] = list[1].find((city) => city.id === +event.city) // change to City objects
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
          this.events.push(event)
        })
        this.events.sort((a, b) => {
          return b.startDate.getTime() - a.startDate.getTime()
        })
        this.filterDays.sort((a, b) => {
          return (a.day - b.day) && (a.month - b.month)
        })
        this.loading = false
      })
  }

  /**
   * Return events by days and months, we assume the day to filter an event is the day when starts
   * @param day
   * @param month 
   */
  getEventsByDayOfMonth(day, month): Event[] {
    return this.events.filter((event) => {
      return (event.startDate.getDate() == day) && (event.startDate.getMonth() == month)
    })
  }

}
