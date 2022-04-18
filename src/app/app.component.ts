
import { Component, OnInit } from '@angular/core';

// TODO: #4. Define unique page titles - add imports
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dumplings';
  isDark: boolean | undefined;
  bodyStyles: CSSStyleDeclaration | undefined;

  // TODO: #4. Define unique page titles - add the TitleService and Router.
  constructor(private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // TODO: #4. Define unique page titles - set page title based on activated route
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const child = this.activatedRoute.firstChild;
          if (child?.snapshot.data.title) {
            return child?.snapshot.data.title;
          }
          return appTitle;
        })
      ).subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }
}
