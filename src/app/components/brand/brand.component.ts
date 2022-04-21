import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  dataLoaded = false;

  brands : Brand[] = [];
  currentBrand: Brand;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand){
    return (this.currentBrand == brand) ? 'list-group-item active' : 'list-group-item';
  }

  reset(){
    this.currentBrand = {id: -1, name: ''};
  }
}
