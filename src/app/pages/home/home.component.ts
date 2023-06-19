import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.sucess) {
        this._snackBar.open('Empréstimo solicitado com sucesso!!', '', {
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          duration: 2000,
        });
      }
    });
  }
}
