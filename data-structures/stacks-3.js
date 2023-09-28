export function get2ndFromTop(stack) {
  const top = stack.pop();
  if (top === undefined) return undefined;
  const next = stack.peek();
  stack.push(top);
  return next;
}

export function insertUnderTop(stack, value) {
  const top = stack.pop();
  if (top === undefined) return;
  stack.push(value);
  stack.push(top);
}
