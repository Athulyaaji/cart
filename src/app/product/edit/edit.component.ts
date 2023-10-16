import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any
  eData:any={}

  constructor(private fb:FormBuilder,private ps:ProductService,private ar:ActivatedRoute,private router:Router){}
 
  ngOnInit():void{

    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);
      
    })
    this.ps.getProduct(this.id).subscribe((result:any)=>{
      // console.log(result);
      this.eData=result
      console.log(this.eData);
      

      
    })

  }
  editProduct(){
    this.ps.updateProduct(this.id,this.eData).subscribe((result:any)=>{
      alert('Product data Added')
      this.router.navigateByUrl('product/view/'+this.id)
    })
  }
   

}
