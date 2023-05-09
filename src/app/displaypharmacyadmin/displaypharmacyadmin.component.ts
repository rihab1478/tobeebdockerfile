import { Component, OnInit, Output  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pharmacy } from '../pharmacydisplay/Pharmacy';
import { Router } from '@angular/router';
import { PharmacyService } from '../pharmacy.service';
@Component({
  selector: 'app-displaypharmacyadmin',
  templateUrl: './displaypharmacyadmin.component.html',
  styleUrls: ['./displaypharmacyadmin.component.css']
})

export class DisplaypharmacyadminComponent implements OnInit{

  pharamcys: Pharmacy[];
  term: string = ''; 
    
constructor(private ph:PharmacyService ,
  private router: Router){}
  ngOnInit() :void{
    //let response=this.http.get("http://localhost:8075/api/PharamcyLocation");
    //response.subscribe((data)=>this.liste=data);
    //let map=this.http.get("http://localhost:8075/map");
  
  this.getPharamcie();
  
  
  }
  private getPharamcie()
{
  this.ph.getPharmacyList().subscribe(data => 
    {
    this.pharamcys = data;
    })
}
updatepharamcy(idLocation :number)
{
this.router.navigate(['admin/Updatepharmacyadmin',idLocation]);
}
}