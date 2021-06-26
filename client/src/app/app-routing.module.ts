import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/templates/main-layout/main-layout.component';
import { UploadFileComponent } from './shared/upload-file/upload-file.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
