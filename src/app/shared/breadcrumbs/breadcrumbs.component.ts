import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TimeScale } from 'chart.js';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public titulo!: string;
  public tituloSubs$!: Subscription;
  constructor(private router: Router) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(({ titulo }) => {
      // console.log(ev);
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events.pipe(
      filter((type) => type instanceof ActivationEnd),
      filter((type2) => (type2 as ActivationEnd).snapshot.firstChild === null),
      map((event) => (event as ActivationEnd).snapshot.data)
    );
  }
}
