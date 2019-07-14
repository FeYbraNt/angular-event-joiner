import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Angular Modal Bootstrap component
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Event from './../../models/event'
import { EventEmitter } from 'events';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // the event itself
  @Input() event: Event;
  
  // Buttons variables
  whereAmI: string;
  changeText: boolean = false;

  constructor(private modalService: NgbModal, private route: Router) { }

  ngOnInit() { 
    this.whereAmI = this.route.url
  }

  openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  closeModal() { this.modalService.dismissAll() }

  join() {
    this.event.isFree = false;
    localStorage.setItem('event_' + this.event.id, JSON.stringify(this.event))
    this.modalService.dismissAll()
  }

  unjoin() {
    this.event.isFree = true;
    localStorage.removeItem('event_' + this.event.id)
    this.modalService.dismissAll()
    location.reload() // refresh page
  }

}
