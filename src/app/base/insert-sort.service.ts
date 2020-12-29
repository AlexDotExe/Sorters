import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertSortService {

  constructor() { }
    
    /**
    *This method contains logic to sort a partially sorted array in O(n) time.
    *@method sort
    *@param {Array} arr The array to be sorted.
    *@return {Array} arr THe sorted array.
    **/
    public sort(swaps, arr:number[]):number[]{
    
      if(arr!==undefined){
       for(let i:number = 0; i< arr.length; i++){
    
        let j = i-1;
        let key = arr[i];
    
        while(j>-1 && arr[j]>key){
          arr[j+1] = arr[j];
          swaps.push(j+1+','+j)
          j--; 
        }
    
        arr[j+1] = key;
        //swaps.push(j+1+','+i);
    
       }
       return arr;
    }}
  }
    
    

