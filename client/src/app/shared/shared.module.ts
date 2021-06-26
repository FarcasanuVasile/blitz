import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [UploadFileComponent],
  imports: [CommonModule, FormsModule],
  exports: [CommonModule, UploadFileComponent, FormsModule],
})
export class SharedModule {}
