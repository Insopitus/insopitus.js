// 搭个自己的库
// export { insParallax, insRandomIdGenerator, insSorting }

const Ins = {
  parallax(n) {
    const parallax = document.querySelector('.parallax-bg')
    parallax.style.transition = 'initial'
    window.addEventListener('scroll', () => {
      let scroll = document.body.scrollTop
      parallax.style.backgroundPosition = `center ${scroll * (1 - n)}px`
    })
  },

  // 随机字符串生成
  randomString(arg) {
    let alphabet = ''
    let digit = 4 // digit为id的位数，未传入参数时默认为4；
    if (typeof arg === 'object') {
      if (arg.lowercase !== false) alphabet += 'abcdefghijklmnopqrstuvwxyz'
      if (arg.uppercase === true) alphabet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if (arg.number === true) alphabet += '1234567890'
      digit = arg.digit || digit
    } else {
      digit = parseInt(arg) || digit
      alphabet += 'abcdefghijklmnopqrstuvwxyz'
    }
    let id = []
    id.length = digit
    for (let i = 0; i < digit; i++) {
      id[i] = alphabet[Math.floor(Math.random() * alphabet.length)] // 用随机数（0~1）乘以长度，然后向下取整，整数为字符串中的字符位置
    }
    let result = ''
    for (let j = 0; j < digit; j++) {
      result = result + id[j]
    }
    return result
  },

  // 排序
  sort(array, descending) {
    descending = descending || false
    if (!Array.isArray(array)) {
      array = Array.prototype.slice.call(array)
      console.log(array)
    }
    let arr = new Array(array.length)
    array.forEach((item, index) => (arr[index] = array[index]))
    let i = arr.length
    let j
    while (i > 0) {
      for (j = 0; j < i; j++) {
        if (arr[j] < arr[j + 1]) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
      i--
    }
    if (descending) {
      return arr
    } else {
      return arr.reverse()
    }
  },

  // 限流
  throttlerSetTime: false,
  throttler(callback, time) {
    let delay = parseInt(time) || 100
    if (!this.throttlerSetTime) {
      this.throttlerSetTime = setTimeout(() => {
        this.throttlerSetTime = null
        callback()
      }, delay)
    }
  },

  // 深拷贝
  clone(obj) {
    const result = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object' && typeof obj[key] !== null) {
          result[key] = this.deepClone(obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    }
    return result
  }
}
