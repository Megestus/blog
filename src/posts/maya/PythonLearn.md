---
title: PythonLearn
icon: fa-brands fa-python
category:
  - maya
tag:
  - maya
  - Python

star: 1
---

学习Python基础的一些笔记

<!-- more -->


先看这个文档再看其他的。  -Python快速入门教程文档-  
[Maya Python教程 - myDoc](https://doc.megestu.top/project-2/)

[Maya Python脚本语法编写全面基础入门视频教程](https://www.bilibili.com/video/BV1T5411H7CT?p=5)



&ensp; 



## 1.常用基础知识


###  命令文档

[maya pyhton命令文档](https://help.autodesk.com/view/MAYAUL/2020/CHS/index.html?contextId=COMMANDSPYTHON-INDEX) 
也可以右键选择 **命令文档** 进行打开

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/menu1.png" />
</div>

<style>

  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }

</style>

### 调用python访问命令API


```python
from maya import cmds
#转换-maya命令库提供给python使用
```


---
###  mel python语句对比

```python

# polyCube -w 10 -h 10 -d 10 #这段则是mel的创建命令
from maya import cmds #转换命令库
cmds.polyCube(w=10,h=10,d=10)

#select -cl  ;#maya的取消 
cmds.select(clear=True) #这样一来就可以创建并取消选择对象

#select -r pCube1 ;  maya里选择对象写法
#doDelete; 删除
cmds.select('pCube1',replace=True)  # 选择（‘对象’，引用是正确的）
cmds.delete()                       #删除（）里的对象

```

---
### 小牛试刀 - py创建模型


``` python
from maya import cmds
print cmds.polyCube( sx=5, sy=5, sz=5)

```
<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/cube1.png" />
</div>


&ensp; 

## 2.变量

变量的概念： 就是指认==没有固定的值，可以改变的数==，以非数字的符号来表达，称为变量。

1. 变量赋值：通过使用等号（=）运算符，你可以将一个值赋给变量。例如：`x = 5`

2. 变量命名规则：  
    - 变量名必须以字母或下划线开头，并且只能包含字母、数字和下划线。
    - 大小写敏感：`myVar` 和 `myvar` 是两个不同的变数。
    - 避免使用 Python 关键词（如 `print`, `if`, `for` 等）作为变数名。


&ensp;

### 2.1-认识变量的简单类型

### 字符串 'str'  
对象类型- ==字符串==     -通常用于表示单词或句子

```python

name='my' #赋予字符串  
type(name) # 类型（字符串）查询
# 结果: <type 'str'> # 结果可以看到提示为 str 字符串
name = name+'20' #基于原来的赋值相加  因为name已经存过一次数值在内存当中
print name        #打印
my20         #返回值
name.upper() #还可以更改大小写
# 结果: 'my20' # 
 name.lower()
# 结果: 'my20' #标签 
```

### 整数 'int'
对象类型- ==整数==     整数代表的是数字

```python
age=20        #整数也就是没有小数点的数
type(age)
# 结果: <type 'int'> #   结果可以看到提示为 int  整数

age= age+2  #上面设置了年龄等于20  那么再相加打印出来就等于22
age
# 结果: 22 #    

name + age
# 错误: TypeError: file <maya console> line 1: cannot concatenate 'str' and 'int' objects #   这里提示到错误，不允许两种不同的类型链接。需要转换为同一个类型才能得到正确返回值 ，上面说到字符串可以是任何数，可以转换为字符串

name + str(age)       #转换age为字符串 
# 结果: 'my22' #   这样就能得到正确的返回值

```

### 浮点 'float'
对象类型- ==浮点== float 

```python
age = 22.5      #设置小数点的话，那么整数就会变成浮点
type(age)
# 结果: <type 'float'> #  #这里返回值 就为 float 浮点

```

### 布尔 'bool' 
对象类型- ==布尔==  bool

```python
lying = False    # 谎言 等于 假 布尔值
type(lying) 
# 结果: <type 'bool'> #  显示为布尔类型

lying = not lying  #这时候加上 not不等于原来的布尔值 那么就等于 真
print lying   
# 结果: True #    那么lyling就得到是 真 的返回值 

```


### 非类型 'NoneType'
对象类型 - ==非类型==  None

```python
nothing = None   #就是没有  设置对象为空 也可以把原有的对象的值设置没
type(nothing)
# 错误: TypeError: file <maya console> line 1: 'NoneType' object is not callable #  提示没类型

my ='hahaha'
my
# 结果: 'hahaha' # 返回为 hahaha
my =None
my        #返回为空

```
&ensp;

### 2.2-认识变量的合集类型

### 列表 'list'
首先是 ==列表== list

```python

list
# 结果: <type 'list'> #  类型为列表

myList =[name,age,lying]    #那么我的列表内 为名字+年龄+是否
myList 
# 结果: ['my', 22.5, True] # 那么就得到对应的列表内容

name ='liangzai'     #这时候把名字改为靓仔 
list              #再打一次
# 结果: ['my', 22.5, True]  #则显示结果还没改过来，是因为
                 #zhubin这个值是前面创建的。如果想把列表中的第一一个值改为
                 #靓仔，则需要把对应的列表数位改等刚刚设置的对象。
                 
myList[0]= name  #电脑中数字的开始都是012并不是123所以第一个单位是0
myList
# 结果: ['liangzai', 22.5, True] #  可以看到它取代了前一个值

list[1] = 18   #我把年龄改为18 那么下面得到的结果就是 18岁没错
list
# 结果: ['liangzai', 18, True] # 

```

### 元组 tuple
元组 tuple 用小括号  和列表的区别是他是不可变的

```python
mytuple = (bin,18,True)
mytuple
# 结果: (None, 18, True) # 

```

### 字典 Dict
操作符，用花括号 { } 形象的说就是用来操作数据的工具， 
包括数学操作符， 比较操作符， 逻辑操作符

```python
mydict = {name:'my',age:100,lying:False}
mydict
# 结果: {True: False, 18: 100, 'hahaha': 'my'} # 
#就返回了  修改的对象，但是并不是实际的命令
list
# ['liangzai', 18, True] # 
#就感觉单纯的改引号，没啥用处的样子...

```
&ensp;

## 3.实战环节

### 使用变量

```python
from maya import cmds #首先还是调用API

cube = cmds.polyCube()     #定义变量cube   为创建一个box
circle = cmds.circle()     #定义变量circle 为创建一个曲线圈

cmds.parent(cube[0],circle[0])
                              #执行 父子链接P 对象cube 和circle 从列表
                              #的第一个开始算起
                              #这样就能不断的调用名为cube和circle的变量
                              #进行P绑定
                              #因为是数列嘛，然后回有很多，如果是直接执行#创建box的话 这样名字就对象名字就锁定为一个了。就不能批量绑定。

```


### for  循环

是指 一个对象执行完成后到下一个对象执行同一遍的操作 直至最后一个对象完成  
可以查看[文档](https://doc.megestu.top/doc/5/)中的for循环的详细说明

```python
from maya import cmds

objectList = ['cube','sphere','cone']

for obj in objectList:  #for循环:后回车回生成前4个空格进缩，正好为4个格子
    print "the object name is", obj  

```
 返回值
```python
the object name is cube 
the object name is sphere
the object name is cone  
```

```python
objectList = [cmds.polyCube,cmds.polySphere,cmds.polyCone]
for obj in objectList:
    obj()
    #这样就能得到几个不同的polymesh。
    
cmds.polyCube（）     
cmds.polySphere（） 
cmds.polyCone（）
  #这样这是原始的创建方法-使用for循环创建的话，就能再数列当中无限加对象，并且还可以定义循环很多次。
```

### while循环 
这与for循环有点相似，但不是再列表里，有点像是判断，判断对了就执行真，如果错了就执行假，假就一直循环直至到真，就结束。当然，没有真的结果给它的话，就会不断的执行，直至你的内存满了，或者软件崩溃。需要多多注意。一定要给判定结果。

```python
i = 0
while i < 20:
    print i
    i = i + 1
```
<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/while循环.png" />
</div>


###  if 和 eles 语句条件

一个相等的符号 ,赋予一个值，一个双重相等的符号比较它

```python
from maya import cmds

numObjects = 5           
mode = "Cone"         

for n in range(numObjects):     # "for"循环  
    if mode == "Cube":  
        obj = cmds.polyCube()
    elif mode == "Sphere":
        obj = cmds.polySphere()
    elif mode == "Cone":
        obj = cmds.polyCone()
    else:
        print "出错了，打印一下"
        cmds.error("报错啦，除了Cube，Sphere，Cone，都不能执行~~~")

```

### 设置对象参数 setAttr()

`setattr()` 是 Python 的一个内置函数，用于设置对象的属性值。它接受三个参数：对象、属性名和要设置的值。

以下是 `setattr()` 函数的语法：
```python
setattr(对象, 属性名, 值)
```

解释一下这些参数：
- **对象**：表示要修改其属性值的对象。
- **属性名**：表示要修改或添加到该对象中的属性名称。
- **值**：表示将被赋给指定属性的新值。

使用 `setattr()` 函数时，可以动态地在运行时为一个已存在或全新创建（如果不存在） 的类实例添加、更新或更改特定名称和对应类型的任意数量和类型字段。这对于需要根据程序逻辑进行灵活操作并根据不同条件来调整类实例中某些字段非常有用。

示例:
```python
from maya import cmds

obj = cmds.polyCube()   // 定义对象obj=创建一个cube

cmds.setAttr(obj[0]+'.translateX',random.randint(0,20)
```

1. `cmds.setAttr()`：设置对象属性值。
2. `obj[0]`：通过索引运算符 `[0]`，从名为 "obj" 的列表中获取第一个元素。假设该列表包含了要操作的对象名称。
3. `'.' + 'translateX'`：将字符串 ".translateX" 添加到前面获取到的对象名称之后，以构建完整属性路径。表示要修改或设置 "translateX" 属性。
4. `random.randint(0,20)`：调用 random 模块中 randint() 函数生成介于 0 和 20 （包括两个边界）之间（即闭区间） 的随机整数作为新属性值。

&ensp; 

###  小总结

实现-创建模型-然后选择模型-然后进行范围性随机散部。

```python
from maya import cmds
import random

def createObjects(mode,numObjects=5):  #定义函数
    objList = []  #存储在 objList 列表中
    
    for n in range(numObjects):  #定义循环迭代对象
        if mode == 'Cube':     #如果mode是cube
            obj = cmds.polyCube()  #那么就创建cube
        elif mode == 'Sphere':   #如果mode是Sphere
            obj = cmds.polySphere() #那么就创建Sphere
        else: #如果都不是
            cmds.error("I can't create it") #那就报错-说 "I can't create it"
            
        objList.append(obj[0]) #将创建的对象名称添加到 `objList` 列表中。这里使用了索引 `[0]` 来获取创建对象返回列表中的第一个元素。
        
    return objList    # 将包含所有创建对象名称的列表作为函数结果返回
           
createObjects('Cube', 3)    #调用 `createObjects('Cube', 3)` 后，将会得到一个包含三个立方体对象名称的列表。
```

```python

def randomize(objList=None, minValue=0, maxValue=10):
    if objList is None: 
        objList = cmds.ls(selection=True)   # 获取当前选择的物体，并添加到objlist中
        
    for obj in objList:
        cmds.setAttr(obj+'.tx', random.randint(minValue,maxValue))
        cmds.setAttr(obj+'.ty', random.randint(minValue,maxValue))
        cmds.setAttr(obj+'.tz', random.randint(minValue,maxValue))

randomize()   #随机模型   
```
1. 首先，定义了一个函数：
    - `randomize(objList=None, minValue=0, maxValue=10)`：此函数用于随机化给定对象列表中对象的位置属性。它接受三个参数：objList 表示要随机化的对象列表，默认为 None；minValue 和 maxValue 表示位置属性取值范围，默认分别为 0 和 10。如果未提供 objList 参数，则使用 Maya 中当前选择的物体作为默认值。
2. 在函数内部：
    - 如果没有传入 objList 参数（即 objList is None），则通过 `cmds.ls(selection=True)` 获取当前在 Maya 中选择的物体，并将其赋值给 objList 变量。
3. 接下来，使用循环遍历传入或获取到的每个物体名称（存储在 obj 变量中）：
    - 使用 `cmds.setAttr()` 函数和 random.randint() 方法来设置每个物体对应轴向上 (tx、ty、tz) 的位置属性，在指定范围内生成一个随机整数，并将其赋值给相应轴向上该物体所属节点。

```python
#把上面的函数结合 
#创建对象-然后调用随机函数-把模型随机摆放
objList = createObjects('Cube', 5)  #创建对象+个数
randomize(objList)   #随机列表模型    

```


&ensp; 


## Strings 格式化  

>ps："%s"  它可以避免很多小错误-例如转换值。或者其他小错误

```python
"hallo my name is " + "ben"

# 结果: 'hallo my name is ben' # 

name = "ben"
"hallo my name is " + name
# 结果: 'hallo my name is ben' # 

"hallo my name is %s" %(name) 
# 结果: 'hallo my name is ben' # %s可以简单的替换当前位

"hallo my name is %s ,i am from %s and i am %s years old" % (name,"china",22)
# 结果: 'hallo my name is ben ,i am from china and i am 22 years old' # 
# 也能这样 按顺序替换 
"hallo my name is {} ,i am from {} and i am {} years old". format(name,"china",22)
# 结果: 'hallo my name is ben ,i am from china and i am 22 years old' # 
#花括号
"hallo my name is {0} ,i am from {1} and i am {2} years old". format(name,"china",22)
# 结果: 'hallo my name is ben ,i am from china and i am 22 years old' # 
#序号
"hallo my name is {name} ,i am from {age} and i am {country} years old". format(name=name,country="china",age=22)
# 结果: 'hallo my name is ben ,i am from 22 and i am china years old' # 
##还可以花括号定义对应的变量

```
&ensp; 

##  变量作用域 Variable Scopes 

 
讲到一个新概念  **作用域** ，顾名思义，作用在不同的环境区域。


| 简写  |  作用环境|  |
| -------------- | -------------- | -------------- |
|L= local   |  本地变量|  |
|E= Enclosed | 封闭变量  |在函数内的部调用 外部不能调用到的|
|G= Global   | 全局变量 | |
|B= Built-in  |内置变量 |在python  内置的变量 随时都可以访问|


```python
myGlobal = 'Glodal Value'              #这有三个变量-全局变量 封闭变量 本地变量 
                                       #还有两个封闭函数
def Enclosing():
    myEnclosing = 'Enclosing Value'
    def LocalFunction():
        myLocal = 'Local Value'
        print myLocal

    LocalFunction()

Enclosing()   
print object

```

&ensp; 

## 两种外部编辑调用方式

### 1.路径插件-调用

把代码命名存为 `random.py` -放到maya的插件路径。
 `C:\Users\xxx\Documents\maya\2018\scripts`


```python
from maya import cmds      
import random         #开头带上导入
            
from maya import cmds
import random

def createObjects(mode,numObjects=5):
	"""帮助-解释"""
    objList = []
    
    for n in range(numObjects):
        if mode == 'Cube':
            obj = cmds.polyCube()
        elif mode == 'Sphere':
            obj = cmds.polySphere()
        else:
            cmds.error("i dont konw what to create")
  
        objList.append(obj[0])
        
    return objList    


def randomize(objList=None, minValue=0, maxValue=10):
    if objList is None:
        objList = cmds.ls(selection=True)
        
    for obj in objList:
        cmds.setAttr(obj+'.tx', random.randint(minValue,maxValue))
        cmds.setAttr(obj+'.ty', random.randint(minValue,maxValue))
        cmds.setAttr(obj+'.tz', random.randint(minValue,maxValue))
 
```

在脚本编辑器上输入调用命令

```python
import random   #指认对应插件名称
random.createObjects('Cube', 5)    #创建对象个数
#单独执行某一命令
random.randomize(objList)       #随机模型
```

### 2.VsCode调用 Python环境部署


[Python开发Maya脚本插件 开发环境详细配置 （VS Code | PyCharm）](https://www.bilibili.com/video/BV1Cz4y1R7MC)  
按着这个视频部署好一些 不用那么多东西。

####  VsCode链接
重要：  
VsCode项目的python文件需要保存在对应maya文档插件目录下  
`C:\Users\xxx\Documents\maya\2020\zh_CN\scripts`

>Python 重载  因为插件一般调用只会自上而下执行一遍就没了 如果执行第二遍，会没反应，那么这时候就需要 reload()  



maya：
```python
import Text1
reload(Text1)  #()括号内要与pyfile名字一致
```

VsCode：

```python
from maya import cmds     

def showWindow():
    name = "tools"
    if cmds.window(name,query=True, exists=True):
        cmds.deleteUI(name)
    cmds.window(name)
    cmds.showWindow()

```



---


