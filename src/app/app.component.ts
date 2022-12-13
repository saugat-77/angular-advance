import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-basic';

  observable: Observable<number>;
  subscription: Subscription;
  secondSub: Subscription;

  ngOnInit(): void {
    this.observable = new Observable(subscriber => {
      subscriber.next(101);

      setTimeout(() => {
        subscriber.next(66);
        subscriber.error('an error occurred!!');
        subscriber.complete();
      }, 6000);
    });

    this.subscription = this.observable.pipe(
      map(v => v * 2),
      filter(v => v < 100)
    ).subscribe({
      next(val) {
        console.log(` val is ${val}`);
      },
      error(err) {
        console.log(`something went wrong: ${err}`);
      },
      complete() {
        console.log('completed');
      }
    });

    setTimeout(() => {
      this.secondSub = this.observable.pipe().subscribe({
        next(val) {
          console.log(`from second sub  val is ${val}`);
        },
        complete() {
          console.log('from second sub completed');
        },
        error(err) {
          console.log(`from second sub something went wrong: ${err}`);
        }
      });
    }, 2000)

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.secondSub.unsubscribe();
  }
}