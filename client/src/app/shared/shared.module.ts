import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [UploadFileComponent, LoadingSpinnerComponent],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    UploadFileComponent,
    FormsModule,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
