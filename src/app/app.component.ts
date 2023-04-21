import { Component } from '@angular/core';
import { FlagService } from './flag.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lightmetrics_task';

  

  page = 1;
  Countries: any = [];
  filteredCountries: any = [];
  searchInput: any = "";
  countries: any;
  dataView: any;
  data: any = [];
  constructor(private service: FlagService) { }
  ngOnInit(): void {
    this.service.getcountries().subscribe((res: any) => {
      this.data = res.sort((a: any, b: any) => {
        if (a.name.common < b.name.common) {
          return -1;
        } else if (a.name.common > b.name.common) {
          return 1;
        } else {
          return 0;
        }

      })
      console.log(this.data)
      this.filteredCountries = this.data.slice(0, 12)
      this.Countries = res;
      console.log(res)
    })
  }
  clearAll(){
    this.searchInput=""
    this.service.getcountries().subscribe((res: any) => {
      this.data = res.sort((a: any, b: any) => {
        if (a.name.common < b.name.common) {
          return -1;
        } else if (a.name.common > b.name.common) {
          return 1;
        } else {
          return 0;
        }

      })
      console.log(this.data)
      this.filteredCountries = this.data.slice(0, 12)
      this.Countries = res;
      console.log(res)

  })
}
  filterCountries(_input:any){
    this.service.getcountries().subscribe((res:any)=>{
      this.filteredCountries=res;
      console.log(res)
    })
  }

  openDialog(list: any) {
    this.dataView = list
  }

  perPage(page: any) {
    this.page = page;
    if (page == 1) {
      this.filteredCountries = this.data.slice(0, 12);

    } else if (page == 2) {
      this.filteredCountries = this.data.slice(12, 24);

    } else if (page == 3) {
      this.filteredCountries = this.data.slice(24, 36);

    }
    console.log(this.filteredCountries)
  }
  next() {
    this.page = this.page + 1;
    this.filteredCountries = this.data.slice(this.page * 12, this.page * 12 + 12);
  }
  prev() {
    this.page = this.page - 1;

    this.filteredCountries = this.data.slice(this.page  * 12 , this.page * 12 + 12);

  }


}
