import { Component,  Input,Output } from '@angular/core';
import { UploadService } from '../upload.service';
// import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})





export class PdfViewerComponent {
  pdfFiles: any;
  mainUrl:string ="http://127.0.0.1:8000"

  

  constructor(private service: UploadService) {}


  viewPDF() {

      this.service.getPdf().subscribe((data:any)=>{
      this.pdfFiles=data

      })
    }


}


