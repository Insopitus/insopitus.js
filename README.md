# 安装

```
<script src="https://raw.githack.com/Insopitus/insopitus.js/master/insopitus.js"></script>
```

建议下载到本地使用。更新中，无法保证对以前版本的兼容性。 ~~如果真的还有别人用~~

---

# APIs

## 视差滚动(parallax effect)

### `Ins.parallax(speed)`

给设置了背景图片的元素添加`class="Ins-parallax"`

在 JavaScript 中使用 `Ins.parallax(speed)`调用。其中函数的参数`speed`表示背景跟随滚动的速度，`0` 表示图片不跟随，`0.75` 将以 75%的速度跟随。

## 随机字符串生成

### `Ins.randomString({config})`

返回一个随机字符串，参数为一个对象，格式为`{digit:4, lowercase:true, uppercase:false, number:false}`，四个属性依次为“位数”，“是否允许出现小写字母”，“是否允许出现大写字母”，“是否允许出现数字”。示例中键值为其默认状态。也接受输入数字为参数，仅指定随机字符串长度，其他默认。参数缺省或为其他不合法字符串将默认输出 4 位随机小写字母字符串。

## ID 生成

### `Ins.IDGenerator()`

返回长度为 16 的字符串(实际为 16 进制数)，包含时间戳和随机数，一般情况下不会产生重复

## 数组排序

### `Ins.sort(Array, desc)`

接受两个参数，第一个参数为需要排序的数组，第二个参数为是否降序排序，默认为`false`即升序排列。不同于 js 自带`sort`方法，此方法返回排序过的数组，不改变原数组。

## 限流

### `Ins.throttler(callback, time)`

第一个参数为实际要限流执行的回调函数，第二参数是触发时间间隔，单位 ms，缺省为 66。

## 对象和数组的深拷贝

### `Ins.clone(obj)`

参数应为一个数组或对象，返回拷贝过的新数组/对象。

## 字符串"真实"长度(汉字长度计 2)

### `Ins.trueLength(String)`

参数为需要计算长度的字符串，返回值为长度

## 扁平化滚动条

### `Ins.scrollbar(selector)`

参数为需要修改滚动条样式的标签的 css 选择器(字符串，如`.classname`,`#id`)，缺省将会修改所有滚动条。若要修改多个元素的样式，请多次调用。

## 随机生成人名

### `Ins.randomName(lang)`

参数为`'en'`返回英文人名，为`'zh'`返回中文人名。~~新加的功能真的越来越无聊了~~

## queryString 转换为对象

### `Ins.queryStringParse(str)`

参数为 queryString，可为完整 url 或`location.search`，返回一个各参数组成的对象

## 数字简写(英文简写为 k,m 等，中文万，亿)

### `Ins.shortNum(num,digit,isZH)`

参数分别为要简写的数字，简写时小数点后保留的位数(缺省为 1)，是否使用中文万亿(缺省为`false`),输出结果为字符串，无论是否简写
