import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pharmacy } from './pharmacydisplay/Pharmacy';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  api = "http://localhost:8075/api/PharamcyLocation"
  map="http://localhost:8075/map"
  constructor(private http: HttpClient) { }
  pharmacy: Pharmacy =new Pharmacy();
  getPharmacyList(): Observable<Pharmacy[]> {  
    return this.http.get<Pharmacy[]>(`${this.api}`);  
   
  }  

  addPharmacy(pharmacy: Pharmacy):Observable<Object>
  {
return this.http.post(`${this.api}`,pharmacy);

  }

  getpharamcybyid(idLocation: number):Observable<Pharmacy>
  {
return this.http.get<Pharmacy>(`${this.api}/$(idLocation)`);
  }

  updatepharamcy(idLocation: number, pharmacy: Pharmacy): Observable<Object>{
    return this.http.put(`${this.api}/${idLocation}`,pharmacy);
  }
  deleteorder(idLocation: number): Observable<Object> {  
    return this.http.delete(`${this.api}/$(idLocation)`);

  }  
}
