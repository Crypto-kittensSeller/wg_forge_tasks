/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  let result = '';
  strings.forEach(element => {
    result = result.concat('',element);
  });
  return result;
}

/*
write a function's body that returns string
that contains element of initial strings with odd indexes

Example:
'abcd' -> 'ac'
'' -> ''
'test' -> 'ts'
*/
export function oddElements(string) {
  const arr = string.split('');
  const result = [];
  arr.forEach((element, i) => {
    if (i % 2 === 0) result.push(element);
  })
  return result.join('');
}

/*
write a function's body that returns words count in passed string

Example:
'abcd' -> 1
'' -> 0
'foo bar' -> 2

Note: String has .split(separator) method where seprator is another string
*/
export function wordsCount(string) {
  const result = string.split(/\W/);
  let counter = 0;
  result.forEach(element => {
    if (element !== '') counter++;
    });
  return counter;
}
