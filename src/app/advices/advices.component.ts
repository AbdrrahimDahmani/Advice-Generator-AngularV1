import { Component, OnInit } from '@angular/core';
import { AdviceService } from '../services/advice-service.service';
import { Advice } from '../types/advice.module';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

  responseAdvice:Advice={
    id:0,
    advice:''
  };
  randomId:number=0
  constructor(private adviceService:AdviceService) {

  }
  ngOnInit(): void {
    this.displayAdvice()

  }

  public displayAdvice(){
    this.randomId=Math.floor(Math.random() * (1 +224 ))
    this.adviceService.getAdvice(this.randomId).subscribe(
     {
      next: (res:any)=>{
        this.responseAdvice = res.slip;

      },
      error:(err)=>console.log(err)
    }
    );
    console.log(this.responseAdvice);
     }



}
