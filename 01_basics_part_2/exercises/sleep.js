/**
 * Задание: написать функцию sleep, которая приостанавливает работу потока на
 * время переданное в аргументе. Время задаётся в секундах с точностью до 1 сек.
 * Если передан не валидный аргумент функция должна сразу завершить своё
 * выполнение и вернуть undefined.
 */

export default function sleep(time) {
  if (typeof time !== 'number' || Math.floor(time) !== time) {
    return;
  }
  let begin = Date.now();
  let end = 0;
  do {
    end = Date.now();
  } while (end - begin < time * 1000);
}
