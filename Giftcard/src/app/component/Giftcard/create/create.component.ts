import { Component, OnInit } from '@angular/core';
import { Giftcard } from 'src/app/model/giftcard';
import { GiftcardService } from  'src/app/service/giftcard.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newGiftcard:Giftcard=new Giftcard();
  constructor(private giftcardService:GiftcardService ) { }

  ngOnInit()  {
    
  }
  }

