import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeapSortService {
  array_length: number
  
  constructor() { this.array_length = 0;}
   ////////////////////////////////EVERYTHING BELOW IS HEAPSORT//////////////////////////////////////////////

/* to create MAX  array */  
swap(swaps,nums, index_A, index_B) {
  var temp = nums[index_A];
  nums[index_A] = nums[index_B];
  nums[index_B] = temp;
  swaps.push(index_A + ',' + index_B);
}
/**
 * Heap sort
 * @see https://en.wikipedia.org/wiki/Heapsort
 * @param {Array} array
 * @return {Array}
 */
 heapSort(swaps, array: Array<number>): Array<number> {
  array = array.slice();

  for (let i: number = Math.floor(array.length / 2 - 1); i >= 0; i--) {
      this.shiftDown(swaps, array, i, array.length);
  }

  for (let i: number = array.length - 1; i >= 1; i--) {
      this.swap(swaps,array, 0, i);
      this.shiftDown(swaps,array, 0, i);
  }

  return array;
}

/**
* Shift down
* @param  {Array} array
* @param  {Number} i
* @param  {Number} j
*/
shiftDown(swaps , array: Array<number>, i: number, j: number): void {
  let done: boolean = false;
  let maxChild: number;

  while ((i * 2 + 1 < j) && !done) {
      if (i * 2 + 1 === j - 1) {
          maxChild = i * 2 + 1;
      } else if (array[i * 2 + 1] > array[i * 2 + 2]) {
          maxChild = i * 2 + 1;
      } else {
          maxChild = i * 2 + 2;
      }

      if (array[i] < array[maxChild]) {
          this.swap(swaps, array, i, maxChild);
          i = maxChild;
      } else {
          done = true;
      }
  }
}

}
