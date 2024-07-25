export const findClosestElementIndex = (
  arr: number[],
  target: number,
): number => {
  let left = 0;
  let right = arr.length - 1;

  if (target <= arr[0]!) return 0;
  if (target >= arr[arr.length - 1]!) return arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target < arr[mid]!) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (left >= arr.length) {
    return arr.length - 1;
  }
  if (right < 0) {
    return 0;
  }

  return target - arr[right]! <= arr[left]! - target ? right : left;
};
