import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-pdf-upload',
  templateUrl: './pdf-upload.component.html',
  styleUrls: ['./pdf-upload.component.css']
})
export class PdfUploadComponent {
 selectedFile: File | null = null;

  constructor(private service: UploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
}

uploadPDF() {
  if (this.selectedFile) {
    const formData = new FormData();
    formData.append('pdfFile', this.selectedFile);
    this.service.sendPdf(formData).subscribe((data:any)=>{
    alert(data.toString());
    })

   }
}

}


