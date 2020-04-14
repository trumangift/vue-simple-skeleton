# vue-simple-skeleton

> Vue Skeleton component 骨架屏 easy use 

![Image](https://github.com/trumangift/vue-simple-skeleton/raw/master/src/assets/demo.gif)
##骨架屏是什么?

请参考 https://github.com/Jocs/jocs.github.io/issues/22

## 安装

``` bash
# install dependencies
npm install vue-simple-skeleton --save 
or
yarn add vue-simple-skeleton

```
##如何使用？
``` javascript
<skeleton :loading="true"  :active="false" :title="false"   avatar :paragraph="{rows: 10, width: '80%' }" >
     <table>
       <thead>
          <tr>
            <th>aa</th>
            <th>bb</th>
          </tr>
       </thead>
       <tbody>
          <tr>
            <td>数据1</td>
            <td>数据2</td>
          </tr>
       </tbody>
     </table>
</skeleton>
```
##参数

* loading
    *  布尔值
    *  异步加载数据的需要传入
* active
    *  布尔值
    *  是否需要显示css animation动画效果
* avatar
    *  布尔值
    *  是否需要显显示左侧Avatar
* paragraph
    * rows 默认4行
    * width 默认50%

##关于作者

```javascript
  var ihubo = {
    nickName  : "刘明海",
    site : "https://github.com/trumangift"
  }
```
