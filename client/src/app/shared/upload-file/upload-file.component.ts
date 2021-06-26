import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private http: HttpClient) {}
  onChange(event) {
    const file = new FormData();
    const fileData = event.target.files;
    for (const item of fileData) {
      file.append('file', item);
    }
    this.http.post('http://localhost:5000/api/upload', file).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.fileInput.nativeElement.value = '';
  }
}
