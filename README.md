# 安装

```
<script src="https://raw.githack.com/Insopitus/insopitus.js/master/insopitus.js"></script>
```

建议下载到本地使用。更新中，无法保证对以前版本的兼容性。 ~~如果真的还有别人用~~

---

# 功能

## 滚动视差(parallax effect)

### `Ins.parallax(speed)`

给设置了背景图片的元素添加`class="parallax-bg"`，css 确保`background-position: center 0`

在 JavaScript 中使用 `Ins.parallax(speed)`调用。其中函数的参数`speed`表示背景跟随滚动的速度，`0` 表示图片不跟随，`0.75` 将以 75%的速度跟随。

## 随机字符串生成

### `Ins.randomString({arg})`

返回一个随机字符串，参数为一个对象，格式为`{digit:4, lowercase:true, uppercase:false, number:false}`，四个属性依次为“位数”，“是否允许出现小写字母”，“是否允许出现大写字母”，“是否允许出现数字”。示例中键值为其默认状态。也接受输入数字为参数，仅指定随机字符串长度，其他默认。参数缺省或为其他不合法字符串将默认输出 4 位随机小写字母字符串。

## 数组排序

### `Ins.sort(Array, descending)`

接受两个参数，第一个参数为需要排序的数组，第二个参数为是否降序排序，默认为`false`即升序排列。不同于 js 自带`sort`方法，此方法返回排序过的数组，不改变原数组。

## 限流

### `Ins.throttler(callback, time)`

第一个参数为实际要限流执行的回调函数，第二参数是触发时间间隔，单位 ms，缺省为 66。

## 对象和数组的深拷贝

### `Ins.deepClone(Object)`

参数应为一个数组或对象，返回拷贝过的新数组/对象。

## 字符串"真实"长度(汉字长度计 2)

### `Ins.trueLength(String)`

参数为需要计算长度的字符串，返回值为长度

## 扁平化滚动条

### `Ins.scrollbar(ClassName)`

参数为需要修改滚动条样式的标签的 className(字符串)，缺省将会修改所有滚动条。若要修改多个 className 的样式，请多次调用。
