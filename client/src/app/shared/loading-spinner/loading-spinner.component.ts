import { Component, Input, OnInit } from '@angular/core';

import { LoadingSpinnerMode } from 'src/app/core/models/loading-spinner-mode.model';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() mode: LoadingSpinnerMode = LoadingSpinnerMode.Animation;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
