export function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
}

export function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  while (index > 0) {
    queue.enqueue(queue.dequeue());
    index--;
  }
  return queue.dequeue();
}
