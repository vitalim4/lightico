import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  countries = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countriesService.getCountries().subscribe((data: any[])=>{
      console.log(data);
      this.countries = data;
    })  
  }

}
