export function countValues(stack) {
  let count = 0;
  while (stack.pop() !== undefined) {
    count++;
  }
  return count;
}

export function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    max = Math.max(max, stack.pop());
  }
  return max;
}
