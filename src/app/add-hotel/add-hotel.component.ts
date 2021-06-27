import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { TestService} from '../test.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {
 
  product:{imageUrl:any; name:any; star:any; date:any; address:any; adition:any;}={ //პროდუქტის ინიციალიზაციას ვაკეთებ აქაც
    imageUrl:'',
    name:'',
    star:null,
    date:null,
    address:'',
    adition:''
  }

  constructor(public testService: TestService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('გაგზავნის შემდეგ',this.product);
    this.testService.createProduct(this.product);
    this.product={
     imageUrl:'',
     name:'',
     star:null,
     date:null,
     address:'',
     adition:''
    }
 
   }
 

}
