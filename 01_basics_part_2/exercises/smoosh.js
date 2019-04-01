/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function smoosh(arr) {
  if (!Array.isArray(arr)) {
    throw Error('argument should be an array');
  }

  const result = [];
  flatArray(arr);
  function flatArray(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatArray(element);
      } else {
        result.push(element);
      };
    });
  };
  return result;
}

function squeeze(arr) {
  if (!Array.isArray(arr)) {
    throw Error('argument should be an array');
  }

  const howManyToDelete = arr.length;
  const toInsert = [];

  function flatArray(arr) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatArray(element);
      } else {
        toInsert.push(element);
        addElement();
      };
    });
  };
  
  flatArray(arr);

  function addElement() {
    arr.push(toInsert.pop());
  }

  arr.splice(0, howManyToDelete);
  return arr;
}

export { smoosh, squeeze };
