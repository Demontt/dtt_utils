let icon = [' ☀️',' ⛅',' ☁️',' 🌦️',' ⛈️',' 🌨️',' ☔',' 🌧️',' ⛆',' ❄️',' 🌫️',' 🌁'];
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
        default:
            break;
    }
    console.log(type);
    return type;
}
$("#select_city").change( function() {
    city = $(this).val();
    //console.log(city);
    $.ajax({
		url: 'http://wthrcdn.etouch.cn/weather_mini',
		type: 'get',
		data: {
			city:city
		},
		dataType: 'json',
		success: function (resp) {
			//console.log(resp);
			var date_data=resp.data.forecast[0].date;
			var data_len=date_data.substr(0,3);
			var data_len_day=date_data.substr(3,3);
			//console.log(data_len_day);
			var date1=new Date();
			var dateMon=date1.getMonth()+1;
			var dateDay=date1.getDay();
			$("#data span span").html(dateMon+'月'+data_len+" "+data_len_day);
			$('#main tr:nth-of-type(1) td:nth-of-type(1)').html(resp.data.city);
			$('#main tr:nth-of-type(1) td:nth-of-type(2)').html(w_icon(resp.data.forecast[0].type));
			$('#main tr:nth-of-type(2) td:nth-of-type(1)').html(resp.data.wendu+"℃");
			$('#main tr:nth-of-type(2) td:nth-of-type(2)').html(resp.data.forecast[0].fengxiang);
		    $('#main tr:nth-of-type(3) td:nth-of-type(1)').html(resp.data.forecast[0].high);
			$('#main tr:nth-of-type(3) td:nth-of-type(2)').html(resp.data.forecast[0].low);
			$('#main tr:nth-of-type(4) td').html(resp.data.ganmao);
			$('#forecast table tbody').empty();
			for(var i=0;i<resp.data.forecast.length;i++){
			var str = resp.data.forecast[i].fengli;
			var str_fengli=str.substring(9, str.length - 3)
				var forword_day="<tr class='success'><td>"+dateMon+'月'+resp.data.forecast[i].date+"</td><td>"+w_icon(resp.data.forecast[i].type)+"</td><td>"+resp.data.forecast[i].high+"</td><td>"+str_fengli+"</td><td>"+resp.data.forecast[i].low+"</td><td>"+resp.data.forecast[i].fengxiang+"</td></td>";
				$('#forecast table tbody').append(forword_day);
			}
		}
    })
})
$('#select_city').change();