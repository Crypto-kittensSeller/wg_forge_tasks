/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const char = key.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash;
    }
    return hash;
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    return this.memory[key];
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    this.memory[key] = value;
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    delete this.memory[key];
  }
}
