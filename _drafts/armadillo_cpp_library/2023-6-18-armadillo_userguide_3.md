---
layout: post
title:  Armadillo使用手册3
categories: [blog]
comments: true
tags: [blog, Armadillo, cpp]
---

> Armadillo是一个高性能的Cpp矩阵运算库，与Matlab的调用方式非常相似，对于熟悉Matlab的人来说，使用Armadillo库很方便。本文主要介绍Armadillo数据的保存和读取。

[toc]

<!--more-->

## 显示输出

> [print](https://arma.sourceforge.net/docs.html#print)

### 编程对应表

| Matlab | Armadillo | Notes |
| :--- | :--- | --- |
| `fprintf(formatSpec,A1,...,An)` | `printf(formatSpec,A1,...,An)` | 格式化输出显示|
| `disp(X)` | `X.print("X")/X.raw_print("X")/X.brief_print("X")` | 输出显示X矩阵|

### 示例介绍（matlab vs. cpp）

```cpp
// 1. 初始化A矩阵
// matlab
A = [1 2 3; 4 5 6; 7 8 9];
// cpp
A = {{1, 2, 3}, {4，5, 6}, {7, 8， 9}};

// 2. 格式化显示矩阵A中的（1，1）元素
// matlab
fprintf('A(1, 1) is %d\n', A(1, 1));
// cpp
printf('A(1, 1) is %d\n', A(0, 0));

// 3. 显示矩阵A
// matlab
disp(A);
// cpp
X.print("X");
X.raw_print("X");
X.brief_print("X");
```

## 数据保存和读取

> [save_load_mat](https://arma.sourceforge.net/docs.html#save_load_mat)

### 编程对应表

| Matlab | Armadillo | Notes |
| :--- | :--- | --- |
| `save(filename,variables)` | `.save( filename )` | 格式化输出显示|
| `load( filename )` | `.load( filename )` | 输出显示X矩阵|

### 示例介绍（matlab vs. cpp）

```cpp
// 1. 初始化A矩阵
// matlab
A = [1 2 3; 4 5 6; 7 8 9];
// cpp
A = {{1, 2, 3}, {4，5, 6}, {7, 8， 9}};

// 2. 保存A矩阵
// matlab
save('matrixA.mat', 'A');
// cpp
A.save("matrixA.bin");

// 3. 读取matrixA
// matlab
load('matrixA.mat', 'A');
// cpp
mat B;
bool = B.load("matrixA.bin");
if(ok == false){
  cout << "problem with loading" << endl;
}
```

## 推荐阅读

- [阿里又一个 20k+ stars 开源项目诞生，恭喜 fastjson！](https://mp.weixin.qq.com/s/RNKDCK2KoyeuMeEs6GUrow)

## Additional Resources

### Documentation

1. [pyarma](https://pyarma.sourceforge.io/docs.html)
2. [arma](https://arma.sourceforge.net)
3. [matrices-and-arrays](https://ww2.mathworks.cn/help/matlab/matrices-and-arrays.html)

### Useful Websites

1. [Armadillo使用说明¶](https://docs.hpc.sjtu.edu.cn/app/compilers_and_languages/armadillo.html)
2. [C++线代运算库Armadillo安装与使用](http://zhaoxuhui.top/blog/2020/10/11/armadillo-introduction-and-installation.html)