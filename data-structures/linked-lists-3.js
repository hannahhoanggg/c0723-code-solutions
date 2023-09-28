import LinkedList from './lib/linked-list';

export function removeTail(list) {
  if (list.next === null) return;
  while (list.next.next !== null) list = list.next;
  list.next = null;
}

export function updateNext(list, value) {
  if (list.next === null) return;
  list.next.data = value;
}

export function insertNext(list, value) {
  const next = list.next;
  list.next = new LinkedList(value);
  if (next !== null) {
    list.next.next = next;
  }
}

export function removeNext(list) {
  const next = list.next;
  if (next === null) return;
  list.next = next.next;
}

export function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const next = list.next;
  const nexter = list.next.next;
  next.next = list;
  list.next = nexter;
  return next;
}
