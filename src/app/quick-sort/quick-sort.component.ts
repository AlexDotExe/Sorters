import { Component, OnInit } from '@angular/core'; 
import {Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ... 
} from '@angular/animations';
@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css'],
 animations: [trigger('barState', [
   state('move',style({
    transform:'translateX()', 
   }))
 ])]
})
export class QuickSortComponent implements OnInit {

  random : number;
  nums: Array<number>;
  selectedAmount? : number;
  amounts: Array<number>;
  time :any;
  
constructor() { 
  this.amounts = [ 100, 50, 25];
  this.nums= [];
  }

  ngOnInit(): void {
    this.selectedAmount = 100;
    this.randomize();  
  }

 //Resets the number array and refills it with a set of new random numbers 
//Generate random numbers between 1 and 300
//Math.random generates [0,1)
  randomize():void{
    this.nums =[];
    for(let i = 0;i<this.selectedAmount;i++){
    this.random = Math.floor((Math.random() * 300) + 1);
    this.nums.push(this.random); }
  }

//changes the amount of numbers inside the array
//connected to the 
selected(val:any) :void{
  this.randomize();
 }

   //Styles the bars' lengths in the html representing the numbers in the array 
   styleObject(index :number ): Object {  
    return {height: this.nums[index].toString() +'px', width: '5px', color: 'blue'}
}
//calls the quicksort method to sort the array
  sort() {
    var begin=Date.now();
    this.quickSort(0, this.nums.length);
    var end= Date.now();
    this.time = (end-begin)/1000+" ms";
  }


  
  //************************************************** */
  //EVERYTHING BELOW HERE IS FOR THE QUICKSORT METHOD
  swap( leftIndex, rightIndex){
    var temp = this.nums[leftIndex];
    this.nums[leftIndex] = this.nums[rightIndex];
    this.nums[rightIndex] = temp;
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
            this.swap( i, j); //sawpping two elements
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
