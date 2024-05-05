// 监听LocalStorage的变化

const prefix = ""; // 前缀变量

class CommonLocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value) {
    // 执行监听的操作
    // ... 监听逻辑
    return this.storage.setItem(`${prefix}${key}`, value);
  }

  get(key) {
    // 执行监听的操作
    // ... 监听逻辑
    return this.storage.getItem(`${prefix}${key}`);
  }

  del(key) {
    // 执行监听的操作
    // ... 监听逻辑
    return this.storage.removeItem(`${prefix}${key}`);
  }

  clear() {
    // 执行监听的操作
    // ... 监听逻辑
    this.storage.clear();
  }
}

const commonStorage = new CommonLocalStorage();

export default commonStorage;
