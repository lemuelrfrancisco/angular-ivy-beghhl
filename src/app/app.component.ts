import { Component, OnInit, VERSION } from "@angular/core";
import { BehaviorSubject, interval, of } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  timer$: number = 30;
  state = true;
  currentTimer: number = this.timer$;
  interval;
  deg = 0;
  constructor() {}

  ngOnInit() {}

  action(state) {
    if (this.state) {
      if (this.currentTimer === 0) {
        this.reset();
      }
      let counter = this.currentTimer;

      this.interval = setInterval(() => {
        this.currentTimer = counter;
        let compute = -270 * ((this.timer$ - this.currentTimer) / this.timer$);
        this.deg = compute;
        counter--;

        if (counter < 0) {
          this.state = true;
          clearInterval(this.interval);
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
    }

    
    this.state = state;
  }

  reset() {
    this.state = true;
    this.deg = 0;
    this.currentTimer = 30;
    clearInterval(this.interval);
  }
}
