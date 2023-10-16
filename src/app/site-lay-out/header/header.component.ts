import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm:any=""

  constructor(private ps:ProductService){}

  ngOnInit(): void {
    
  }

  search(event:any){
    // console.log(event.target.value);
    this.searchTerm=event.target.value
    // console.log(this.searchTerm);


    // send data to behaviour subject
    this.ps.search.next(this.searchTerm)

    
    
    
  }
}
