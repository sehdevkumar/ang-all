import { Component, OnInit } from "@angular/core";
import {BehaviorSubject, ReplaySubject} from "rxjs"
@Component({
  selector: 'app-rxjs-operators',
  template: ` <h1>Rxjs Subjects and Operators</h1> `,
  imports: [],
  standalone: true,
})
export class RxjsOperators implements OnInit {
  ngOnInit(): void {
    this.useBehaviorSubject();
    this.useReplaySubject()
  }

  useBehaviorSubject() {
    const s = new BehaviorSubject(0);
    s.next(1);

    s.next(2);
    s.subscribe((d) => {
      console.log(d, 'I am a BehaviorSubject');
    });
    s.next(3);
    s.next(4);
    s.next(5);
  }

  useReplaySubject() {
    const s = new ReplaySubject();
    s.next(1);
    s.next(2);
    s.next(3);
    s.subscribe((d) => {
      console.log(d, 'I am a ReplaySubject');
    });
    s.next(4);
    s.next(5);
  }



}