import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { TestService} from '../test.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productss!: Product[];

  product!:any;
  selectedProduct!:any;
  products!:any;

  constructor(public testService: TestService) {
  
  
    
      this.productss = [
        new Product(
        "https://image.shutterstock.com/image-photo/golden-hotel-sign-close-600w-219379825.jpg",
        "Hotel ",
        "* * * * *",
        2015,
        "Tbilisi",
        "Located in Tbilisi City, less than 1 km from Tbilisi Opera and Ballet Theatre, Hotel MM Apartments offers air-conditioned rooms and a shared lounge."

       
      ),
      new Product(
        "https://image.shutterstock.com/image-photo/picture-hotel-sign-french-building-260nw-1188099376.jpg",
        "Hotel ",
        "* * * *",
        2014,
        "Batumi",
        "Complete with a terrace,  is set in Batumi, 3.8 km from Ali and Nino Monument and 19 km from Petra Fortress."
       
      ),
      new Product(
        "https://image.shutterstock.com/image-photo/hotel-room-600w-123035896.jpg",
        "Hotel ",
        "* * * * *",
        2016,
        "Kakheti",
        " Provides accommodation with a restaurant, free private parking, a bar and a shared lounge."
      
      ),
      new Product(
        "https://image.shutterstock.com/image-photo/avignon-france-oct-07-2017-260nw-1531846994.jpg",
        "Hotel Super",
        "* * * ",
        2015,
        "Batumi",
        "Sea View Apartment near Mcdonalds is set in Batumi, 2.5 km from Ali and Nino Monument, 18 km from Petra Fortress, and 1.1 km from Batumi Archeological Museum."
        
      ),
      new Product(
        "https://image.shutterstock.com/image-photo/luxury-beach-resort-bungalow-near-600w-186994229.jpg",
        "Hotel Super",
        "* * * * *",
        2019,
        "Kutaisi",
        "Set in Kutaisi, within 600 metres of Colchis Fountain and 600 metres of Bagrati Cathedral, Hotel David offers accommodation with a shared lounge and free WiFi as well as free private parking for..."
        
      ),
      new Product(
        "https://image.shutterstock.com/image-illustration/lobby-spa-oriental-style-3d-600w-269337938.jpg",
        "Hotel Super",
        "* * * *",
        2020,
        "Batumi",
        "Situated 2.6 km from Ali and Nino Monument, 18 km from Petra Fortress and 1.3 km from Batumi Archeological Museum, Batumi Boulevard Studio Apartment features accommodation set in Batumi."
        
      ),
      new Product(
        "https://image.shutterstock.com/image-photo/costa-navarino-greece-3-jun-600w-1535343797.jpg",
        "Hotel Super",
        "* * * ",
        2018,
        "Tbilisi",
        "Located in Tbilisi City, 1.8 km from Freedom Square, hotel Rikhe Palace provides accommodation with a restaurant, free private parking, a bar and a terrace."
        
      ),
      new Product(
        "https://image.shutterstock.com/image-illustration/hotel-building-3d-images-600w-234739018.jpg",
        "Hotel Super",
        "* * * ",
        2015,
        "Mestia",
        "Set in Mestia, 1 km from Museum of History and Ethnography, Family Hotel Kala offers accommodation with a restaurant, free private parking, a shared lounge and a garden."
        
      ),
      new Product(
        "https://image.shutterstock.com/image-photo/antique-hotel-sign-germany-600w-257022619.jpg",
        "Hotel Super",
        "* * * * *",
        2015,
        "Batumi",
        "Offering a barbecue and views of the sea,  is set in Batumi in the Ajara Region, 450 metres from Batumi Archeological Museum. Free WiFi is provided throughout."
       
      )
      ]
      this.products=JSON.parse(localStorage.getItem('products')|| '{}')
   }

  ngOnInit(): void {
  }
  public selectProduct(product: any){
    this.selectedProduct = product;
  
    
  }

}
