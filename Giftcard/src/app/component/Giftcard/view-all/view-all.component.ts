import { Component, OnInit } from '@angular/core';
import { Giftcard } from 'src/app/model/giftcard';
import { GiftcardService } from 'src/app/service/giftcard.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  giftcards:Giftcard[]=[]; 

  constructor (private Giftcardservice: GiftcardService) { }

  ngOnInit(): void  {
    //this.Giftcardservice.hello();
    this.Giftcardservice.getAllGiftcards().subscribe(
    (data)=>{this.giftcards=data;console.log(JSON.stringify(data))}
    

    );
  }

}
