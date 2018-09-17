# DTT's weather forecast

## ScreenShot image
![image](/img/example.jpg)

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
    --- 无锡 || wuxi
    --- 苏州 || suzhou
-- Guangzhou
    --- 广州 || guangzhou
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
let icon = [' ☀️',' ⛅',' ☁️',' 🌦️',' ⛈️',' 🌨️',' ☔',' 🌧️',' ⛆',' ❄️',' 🌫️',' 🌁',' 🌀'];
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
icon[8]+icon[12] : '大到暴雨'
```

## ajax Request
```
http://saweather.market.alicloudapi.com/area-to-weather
```
* This API interface needs to apply for itself.
* Application URL:https://market.aliyun.com/products/56928004/cmapi014123.html?spm=5176.730005.productlist.d_cmapi014123.5a5d3524VFR60W#sku=yuncode812300000

## ~~Problems not currently resolved~~
* ~~https page request http page by ajax~~

* ~~solved problem~~
+ ~~[Reference URL](https://github.com/BlueSky-07/PHP_AJAX)~~
+  ~~Reference Code ajax.php~~

## Problem resolced
* This new interface provides two access methods ,'https' and 'http'.
* Cross-domain problem solved.
