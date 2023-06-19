import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LoanSimulator';

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const child: ActivatedRoute | null = this.route.firstChild;
          let title = child && child.snapshot.data['title'];

          if (title) {
            return title;
          }
        })
      )
      .subscribe((title) => {
        if (title) {
          this.titleService.setTitle(`${title} - Loan`);
        }
      });
  }
}
