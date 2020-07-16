import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { CoronaService } from '../services/corona.service'
import {FormControl} from '@angular/forms';
import {GlobalModel} from '../model/global.model';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CoronavirusComponent implements OnInit {
  selectedValue:string;
  global:boolean;
 
  country:string;
  data:GlobalModel;
  dailyData:any[];
  countries:any[];
 pieChartData:any[]=[];
 pieChartType='pie';
 pieChartLabels:any[]=[
  'Infected','Recovered','Deaths'
];
 lineChartData: any[]=  [
];
lineChartType='line';
lineChartLabels:any[]=[
 
];
barChartColors:any[] = [
 
];
barChartType='bar';
barChartLabels:any[]=[
  'Infected','Recovered','Deaths'
];
barChartData:any[]=[
  
];

  
    constructor( private corona:CoronaService){
      this.data=new GlobalModel();
    }
    ngOnInit(){
this.global=true;
this.fetchData();
this.fetchCountries();
this.fetchDailyData();


    }

fetchData(){
      this.corona.fetchData().subscribe((res:any[])=>{
        this.data.confirmed=res['confirmed']['value'];
        this.data.recovered=res['recovered']['value'];
        this.data.deaths=res['deaths']['value'];
        this.data.lastupdate=res['lastUpdate'];
        
      });
    }

fetchCountries(){
    this.corona.fetchCountries().subscribe((res: any[])=>{
      var countries=res['countries'];
      this.countries=countries.map((name)=>name['name']);
      console.log(this.countries+"here is countries")

    });
  }
  
  fetchDataByCountry(country:string){
    console.log("fetcg"+country)
    this.corona.fetchDataByCountry(country).subscribe((res: any[])=>{
      console.log("data"+res)
      this.data.confirmed=res['confirmed']['value'];
      this.data.recovered=res['recovered']['value'];
      this.data.deaths=res['deaths']['value'];
      this.data.lastupdate=res['lastUpdate'];
console.log("data by country"+this.data.confirmed)
this.barChartData=[
  {
    data:this.data.confirmed,
    label:'Infected',
   backgroundColor: 'rgba(220,20,60)',
    
  },
  {
    data:this.data.recovered,
    label:'Recovered',
    backgroundColor:'rgba(199, 23, 23, 0.185)',
  },
  {
    data:this.data.deaths,
    label:'deaths'
  },
 
]
      // this.barChartData=[
      //   {
      //     data:[this.data.confirmed,this.data.recovered,this.data.deaths],
      //     label:'people',
      //     borderColor: 'rgba(255,20,147)',
      //     backgroundColor: 'rgba(220,20,60)',
      //   }
      // ];
      this.pieChartData=[
        {
          data:[this.data.confirmed,this.data.recovered,this.data.deaths],
          label:'people',
          
          
        }
      ];
     
     
    });
  }
  
fetchDailyData(){
  this.corona.fetchDailyData().subscribe((res: any[])=>{
    this.lineChartLabels=res.map((date)=>date['reportDate']);
    var infectedData=res.map((confirmed)=>confirmed['totalConfirmed']);
    var deaths=res.map((deaths)=>deaths['deaths']['total']);
    
    this.lineChartData=[
      {
        data:infectedData,
        label:'Infected'
        
      },
      {
        data:deaths,
        label:'deaths'
      },
     
    ]
 
  });
}

  countryChanged(selectedcountry){
    this.country=selectedcountry;
    console.log("chnge"+this.country)
    if(selectedcountry=='global'){
      this.fetchData();
      this.global=true;
    }else{
      this.fetchDataByCountry(selectedcountry);
      this.global=false;
    }

  }
 
  
  
  }


