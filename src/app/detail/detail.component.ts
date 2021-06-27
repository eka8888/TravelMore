import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { TestService } from './../test.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  productss!: Product[];

  product!:any;
  selectedProduct!:any;
  products!:any;

  constructor(public testService: TestService) { }

  ngOnInit(): void {
  }
  public selectProduct(product: any){
    this.selectedProduct = product;
  
    
  }

}