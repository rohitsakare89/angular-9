import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service'

@Component({
  selector: 'app-india-data',
  templateUrl: './india-data.component.html',
  styleUrls: ['./india-data.component.css']
})
export class IndiaDataComponent implements OnInit {
  states:any[];
  confirmed:any[];
  recovered:any[];
  deaths:any[];
  active: any[];
  lastupdatedtime:any[];
  lineChartData: any[]=  [
  ];
  lineChartType='line';
  lineChartLabels:any[]=[
   
  ];

//ELEMENT_DATA:StatesData
  constructor(private corona:CoronaService) { }

  ngOnInit(): void {

    this.fetchCountrie();
    this.fetchDailyData();
  }


  fetchCountrie(){
    this.corona.Covid19Reports().subscribe((res)=>{
     console.log(res)
     var countries=res.statewise;
     console.log("states"+countries)
     this.states=countries.map((state)=>state['state']);
     this.confirmed=countries.map((confirmed)=>confirmed['confirmed']);
     this.recovered=countries.map((recovered)=>recovered['recovered']);
     this.deaths=countries.map((deaths)=>deaths['deaths']);
     this.active=countries.map((active)=>active['active']);
     this.lastupdatedtime=countries.map((lastupdatedtime)=>lastupdatedtime['lastupdatedtime']);
console.log(this.recovered)

    });
  
  }


  fetchDailyData(){
    this.corona.Covid19Reports().subscribe((res)=>{
      var countries=res.statewise;
      this.lineChartLabels=countries.map((state)=>state['state']);
      var infectedData=countries.map((confirmed)=>confirmed['confirmed']);
      var recovered=countries.map((recovered)=>recovered['recovered']);
      var deaths=countries.map((deaths)=>deaths['deaths']);
      var active=countries.map((active)=>active['active']);
      
      this.lineChartData=[
        {
          data:infectedData,
          label:'Confirmed'
          
        },
        {
          data:recovered,
          label:'Recovered'
        },
        {
          data:deaths,
          label:'Deaths'
        },
        {
          data:active,
          label:'Active'
        },
       
      ]
   
    });
  }

}
