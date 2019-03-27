/**
 * Необходимо реализовать структуру данных Очередь.
 * Очередь должна реализовывать принцип FIFO - First-In-First-Out.
 */

export default class Queue {
  /**
   * в качестве "памяти" используем массив
   */

  constructor() {
    this.list = [];
    /**
     * У любой очереди должна быть длинна!
     */
    this.length = 0;
  }

  /**
   * Метод для добавления элемента в конец очереди.
   */

  enqueue(value) {
    this.list.unshift(value);
    this.length++;
  }

  /**
   * Метод для извлечения элемента из очереди.
   * Вместо извлечения из конца очереди мы должны извлечь элемент из начала очереди!
   */

  dequeue() {
    const value = this.list[this.length - 1];
    this.list.length--;
    this.length--;
    return value;
  }

  /**
   * Метод для получения элемента из очереди.
   * Принцип такой же как и у *deque*, только в этом случае элемент не удаляется из очереди.
   */

  peek() {
    const start = this.list[this.length - 1];
    return start;
  }
}
