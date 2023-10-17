import { Component} from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-pdfchat',
  templateUrl: './pdfchat.component.html',
  styleUrls: ['./pdfchat.component.css']

})
export class PdfchatComponent {


  pdfFiles: any;
  mainUrl:string ="http://127.0.0.1:8000"
  text!:string;
  isDivHidden: boolean = true;
  num!:number
  query!:string;
  inputValue!: string ;
  messages:any;
  info!: string;





  constructor(private service: UploadService) {}

  ngOnInit() {
    this.service.getPdf().subscribe((data:any)=>{
      this.pdfFiles=data
  } )

  }


  createVector(num:number)
  {
    this.num= num;
    this.service.get_message(this.num).subscribe((data:any)=>{
      this.messages=data
    } )
    if (this.isDivHidden)
       this.isDivHidden=false
    this.text =""
    var inputElement = document.getElementById('myInput') as HTMLInputElement;
       inputElement.value =""
  }

  get_answer()
  {
    alert("please wait while fetching results")
    const inputElement = document.getElementById('myInput') as HTMLInputElement;
    this.inputValue = inputElement.value;
      this.service.getChat(this.num,this.inputValue).subscribe((data:any) =>
      {
         this.text = JSON.stringify(data)
      })

  }

next_question()
{
  
  this.service.store_message(this.num,this.inputValue,this.text).subscribe((data:any) =>
  {
     this.info = JSON.stringify(data)
  })

  var inputElement = document.getElementById('myInput') as HTMLInputElement;
     inputElement.value =""
     this.text =""


}



}




