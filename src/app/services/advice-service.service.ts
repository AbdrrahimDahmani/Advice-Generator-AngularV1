import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advice } from '../types/advice.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }
  public getAdvice(id:number):Observable<Advice>{

    return this.http.get<Advice>("https://api.adviceslip.com/advice/"+id);
  }
}
