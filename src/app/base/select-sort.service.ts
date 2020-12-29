import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectSortService {

  constructor() { }
  selectionSort(swaps, arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
            swaps.push(i+','+min);
        }
    }
    return arr;
}
}
