// 搭个自己的库
// export { insParallax, insRandomIdGenerator, insSorting }

const Ins = {
  parallax(n) {
    n = n || 0.75
    const parallax = document.querySelector('.ins-parallax')
    console.log(parallax)
    parallax.style.transition = 'initial'
    parallax.style.backgroundPosition = 'center 0'
    window.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop
      parallax.style.backgroundPosition = `center ${scroll * (1 - n)}px`
      console.log(scroll)
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
          result[key] = this.clone(obj[key])
        } else {
          result[key] = obj[key]
        }
      }
    }
    return result
  },

  // 字符串真实长度
  trueLength(str) {
    str = str || ''
    return str.replace(/[^x00-xff]/g, '01').length
    // 将单个汉字替换成两个数字，以实现汉字长度计二的功能
  },

  // 扁平化滚动条
  scrollbar(classname) {
    classname = classname ? '.' + classname : ''
    console.log(classname)
    let css = `
      ${classname}::-webkit-scrollbar{
        width: 15px;
        border:none;
      }
      ${classname}::-webkit-scrollbar:hover{
        width: 150px;
      }
      ${classname}::-webkit-scrollbar-track{
        background: #f1f1f1;
      }
      ${classname}::-webkit-scrollbar-thumb{
        background: #888;
      }
      ${classname}::-webkit-scrollbar-thumb:hover{
        background: dodgerblue;
        width: 20px;
      }
    `
    const head = document.getElementsByTagName('head')[0]
    const cssTag = document.createElement('style')
    cssTag.innerHTML = css
    head.appendChild(cssTag)
  },

  // 随机人名生成
  randomName(lang) {
    const givennameEN = ['Michael', 'Tom', 'Jerry', 'Mary', 'John']
    const familynameEN = ['Trump', 'Bush', 'Smith', 'Jones', 'Williams']
    const givennameCH = ['一一', '二狗', '三', '四', '五']
    const familynameCH = ['张', '王', '刘', '李', '陈']
    function random(arr) {
      let length = arr.length
      let position = Math.floor(Math.random() * length)
      return arr[position]
    }
    switch (lang) {
      case 'en':
        return random(givennameEN) + ' ' + random(familynameEN)
      case 'zh':
        return random(familynameCH) + random(givennameCH)
    }
  },

  // 去字符串首尾空格trim   js有这个方法，但是为什么我这儿会出问题。debug结果，为什么return了两次，把return包在else里面会undefined又是为何
  trim(str) {
    str = str || ''
    const strArr = str.split('')
    // console.log(strArr)
    if (strArr[0] === ' ') {
      let newStr = strArr.slice(1).join('')
      // console.log(newStr)
      Ins.trim(newStr)
    }
    // else if (strArr[strArr.length - 1] === ' ') {
    //   let newStr = strArr.slice(strArr.length - 1, 1).join('')
    //   Ins.trim(newStr)
    // }
    return str
  }
}
