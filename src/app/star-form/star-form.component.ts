import { Component, OnInit } from '@angular/core';
import { Star } from '../star';

@Component({
  selector: 'app-star-form',
  templateUrl: './star-form.component.html',
  styleUrls: ['./star-form.component.css']
})
export class StarFormComponent implements OnInit {
  star = new Star(1,
                    "Zinedine",
                    "Zidane",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Zinedine_zidane_wcf_2006-edit.jpg/635px-Zinedine_zidane_wcf_2006-edit.jpg",
                    "Zinedine Yazid Zidane O.L.H., A.O.M.N. (French pronunciation: [zinedin zidan], born 23 June 1972), nicknamed Zizou, is a French retired professional footballer and current manager of Real Madrid. He played as an attacking midfielder for the France national team, Cannes, Bordeaux, Juventus and Real Madrid.[3][4] An elite playmaker, renowned for his elegance, vision, ball control and technique, Zidane was named the best European footballer of the past 50 years in the UEFA Golden Jubilee Poll in 2004.[5] He is widely regarded as one of the greatest players of all time.[6][7][8]",
                    5
                  );
  constructor() {


   }

  ngOnInit() {
  }

  submit(){
    console.log("Form submitted ....");
    return false; // to not reload the page 
  }

  reset(form:any){
    form.reset();
  }

}
