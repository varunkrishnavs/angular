import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  constructor( private httpClient: HttpClient ) { }
    hello() {
      alert("Giftcardservice....")
    }
    getAllGiftcards():Observable<any>{

      return this.httpClient.get("http://localhost:8090/usergiftdetails/usergiftdetails")

    }
  }

