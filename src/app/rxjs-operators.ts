import { Component, OnInit } from "@angular/core";
import {BehaviorSubject, concatMap, delay, fromEvent, mergeMap, Observable, of, ReplaySubject, Subject, switchMap, tap} from "rxjs"
@Component({
  selector: 'app-rxjs-operators',
  template: ` <h1>Rxjs Subjects and Operators</h1> `,
  imports: [],
  standalone: true,
})
export class RxjsOperators implements OnInit {
  ngOnInit(): void {
    // this.useBehaviorSubject();
    // this.useReplaySubject()
    // this.useSwitchOperator();
    // this.useConcatOperator()
    // this.useMergeOperator()
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

  useSwitchOperator() {
    const asyncOperation = (evt: any) => {
      return of(evt).pipe(delay(Math.random() * 2000));
    };

    fromEvent(document, 'click')
      .pipe(
        tap((d) => {
          console.log('Log before cancelled');
        }),
        switchMap((d) => asyncOperation(d))
      )
      .subscribe((evt) => {
        console.log('Only Success', evt);
      });
  }

  useConcatOperator() {
    const asyncOperation = (evt: any) => {
      return of(evt).pipe(delay(Math.random() * 5000));
    };

    fromEvent(document, 'click')
      .pipe(
        tap((d) => {
          console.log(
            'Log before',
            (d as PointerEvent).x,
            (d as PointerEvent).y
          );
        }),
        concatMap((d) => asyncOperation(d))
      )
      .subscribe((d) => {
        console.log(
          'After Async',
          (d as PointerEvent).x,
          (d as PointerEvent).y
        );
      });
  }

  useMergeOperator() {
    const asyncOperation = (evt: any) => {
      return of(evt).pipe(delay(Math.random() * 5000));
    };

    fromEvent(document, 'click')
      .pipe(
        tap((d) => {
          console.log(
            'Log before',
            (d as PointerEvent).x,
            (d as PointerEvent).y
          );
        }),
        mergeMap((d) => asyncOperation(d))
      )
      .subscribe((d) => {
        console.log(
          'After Async',
          (d as PointerEvent).x,
          (d as PointerEvent).y
        );
      });
  }
}