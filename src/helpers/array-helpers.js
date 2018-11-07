export const push = (arr, newEntry) => {
  return [...arr, newEntry];
}

export const pop = (arr) => {
  return arr.splice(0,-1);
}

export const shift = (arr) => {
  return arr.slice(1);
}

export const unshift = (arr, newEntry) => {
  return [newEntry, ...arr];
}

export const sort = (arr, compareFunction) => {
  return [...arr].sort(compareFunction);
}

export const reverse = (arr) => {
  return [...arr].reverse();
}

export const splice = (arr, start, deleteCount, ...items) => {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
}

export const deleteItem = (arr, index) => {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

export const replaceAt = (arr, index, newEntry) => {
  return [...arr.slice(0,index), newEntry, ...arr.slice(index+1, arr.length)];
}

export const clone = (arr) => {
  return [...arr];
}

