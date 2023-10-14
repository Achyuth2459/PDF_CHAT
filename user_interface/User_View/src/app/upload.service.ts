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

  getChat(val:number){
    return this.http.get<any>(this.apiUrl+ '/pdfchat/',{params: {"id": val}} );
}
}
