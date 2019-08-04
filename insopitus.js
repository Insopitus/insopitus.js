// 搭个自己的库
export { insParallax, insRandomIdGenerator, insSorting }

function insParallax(n) {
  const parallax = document.querySelector('.parallax-bg')
  let set = null
  parallax.style.transition = 'initial'
  window.addEventListener('scroll', throttler)
  function throttler() {
    // 限流，会产生抖动，暂时不使用，等我想到解决方法
    if (!set) {
      set = setTimeout(() => {
        handdler()
        set = null
      }, 66)
    }
  }
  function handdler() {
    let scroll = document.body.scrollTop
    parallax.style.backgroundPosition = `center ${scroll * (1 - n)}px`
  }
}

// 随机id生成
function insRandomIdGenerator(digit) {
  digit = digit || 4 // digit为id的位数，未传入参数时默认为4；
  var id = []
  id.length = digit
  var alphabet = 'abcdefghijklmnopqrstuvwxyz' // 要加入大写字母，数字或其他符号可在此处加入
  for (var i = 0; i < digit; i++) {
    id[i] = alphabet[Math.floor(Math.random() * alphabet.length)] // 用随机数（0~1）乘以长度，然后向下取整，整数为字符串中的字符位置
  }
  //return id[0]+id[1]+id[2]+id[3]+id[4];  // 将位数改为传参实现时不能继续用这个方法了
  var result = ''
  for (var j = 0; j < digit; j++) {
    result = result + id[j]
  }
  return result
}

// 排序
function insSorting(array, descending) {
  descending = descending || false
  if (!Array.isArray(array)) {
    array = Array.prototype.slice.call(array)
    console.log(array)
  }
  let arr = new Array(array.length)
  array.forEach((item, index) => (arr[index] = array[index]))
  let i = arr.length
  let j
  let tmp
  while (i > 0) {
    for (j = 0; j < i; j++) {
      //console.log(arr[j]);
      if (arr[j] < arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
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
