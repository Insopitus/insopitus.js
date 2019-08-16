# 安装方法

```
<script src="https://raw.githack.com/Insopitus/insopitus.js/master/insopitus.js"></script>
```

---

# 现有功能

## Parallax

### `Ins.parallax(speed)`

给设置了背景图片的元素 html 标签添加`class="parallax-bg"`，css 确保`background-position: center 0`

在 JavaScript 中使用 `insParallax(speed)`调用。其中函数的参数`speed`表示背景跟随滚动的速度，`0` 表示图片不跟随，`0.75` 将以 75%的速度跟随。

## 随机 ID 生成

### `Ins.randomId(digit)`

返回一个由小写拉丁字母组成的字符串做为随机 id。参数为输出 id 的位数，默认为 4。还在考虑要不要加入参数让 id 包含大写字母或数字。

## 数组排序

### `Ins.sorting(array, descending)`

接受两个参数，第一个参数为需要排序的数组，第二个参数为是否降序排序，默认为`false`即升序排列。返回排序过的数组，不改变原数组。
