import {Component, OnDestroy, OnInit} from "@angular/core";
import {NavigationStart, Router, RouterEvent} from "@angular/router";
import {Subject, takeUntil} from "rxjs";


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy{
  private _ngUnsubscribe$: Subject<boolean> = new Subject<boolean>();
  visible: boolean = true;

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._router.events.pipe(
      takeUntil(this._ngUnsubscribe$)
    ).subscribe({
      next: events => {
        if (events instanceof NavigationStart) {
          this.visible = !events.url.includes('/account-panel');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next(true);
    this._ngUnsubscribe$.complete();
  }
}
