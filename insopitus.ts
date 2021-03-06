

export default class Ins {
  static parallax(n:number) {
    n = n || 0.75
    const parallax:HTMLElement = document.querySelector('.ins-parallax')
    console.log(parallax)
    parallax.style.transition = 'initial'
    parallax.style.backgroundPosition = 'center 0'
    window.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop
      parallax.style.backgroundPosition = `center ${scroll * (1 - n)}px`
      console.log(scroll)
    })
  }

  // 随机字符串生成 可考虑使用String.fromCharCode()方法Math.random()*26 + 97
  static randomString(arg:{lowercase:boolean,uppercase:boolean,number:boolean,digit:number}):string {
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
  }
  // 随机ID生成(前11位为时间，后3位为随机数，一般上不会重复了，可以学习mongoDB的id算法，加上用户ID等等)
  static IDGenerator():string {
    let ID = ''
    let date = +new Date()
    ID += date.toString(16)
    ID += (Math.random() * 100000).toString(16).substring(0, 3)
    return ID
  }
  // 排序
  static sort(array:number[], descending:boolean):number[] {
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
  }

  // 限流
  throttlerSetTime = false
  static throttler(callback:Function, time:number) {
    let delay = time || 100
    if (!this.throttlerSetTime) {
      this.throttlerSetTime = setTimeout(() => {
        this.throttlerSetTime = null
        callback()
      }, delay)
    }
  }

  // 深拷贝
  static clone(obj:{}):{} {
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
  }

  // 字符串真实长度
  static trueLength(str:string):number {
    str = str || ''
    return str.replace(/[^x00-xff]/g, '01').length
    // 将单个汉字替换成两个数字，以实现汉字长度计二的功能
  }

  // 扁平化滚动条
  static scrollbar(selector:string) {
    selector = selector || ''
    let css = `
      ${selector}::-webkit-scrollbar{
        width: 15px;
        border:none;
      }
      ${selector}::-webkit-scrollbar:hover{
        width: 150px;
      }
      ${selector}::-webkit-scrollbar-track{
        background: #f1f1f1;
      }
      ${selector}::-webkit-scrollbar-thumb{
        background: #888;
      }
      ${selector}::-webkit-scrollbar-thumb:hover{
        background: dodgerblue;
        width: 20px;
      }
    `
    const head = document.getElementsByTagName('head')[0]
    const cssTag = document.createElement('style')
    cssTag.innerHTML = css
    head.appendChild(cssTag)
  }

  // 随机人名生成
  static randomName(lang:'zh'|'en'):string {
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
  }
  // queryString转对象
  static queryStringParse(queryString:string) {
    queryString = queryString || ''
    if (queryString && typeof queryString === 'string') {
      if (queryString.indexOf('?') !== -1) {
        queryString = queryString.split('?')[1]
      }
      const queryArray = queryString.split('&')
      const queryObject = {}
      queryArray.forEach(item => {
        queryObject[item.split('=')[0]] = item.split('=')[1]
      })
      return queryObject
    }
    return queryString
  }

  // 数字简写
  static shortNum(num:number, digit:number, isZH:boolean) {
    num = parseFloat(num) || 0
    digit = digit || 1
    isZH = isZH || false
    let d = isZH ? 4 : 3 //几位一分隔
    let letters = isZH
      ? ['', '万', '亿', '兆', '京', '垓']
      : ['', 'K', 'M', 'B', 'T', 'Q']
    if (num < Math.pow(10, d)) return String(num)
    len = String(num.toFixed(0)).length - 1 //输入数字的位数-1
    let leading = num / Math.pow(Math.pow(10, d), Math.floor(len / d))
    leading = leading.toFixed(digit)
    return leading + letters[Math.floor(len / d)]
  }
  static dateFormat(arg:Date|string|number) {
    let date = !arg ? new Date() : new Date(arg)
    let a = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      day: date.getDay(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      unix: +date
    }
    let now = new Date()
    let today = new Date(
      `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
    )
    let result = {
      monthAndDay: a.month + '-' + a.day
    }
    if (a.year === today.getFullYear()) {
      // 当年显示小时分钟，不显示年
      result.year = ''
      result.time = `${
        a.hour.toString().length === 1 ? '0' + a.hour : a.hour
      }:${a.minute.toString().length === 1 ? '0' + a.minute : a.minute}`
      console.log(date - today)
      if (date - today > 0 && date - today < 86400000) {
        // 今天
        result.monthAndDay = '今天'
      } else if (date - today < 0 && today - date < 86400000) {
        // 昨天
        result.monthAndDay = '昨天'
      }
    } else {
      // 非当年显示年份，不显示小时分钟
      result.year = date.getFullYear()
      result.time = ''
    }
    return (
      result.year +
      (result.year === '' ? '' : '-') +
      result.monthAndDay +
      (result.time === '' ? '' : ' ') +
      result.time
    )
  }
}
