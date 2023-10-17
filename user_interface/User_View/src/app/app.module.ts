import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfchatComponent } from './pdfchat/pdfchat.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfUploadComponent } from './pdf-upload/pdf-upload.component';
import { FormsModule } from '@angular/forms';
import { UploadService } from './upload.service';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from'@angular/material/icon';
import { SafePipe } from './safe.pipe'
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    PdfchatComponent,
    PdfViewerComponent,
    PdfUploadComponent,
    SafePipe,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,

  ],
  providers: [UploadService],
  bootstrap: [AppComponent],

})
export class AppModule { }
