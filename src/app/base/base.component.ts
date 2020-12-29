import { Component, HostBinding, OnInit } from '@angular/core'; 
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import { QuickSService } from './quick-s.service';
import {HeapSortService} from './heap-sort.service';
import {InsertSortService} from './insert-sort.service';
import {BubbleSortService} from './bubble-sort.service';
import {SelectSortService} from './select-sort.service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  @HostBinding('style.--end')
  private end:any = '200px';
  
  @HostBinding('style.--end2')
  private end2:any = '200px';

  random : number;
  nums: Array<number>;
  selectedAmount? : number;
  amounts: Array<number>;
  time : string;
  elems : HTMLElement[];
  styles : any[];
  dummy :number[];
  swaps:string[];
  selectedSpeed: string;
  speeds: string[];
  path: string;
  sorted : boolean; 

constructor(private qs:QuickSService, private route:ActivatedRoute, private hs:HeapSortService, private is:InsertSortService, private bs:BubbleSortService, private ss:SelectSortService) { 
  this.amounts = [ 25, 50, 100, 1000];
  this.speeds = ['10ms','100ms','500ms','1s', '2s'];
  this.nums= [];
  this.styles = [];
  this.dummy = [];
  this.swaps = [];
  this.time = '0';
  this.path = this.route.snapshot.url[0].path;
  this.sorted  = false;
  }

  ngOnInit(): void {
    this.selectedAmount = 25;
    this.selectedSpeed = '100ms';
    this.randomize();  
  }

 //Resets the number array and refills it with a set of new random numbers 
//Generate random numbers between 1 and 300
//Math.random generates [0,1)
//deep clones the array into a dummy array that binds to the html divs
//reads the url to know which sort to use 
//sorts the nums array and records the swaps
//records the amount of time the sort took 
  randomize():void{
    this.sorted = false;
    this.swaps = [];
    this.dummy = [];
    this.nums =[];
    this.elems =[];
    this.styles = [];
    for(let i = 0;i<this.selectedAmount;i++){
    this.random = Math.floor((Math.random() * 300) + 1);
    this.nums.push(this.random); }

  this.dummy = _.cloneDeep(this.nums);
  for(let i = 0;i<this.selectedAmount;i++){
    this.styles.push({height: this.dummy[i].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': '', position: 'relative'});
  }

  var begin=Date.now();
    switch(this.path){
        case 'Quick':   this.qs.quickSort(this.swaps, this.nums,0, this.nums.length-1);break;
        case 'Heap' :   this.hs.heapSort(this.swaps,this.nums);break;
        case 'Insertion':  this.is.sort(this.swaps,this.nums);break;
        case 'Bubble':  this.bs.bubbleSort(this.swaps,this.nums);break;
        case 'Selection':  this.ss.selectionSort(this.swaps,this.nums);break;}
    var end= Date.now();
    this.time = (end-begin)/1000+" ms";
    
}

async animateSwap(){
  this.sorted = true;

   for(let i = 0 ; i <this.swaps.length; i++){
     let arr = this.swaps[i].split(',')
     let x = arr[0];
     let y = arr[1];
     
let p = this.getPosition(this.elems[x]);
let p2 = this.getPosition(this.elems[y]);
let diff = Math.abs(p2.offsetLeft - p.offsetLeft);
  
  this.end = diff + 'px';
  this.end2 =  '-'+diff+'px';
 
  console.log('swap #'+(i+1)+' '+x+','+y +' '+this.end+','+this.end2)
  if(+x < +y ){
  
  this.styles[x] = {height: this.dummy[x].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': 'swap '+this.selectedSpeed+' forwards', postion:'relative'} ;
  this.styles[y] = {height: this.dummy[y].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': 'swap2 '+this.selectedSpeed+' forwards', postion:'relative'} ;
  }
  else{
    this.styles[x] = {height: this.dummy[x].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': 'swap2 '+this.selectedSpeed+' forwards', postion:'relative'} ;
  this.styles[y] = {height: this.dummy[y].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': 'swap '+this.selectedSpeed+' forwards', postion:'relative'} ;
  }
  
  //Pause the Execution to let animation finish
  //Speed is selectable by user
  switch(this.selectedSpeed){
  case '2s': await this.timeout(2100); break;
  case '1s': await this.timeout(1100); break;
  case '500ms': await this.timeout(600); break;
  case '100ms': await this.timeout(200); break;
  case '10ms': await this.timeout(20); break;
   }
let temp =this.dummy[x];
this.dummy[x] = this.dummy[y];
this.dummy[y] = temp;
/* CODE FOR CHANGING SORTED NUMBERS TO GREEN 
if(x == y){
for(let j = 0; j < +x; j++)
this.styles[j] = {height: this.dummy[j].toString() +'px', width: '5px','background-color': 'chartreuse','animation': '', position: 'relative'};
await this.timeout(500);
}*/
//else{
this.styles[x] = {height: this.dummy[x].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': '', position: 'relative'};
this.styles[y] = {height: this.dummy[y].toString() +'px', width: '5px','background-color': 'rgb(179, 49, 49)','animation': '', position: 'relative'};   
await this.timeout(1);
//}
}
for(let i = 0; i < this.styles.length;i++)
this.styles[i] = {height: this.dummy[i].toString() +'px', width: '5px','background-color': 'lime','animation': '', position: 'relative'};
}


//changes the amount of numbers inside the array
//connected to the Size select elment in the html
selectAmount(val:any) :void{
  this.randomize();
 }
//retrieves the element that called this function and stores it in the elems array
getSrc(index: number, srcElement: any){
  this.elems[index] = srcElement;  
}
reset(){
  window.location.reload();
}
//calls the animate swap method to visually sort the dummy array
sort() {
  if(this.sorted != true)
    this.animateSwap();
  }
//used to track the ngFor elements, unsure if useful but was in since early project no need to remove
  trackByFn(index, item){
    return index;
  }
//Gets the postion of a given Element 
  getPosition(srcElement){
    let offsetLeft = 0;
    let offsetTop = 0;

    let el = srcElement;

    while(el){
        offsetLeft += el.offsetLeft;
        offsetTop += el.offsetTop;
        el = el.parentElement;
    }
    return { offsetTop:offsetTop , offsetLeft:offsetLeft }
}
//Used to let animation finish
timeout (ms) {
  return new Promise(res => setTimeout(res,ms));
}
//Animates the swap using the swap and dummy array

}