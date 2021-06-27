import { Injectable } from '@angular/core';

//import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public products = [] as any;
  public selectedProduct=[] as any;

  constructor(
    
  ) { }//

  public getProducts(): Array<{imageUrl: any; name: any; star: any; date: any; address:any; adition:any}> {// ორი მეთოდი შემომაქვს ფაბლიქზე გეთი
    //ვუწერ რომ მასივის ტიპია array<>,რის შიგნითაც ვუწერ პარამეტრებს
    return this.products;//ჩვენი ფუნქცია რასაც გააკეთებს იქნება დაბრუნება, მუშაობს დაბრუნებაზე, უნდა დამიბრუნოს ზევით რაც გავწერე რომ ჩემთვის იყოს ხელმისაწვდომი
  }

  public createProduct(product: {imageUrl: any; name: any; star: any; date: any;address:any; adition:any }){// და ქრიეთ, ეს შექმნას აკეთებს
    //ამიტომაც ჭირდება არგუმენტები, რომელიც არის processor და გააჩნია ობიექტები
    this.products.push(product);//ანუ პროცესორების მასივში ფუშით უნდა შეიტანოს processor
    console.log('პროცესორების მასივი: ', this.products);
    localStorage.setItem('products', JSON.stringify(this.products));
    
  }

  public selectProduct(){
    this.products.push(this.selectedProduct);
    console.log('პროცესორების მასივი: ', this.selectedProduct);
  
    
  }

}
