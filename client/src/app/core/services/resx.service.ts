import { Injectable } from '@angular/core';

import { INamingContainer } from '../models/naming-container.model';

@Injectable({ providedIn: 'root' })
export class ResxService implements INamingContainer {
  get namingContainer(): string {
    return 'ResxService';
  }

  // info
  public infoPleaseWaitWhileLoadingData =
    'Please wait while we are gathering your data...';
}
