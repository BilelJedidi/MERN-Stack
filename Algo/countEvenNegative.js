
/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) { 
    var count = 0
    for (var i=0; i<nums.length; i++){
        if (nums[i]<0 && nums[i]%2 == 0){
            count++
            
        }
    }
    return count
}

result1 = countEvenNegatives(nums1)
console.log(result1)
result2 = countEvenNegatives(nums2)
console.log(result2)
result3 = countEvenNegatives(nums3)
console.log(result3)


/*****************************************************************************/