export function take2nd(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  queue.enqueue(queue.dequeue());
  return queue.dequeue();
}

export function takeSmaller(queue) {
  const first = queue.dequeue();
  if (first === undefined) {
    return;
  }
  const next = queue.dequeue();
  if (next === undefined) {
    return first;
  }
  if (first > next) {
    queue.enqueue(first);
    return next;
  }
  queue.enqueue(next);
  return first;
}

export function takeNextSmallest(numberQueue) {
  let nextSmallest = numberQueue.dequeue();
  while (nextSmallest > numberQueue.peek()) {
    numberQueue.enqueue(nextSmallest);
    nextSmallest = numberQueue.dequeue();
  }
  return nextSmallest;
}
