# vue-simple-skeleton

> Vue Skeleton component  easy easy easy use vue first screen loading page 骨架屏 首屏加载

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
<skeleton :loading="true"  :active="false" :title="false"   avatar :paragraph="{rows: 10, width: '80%' }" wrapperClass="yourClass" >
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
    *  布尔值 boolean
    *  首屏异步加载数据的需要传入,建议默认在data中定义的loading是true，数据加载完毕或异常改为false后不再改动loading值.
    *  (译 translate)The asynchronous loading of data on the first screen needs to be passed in.
    *  It is recommended that the loading flag is defined in vue data is true by default, the loading flag will be changed after the asynchronous is done or exception happen, and the loading flag will not be changed at other times.
* active
    *  布尔值 boolean
    *  是否需要显示css animation动画效果
    *  (译 translate) Whether to show css animation animation effect
* avatar
    *  布尔值
    *  是否需要显显示左侧Avatar
    *  (译 translate) Whether to display the left Avatar
* title
    *  布尔值 boolean
    *  是否需要显显示与Avatar平行右侧的title
    *  (译 translate) display or hide the title on the right side parallel to Avatar
* titleWidth
    *  number or string
    *  定义Avatar右侧的title的长度，number(number without px) or string 60%
    *  (译 translate) Define the width of the title on the right side of Avatar
* paragraph
    * rows number 默认4行
    * width 默认50%, number(number without px) or string 60%
* wrapperClass
    * string 传给骨架屏的class,你可以用来调整骨架屏和其他容器的间距
    *  (译 translate) The class passed to the skeleton component, you can use it to adjust the distance between the skeleton  and other containers
##关于作者

```javascript
  var ihubo = {
    nickName  : "刘明海",
    site : "https://github.com/trumangift"
  }
```
