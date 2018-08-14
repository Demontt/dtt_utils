# DTT's weather forecast

## ScreenShot image
![image](/img/example.png)

## use bootstrap-select
* Screenshot
* ![image](/img/bo-select-example.png)
* Add choose cityname by selecting and inputing cityname with chinese name or english name. For example, if you want to choose nanjing['南京'], you can input 'nanjing' or '南京'. 
* *Remember, all characters are lowercase.*
* The current rules are as follows.

## Range cities[目前天气预报范围城市] :
```
-- Jiangsu
    --- 南京 || nanjing
    --- 江宁 || jiangning
    --- 浦口 || pukou
    --- 无锡 || wuxi
    --- 江阴 || jiangyin
    --- 苏州 || suzhou
    --- 常熟 || changshu
    --- 张家港 || zhangjiagang
-- Guangzhou
    --- 广州 || guangzhou
    --- 番禺 || fanyu
    --- 汕头 || shantou
    --- 潮阳 || chaoyang
    --- 深圳 || shenzhen
-- Shanghai
    --- 上海 || shanghai
    --- 闵行 || minhang
    --- 宝山 || baoshan
    --- 嘉定 || jiading
-- Beijing
    --- 北京 || beijing
    --- 海淀 || haiding
    --- 朝阳 || zhaoyang
    --- 顺义 || shunyi
-- Hongkong
    --- 香港 || hongkong
    --- 九龙 || kowloon
    --- 新界 || newterritories
```
## weather icon
* current weather icon
```
let icon = [' ☀️',' ⛅',' ☁️',' 🌦️',' ⛈️',' 🌨️',' ☔',' 🌧️',' ⛆',' ❄️',' 🌫️',' 🌁'];
```
* The mapping between icons and weather is as follows.
```
icon[0]  : '晴'
icon[1]  : '多云' 
icon[2]  : '阴' 
icon[3]  : '阵雨'
icon[4]  : '雷阵雨'
icon[5]  : '雨夹雪', '阵雪', '小雪'
icon[6]  : '小雨'
icon[7]  : '中雨', '大雨'
icon[8]  : '暴雨', '大暴雨', '特大暴雨'
icon[9]  : '大雪', '暴雪'
icon[10] : '霾'
icon[11] : '雾'
```

## ajax Request
```
http://wthrcdn.etouch.cn/weather_mini
```

## Problems not currently resolved
* https page request http page by ajax

* solved problem
+ [Reference URL](https://github.com/BlueSky-07/PHP_AJAX)
+  Reference Code ajax.php
