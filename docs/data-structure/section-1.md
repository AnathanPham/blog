# 第一节：什么是数据结构
## 将书摆放到书架上
现在先考虑另外一个问题
> 给你一个书架，给你一堆书，你如何摆放这些书到书架上？
书摆好后，有两个问题
  1. 新来了一本书，你该摆在哪里？
  2. 我如何找到我想要的书？

数据结构和摆书一样 
> 给你一些内存，给你一堆数据,你如何将这些数据存入内存里面

数据结构常常和算法联系在一起，因为数据结构的设定会影响对数据操作的时间。

## 输出N
现在有这么两个函数
``` js
// 1
function printN(N){
  for(let i=1;i<=N;i++){
    console.log(i)
  }
}
// 2
function printN2(N){
  if(N>0){
    printN2(N-1)
    console.log(N)
  }
}
```
一个是循环，一个是递归。
我们分别将N设为100,10000,100000。
看看会发生什么。
::: tip
课程中老师使用的是**c语言**

当N为10万时：

函数1等待了一段时间，最终输出了期待的结果1~100000

函数2,没有任何输出
:::

## 多项式求值
> 计算 y = a<sub>0</sub>+a<sub>1</sub>x+a<sub>2</sub>x<sup>0</sup>+...+a<sub>n</sub>x<sup>n</sup>

最直接的计算方式
``` js
/*
  @params {Number} n 项数
  @params {Array<Number>} a 系数数组
  @params {Number} x 自变量
*/
function getY(n,a,x){
  let sum = 0
  for(let i=0;i<=n;i++){
    sum += a[i]*x**i
  }
  return sum
}
```
老师说这样的计算会被其他程序员鄙视:confused:

更好的办法：秦九韶算法
> y = a<sub>0</sub>+x(a<sub>1</sub>+x(a<sub>2</sub>+x(a<sub>3</sub>+...x(a<sub>n-1</sub>+a<sub>n</sub>x))))
``` js
/*
  @params {Number} n 项数
  @params {Array<Number>} a 系数数组
  @params {Number} x 自变量
*/
function getY2(n,a,x){
  let sum = a[n]*x
  for(let i=n;i>1;i--){
    sum = (sum+a[i-1])*x
  }
  sum+=a[0]
  return sum
}
```
上面是我写的 :worried: 僵硬了
下面是老师的
``` js
/*
  @params {Number} n 项数
  @params {Array<Number>} a 系数数组
  @params {Number} x 自变量
*/
function getY3(n,a,x){
  let sum = a[n]
  for(let i=n;i>0;i--){
    sum = sum*x+a[i-1]
  }
  return sum
}
```
然后是测试函数
``` js
function test(fn,times,xValue){
  let a = []
  let as = + new Date()
  for(let i=1;i<=times+1;i++){
    a.push(i)
  }
  let ae = + new Date()
  let aresult = '数组耗时:'+(ae-as)/1000+'秒'
  console.log('%c'+aresult,'color:#f00')
  let s = + new Date()
  for(let i=0;i<9999;i++){
    fn(times,a,xValue)
  }
  console.log(fn(times,a,xValue))
  let e = + new Date()
  let result = '耗时:'+(e-s)/1000+'秒'
  console.log('%c'+result,'color:#f00')
  return result
}
```
结果：优化的函数3比函数1快了5倍多
```
test(getY,100,3)
耗时:0.067秒
test(getY3,100,3)
耗时:0.012秒
```
:::tip
老师用的是c语言，重复了10<sup>7</sup>次

结论是函数3比函数1快了一个数量级（10倍+）
:::

## 到底什么是数据结构
>**数据对象**在计算机组织方式
数据对象必定与一系列操作相关联
完成这些操作的方法就是**算法**

### 抽象数据类型
+ 数据类型
  数据对象集合
  数据集合相关联的操作集合
+ 抽象：描述数据类型的方法不依赖与具体实现
  与存放数据的机器无关
  与数据存储的物理结构无关

### 矩阵(Matrix)
+ 数据对象集:
一个M\*N的矩阵A<sub>M\*N</sub>有M\*N个三元组&lt;a,i,j&gt;构成，其中a是矩阵的元素值，i是行号，j是列号。

+ 操作集:对任意矩阵A、B、C∈Matrix,以及整数i,j、M、N
  + MatrixCreate(M,N):返回一个M*N的空矩阵
  + GetMaxRow(A):返回矩阵A的总行数
  + GetMaxCol(A):返回矩阵A的总列数
  + GetEntry(A,i,j):返回矩阵A的第i行、第j列的元素
  + Add(A,B):如果A,B的行、列数一致，则返回矩阵C=A+B，否则返回错误标志
  + Multiply(A,B):如果A的列数等于B的行数，则返回C=AB，否则返回错误标志
  + ...
::: tip 抽象的好处
比如上面的 矩阵，我们不关心它是：

数组？链表？十字链表？二维数组？

比如上面的 方法，我们不关心它
如何计算？用什么语言？
:::




