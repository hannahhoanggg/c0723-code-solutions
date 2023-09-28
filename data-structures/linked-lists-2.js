import LinkedList from './lib/linked-list';

export function getLength(list) {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
}

export function append(list, value) {
  while (list.next) list = list.next;
  list.next = new LinkedList(value);
}

export function getTail(list) {
  while (list.next) list = list.next;
  return list.data;
}

export function includes(list, value) {
  while (list !== null) {
    if (list.data === value) return true;
    list = list.next;
  }
  return false;
}
