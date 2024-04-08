import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent, CounterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'pedro';
  user = "Usuario";
  data = [1,2,3,4,5,6];
}
