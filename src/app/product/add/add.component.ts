import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor( private fb:FormBuilder,private ps:ProductService,private router:Router){}
  ngOnInit(): void {

   

  }
   // model form to add
   addForm=this.fb.group({
    pid:[''],
    pname:[''],
    catId:[''],
    desc:[''],
    price:[''],
    is_avail:[''],
    prodImg:[''],
    rating:[''],
    review:[''],
    offer:[''],
    brand:['']


   })
   add(){
    var path=this.addForm.value
    var prodData={
      id:path.pid,
      productName:path.pname,
      categoryID:path.catId,
      descripition:path.desc,
      price:path.price,
      is_avilable:path.is_avail,
      productImg:path.prodImg,
      rating:path.rating,
      review:path.review,
      offer:path.offer,
      brand:path.brand
    }
    this.ps.addProduct(prodData).subscribe((result:any)=>{
      alert('product added')
      this.router.navigateByUrl("")
    })

    

   }

  
}
