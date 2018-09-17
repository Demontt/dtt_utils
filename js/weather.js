let icon = [' ☀️',' ⛅',' ☁️',' 🌦️',' ⛈️',' 🌨️',' ☔',' 🌧️',' ⛆',' ❄️',' 🌫️',' 🌁',' 🌀'];
function w_icon(type){
    switch(type){
        case '晴'   :
            type+=icon[0];
            break;   
        case '多云'  :
            type+=icon[1];
            break;  
        case '阴'   :
            type+=icon[2];
            break;   
        case '阵雨'  :
            type+=icon[3];
            break;  
        case '雷阵雨' :
            type+=icon[4];
            break; 
        case '雨夹雪' :
            type+=icon[5];
            break; 
        case '小雨'  :
            type+=icon[6];
            break;  
        case '中雨'  :
            type+=icon[7];
            break;  
        case '大雨'  :
            type+=icon[7];
            break;  
        case '暴雨'  :
            type+=icon[8];
            break;  
        case '大暴雨' :
            type+=icon[8];
            break; 
        case '特大暴雨':
            type+=icon[8];
            break;
        case '阵雪'  :
            type+=icon[5];
            break;  
        case '小雪'  :
            type+=icon[5];
            break;  
        case '大雪'  :
            type+=icon[9];
            break;  
        case '暴雪'  :
            type+=icon[9];
            break;  
        case '雾'   :
            type+=icon[11];
            break;   
        case '霾'   :
            type+=icon[10];
            break; 
        case '大到暴雨' :
            type+=(icon[8]+icon[12]);
            break;  
        default:
            break;
    }
    console.log(type);
    return type;
}

function mytime(time){
    //20180917113000
    let week = ['日','一','二','三','四','五','六'];
    if(time.length>=8) {
        let c = parseInt(time.substr(0,2));
        let y = parseInt(time.substr(2,2));
        let m = parseInt(time.substr(4,2));
        let d = parseInt(time.substr(6,2));
        let w = y+parseInt(y/4)+parseInt(c/4)-2*c+parseInt(26*(m+1)/10)+d-1;
        let str = m+"月"+d+"日"+" 星期"+week[w%7];
        return str;
    } else {
       return 'Time Error'; 
    }
}
function myfor(data){
    return "<tr class='success'><td>"+mytime(data.day)+"</td><td>"+w_icon(data.day_weather)+" 转 "+w_icon(data.night_weather)+"</td><td>"+data.day_air_temperature+"℃</td><td>"+data.night_air_temperature+"℃</td><td>"+data.day_wind_direction+"</td><td>"+data.day_wind_power+"</td></td>";
}

function todo(data){
    $("#data span span").html(mytime(data.time));
    $('#main tr:nth-of-type(1) td:nth-of-type(1)').html(data.cityInfo.c5);
    $('#main tr:nth-of-type(1) td:nth-of-type(2)').html(w_icon(data.now.weather));
    $('#main tr:nth-of-type(2) td:nth-of-type(1)').html(data.now.temperature+"℃");
    $('#main tr:nth-of-type(2) td:nth-of-type(2)').html(data.now.wind_direction+" "+data.now.wind_power);
    $('#main tr:nth-of-type(3) td:nth-of-type(1)').html(data.f1.day_air_temperature+"℃");
    $('#main tr:nth-of-type(3) td:nth-of-type(2)').html(data.f1.night_air_temperature+"℃");
    $('#main tr:nth-of-type(4) td:nth-of-type(1)').html(data.now.sd);
    $('#main tr:nth-of-type(4) td:nth-of-type(2)').html(data.now.aqiDetail.quality);
    $('#main tr:nth-of-type(5) td').html(data.alarmList[0].issueContent);
    $('#main tr:nth-of-type(6) td:nth-of-type(2)').html(data.f1.index.clothes.desc);
    $('#main tr:nth-of-type(6) td:nth-of-type(3)').html(data.f1.index.clothes.title);
    $('#main tr:nth-of-type(7) td:nth-of-type(2)').html(data.f1.index.cold.desc);
    $('#main tr:nth-of-type(7) td:nth-of-type(3)').html(data.f1.index.cold.title);
    $('#main tr:nth-of-type(8) td:nth-of-type(2)').html(data.f1.index.xq.desc);
    $('#main tr:nth-of-type(8) td:nth-of-type(3)').html(data.f1.index.xq.title);
    $('#main tr:nth-of-type(9) td:nth-of-type(2)').html(data.f1.index.yh.desc);
    $('#main tr:nth-of-type(9) td:nth-of-type(3)').html(data.f1.index.yh.title);
    $('#main tr:nth-of-type(10) td:nth-of-type(2)').html(data.f1.index.gj.desc);
    $('#main tr:nth-of-type(10) td:nth-of-type(3)').html(data.f1.index.gj.title);
    $('#main tr:nth-of-type(11) td:nth-of-type(2)').html(data.f1.index.travel.desc);
    $('#main tr:nth-of-type(11) td:nth-of-type(3)').html(data.f1.index.travel.title);
    $('#forecast table tbody').empty();
    var forword_day = myfor(data.f1)+myfor(data.f2)+myfor(data.f3)+myfor(data.f4)+myfor(data.f5)+myfor(data.f6)+myfor(data.f7);
    $('#forecast table tbody').append(forword_day);
}
// todo(data.showapi_res_body);

$("#select_city").change( function() {
    city = $(this).val();
    console.log(city);
    $.ajax({
        url : "http://saweather.market.alicloudapi.com/area-to-weather",
        type: 'get',
        data: {
            area:city,
            needAlarm:1,
            needIndex:1,
            needMoreDay:1
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "APPCODE yourcode");//此处是自己的appcode。
        },
        success : function(data) {
            todo(data.showapi_res_body);
        },
        error : function(e) {
            alert("网络异常，请重试");
        }
    });
});
$('#select_city').change();

