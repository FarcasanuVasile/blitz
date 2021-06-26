import { Component, Input, OnInit } from '@angular/core';

import { LoadingSpinnerMode } from 'src/app/core/models/loading-spinner-mode.model';
import { ResxService } from 'src/app/core/services/resx.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() mode: LoadingSpinnerMode = LoadingSpinnerMode.Animation;
  @Input() text: string;

  constructor(public resxService: ResxService) {}

  ngOnInit(): void {
    if (!this.text) {
      this.text = this.resxService.infoPleaseWaitWhileLoadingData;
    }
  }

  public isTextVisible() {
    return (
      this.mode === LoadingSpinnerMode.Text ||
      this.mode === LoadingSpinnerMode.AnimationAndText
    );
  }
}
