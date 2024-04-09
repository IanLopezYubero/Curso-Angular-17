import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';
import { LayooutComponent } from './pages/layoout/layoout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    CalendarComponent,
    CounterComponent,
    TimerComponent,
    LayooutComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Pedro';
  user = undefined;
  data=[1,2,3,4,5,6]
}
