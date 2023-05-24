export default {
  methods: {
    // 实现sleep(ms) 需要配合async await使用
    sleep(ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }
  }
}