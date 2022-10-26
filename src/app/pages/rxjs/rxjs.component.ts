import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, map, take, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  subscription!: Subscription;
  constructor() {
    // this.retornaObservable().pipe(
    //   retry(2)
    // )
    //   .subscribe(
    //   valor => console.log('Subs: ', valor),
    //   err => console.warn(err),
    //   () => console.log('Completado'));

    this.subscription = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      // take(10),
      map((value) => value + 1),
      filter(value => value % 2 === 0 ),
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i == 2) {
          // console.log('i = 2.... error');
          observer.error('Error');
        }
      }, 1000);
    });
  }
}
