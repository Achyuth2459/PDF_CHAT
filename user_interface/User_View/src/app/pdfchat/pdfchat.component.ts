import { Component, Input, Output } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-pdfchat',
  templateUrl: './pdfchat.component.html',
  styleUrls: ['./pdfchat.component.css']
})
export class PdfchatComponent {

  messages: string[] = [];
  newMessage: string = '';
  pdfFiles: any;
  mainUrl:string ="http://127.0.0.1:8000"
  text!:string;
  val!:string ;

  constructor(private service: UploadService) {}

  ngOnInit() {
    this.service.getPdf().subscribe((data:any)=>{
      this.pdfFiles=data
  }
    )
  }

  gettext(num:number)
  {
      this.service.getChat(num).subscribe((data:any) =>
      {
         this.text = JSON.stringify(data)


      })
  }



}




