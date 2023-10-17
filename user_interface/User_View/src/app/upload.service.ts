import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = "http://127.0.0.1:8000";
  private pdfUrl ="http://127.0.0.1:8000/media/"
  constructor(private http: HttpClient) {}

  getPdf():Observable<string>{
       return this.http.get<string>(this.apiUrl+ '/pdfview/');
  }
  sendPdf(val:any) {
    return this.http.post(this.apiUrl+'/pdfupload/',val);
  }

  getChat(val:number,query:string){
    return this.http.get<any>(this.apiUrl+ '/pdfchat/',
    {params: {"id": val, "query": query}});
}

 store_message(val:number,question:string,answer:string)
 {
   return this.http.get<any>(this.apiUrl+ '/storeResults/',
    {params: {"id": val, "question": question, "answer":answer}});

 }

 get_message(val:number){
  return this.http.get<any>(this.apiUrl+ '/sendResults/',
  {params: {"id": val}});
}

}
