import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventComponent } from './shared/components/event/event.component';
import { ModalComponent } from './shared/components/modal/modal.component';

// Service
import { EventService } from './shared/service/event.service';
import { HttpClientModule } from '@angular/common/http';

// Angular Bootstrap (for modal)
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AllEventsComponent,
    MyEventsComponent,
    EventComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
