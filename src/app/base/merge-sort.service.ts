import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService {
id:number;
  constructor() {this.id = 0; }
  
 mergeSort(swaps, array:number[]):number[]{
  if(array.length <=1){
    return array;
  }
  
  const middle = Math.floor(array.length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
 
  return this.merge(swaps, this.mergeSort(swaps,left),this.mergeSort(swaps,right));
}

merge( swaps, left:number[], right:number[]):number[]{
  const array:number[] = [];
  let lIndex=0;
  let rIndex=0;
  
  while (lIndex + rIndex < left.length + right.length){
    
    const lItem = left[lIndex];
    const rItem = right[rIndex];
    
    if(lItem == null){
      array.push(rItem);
      swaps.push(this.id+','+(array.length-1)+','+rItem);
      rIndex++;
    }
    else if(rItem == null){
      array.push(lItem);
      swaps.push(this.id+','+(array.length-1)+','+lItem);
      lIndex++; 
    }
    else if(lItem < rItem){
      array.push(lItem);
      swaps.push(this.id+','+(array.length-1)+','+lItem);
      lIndex++;
    }
    else{
      array.push(rItem);
      swaps.push(this.id+','+(array.length-1)+','+rItem);
      rIndex++;
    }
  }
  this.id++;
  return array;
}

}
