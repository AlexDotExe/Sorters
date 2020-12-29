import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {

  constructor() { }
  swap(swaps, arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
    swaps.push(first_Index+','+second_Index);
}

bubbleSort(swaps, arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                this.swap(swaps,arr, j, j+1);
            }
        }
    }
}

}
