import { Component, HostBinding, OnInit } from '@angular/core'; 
import {Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css'],

})
export class QuickSortComponent implements OnInit {
  
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


constructor() { 
  this.amounts = [ 100, 50, 25, 1000];
  this.nums= [];
  this.styles = [];
  this.dummy = [];
  this.swaps = [];
  this.time = '0';
  }

  ngOnInit(): void {
    this.selectedAmount = 100;
    this.randomize();  
    
  }

 //Resets the number array and refills it with a set of new random numbers 
//Generate random numbers between 1 and 300
//Math.random generates [0,1)
  randomize():void{
    this.swaps = [];
    this.dummy = [];
    this.nums =[];
    this.elems =[];
    this.styles = [];
    for(let i = 0;i<this.selectedAmount;i++){
    this.random = Math.floor((Math.random() * 300) + 1);
    this.nums.push(this.random); 
    
  }
  this.dummy = _.cloneDeep(this.nums);
  for(let i = 0;i<this.selectedAmount;i++){
    this.styles.push({height: this.dummy[i].toString() +'px', width: '5px','background-color': 'black','animation': '', position: 'relative'});
  }
  var begin=Date.now();
    this.quickSort(0, this.nums.length-1);
    var end= Date.now();
    this.time = (end-begin)/1000+" ms";
}

//changes the amount of numbers inside the array
//connected to the 
selected(val:any) :void{
  this.randomize();
 }

   //Styles the bars' lengths in the html representing the numbers in the array 
   /*styleObject(index :number, srcElement: any): Object {
     console.log('run');
     this.elems[index] = srcElement;  
    this.styles[index] ={height: this.nums[index].toString() +'px', width: '5px','background-color': 'black','animation': ''} 
     return this.styles[index];
}*/
getSrc(index: number, srcElement: any){
  this.elems[index] = srcElement;  
}
//calls the quicksort method to sort the array


sort() {
    this.animateSwap();
  }
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

//Animates the swap using the swap and dummy array
 async animateSwap(){
   for(let i = 0 ; i <this.swaps.length; i++){
     let arr = this.swaps[i].split(',')
     let x = arr[0];
     let y = arr[1];
     console.log(x+ '+' + y);
let p = this.getPosition(this.elems[x]);
let p2 = this.getPosition(this.elems[y]);
let diff = Math.abs(p2.offsetLeft - p.offsetLeft);
  
  this.end = diff + 'px';
  this.end2 =  '-'+diff+'px';
  console.log(this.end + '  ' + this.end2);    
  this.styles[x] = {height: this.dummy[x].toString() +'px', width: '5px','background-color': 'black','animation': 'swap 1ms forwards', postion:'relative'} ;
  this.styles[y] = {height: this.dummy[y].toString() +'px', width: '5px','background-color': 'black','animation': 'swap2 1ms forwards', postion:'relative'} ;
  console.log('hello');
  //Pause the Execution to let animation finish
  await this.timeout(2);
  console.log('done');
  let temp =this.dummy[x];
  this.dummy[x] = this.dummy[y];
 this.dummy[y] = temp;
this.styles[x] = {height: this.dummy[x].toString() +'px', width: '5px','background-color': 'black','animation': '', position: 'relative'};
this.styles[y] = {height: this.dummy[y].toString() +'px', width: '5px','background-color': 'black','animation': '', position: 'relative'};   
}
  
   
}
//Used to let animation finish
timeout (ms) {
  return new Promise(res => setTimeout(res,ms));
}

  //************************************************** */
  //EVERYTHING BELOW HERE IS FOR THE QUICKSORT METHOD
  swap( leftIndex, rightIndex){
    var temp = this.nums[leftIndex];
    this.nums[leftIndex] = this.nums[rightIndex];
    this.nums[rightIndex] = temp;
    this.swaps.push(leftIndex + ',' + rightIndex);
  //  this.styles[leftIndex] = {height: this.nums[leftIndex].toString() +'px', width: '5px','background-color': 'black','animation': '', position: 'relative'};
   // this.styles[rightIndex] = {height: this.nums[rightIndex].toString() +'px', width: '5px','background-color': 'black','animation': '', position: 'relative'};
}
  partition( left, right) {
    var pivot   = this.nums[Math.floor((right + left) / 2)], //middle element 
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (this.nums[i] < pivot) {
            i++;
        }
        while (this.nums[j] > pivot) {
            j--;
        }
        if (i <= j) {
          //Animate and timeout to allow animation to finish 
          //EDIT:DONT USE TIMEOUT IT IS UNRELIABLE
      //  this.animateSwap(i,j);
       // await this.timeout(1000);
        this.swap( i, j); //swapping two elements
        i++;
        j--;
        }
    }
    return i;
}

quickSort( left, right) {
    var index;
    if (this.nums.length > 1) {
        index = this.partition( left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            this.quickSort( left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            this.quickSort( index, right);
        }
    }
    return this.nums;
}
}
