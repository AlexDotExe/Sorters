import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MergeSortService {

  constructor() { }
  
 mergeSort(array:number[]):number[]{
  if(array.length <=1){
    return array;
  }
  
  const middle = Math.floor(array.length);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  console.log(array);
  return this.merge(this.mergeSort(left),this.mergeSort(right));
}

merge(left:number[], right:number[]):number[]{
  const array:number[] = [];
  let lIndex=0;
  let rIndex=0;
  
  while (lIndex + rIndex < left.length + right.length){
    const lItem = left[lIndex];
    const rItem = right[rIndex];
    
    if(lItem == null){
      array.push(rItem);
      rIndex++;
    }
    else if(rItem == null){
      array.push(lItem);
      lIndex++;
    }
    else if(lItem < rItem){
      array.push(lItem);
      lIndex++;
    }
    else{
      array.push(rItem);
      rIndex++;
    }
  }
  console.log(array);
  return array;
}

}
