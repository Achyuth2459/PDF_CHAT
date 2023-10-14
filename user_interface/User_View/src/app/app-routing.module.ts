import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfchatComponent } from './pdfchat/pdfchat.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  { path:"pdfupload", component:PdfUploadComponent },
  { path:'pdfchat', component:PdfchatComponent},
  { path:'pdfview', component:PdfViewerComponent },
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes),],

   exports: [RouterModule],
})
export class AppRoutingModule { }

