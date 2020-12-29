import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickSService {

  constructor() {  
   }
  swap( swaps, nums , leftIndex, rightIndex){
    var temp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = temp;
   swaps.push(leftIndex + ',' + rightIndex);
}
  partition( swaps, nums, left, right) {
    var pivot   = nums[Math.floor((right + left) / 2)], //middle element 
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (nums[i] < pivot) {
            i++;
        }
        while (nums[j] > pivot) {
            j--;
        }
        if (i <= j) {
        this.swap(swaps, nums, i, j); //swapping two elements
        i++;
        j--;
        }
    }
    return i;
}

quickSort( swaps, nums, left, right) {
    var index;
    if (nums.length > 1) {
        index = this.partition( swaps, nums, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            this.quickSort( swaps, nums, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            this.quickSort(swaps, nums, index, right);
        }
    }
    return nums;
}
}
