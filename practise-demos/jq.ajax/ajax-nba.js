$.ajax({
    url: './ajaxnba.json',
    type :'GET',
    success: function(res){
//        console.log(res);  
        var NbaTeam = res.data.NbaTeam;
        var goodsDOM = []; //定义一个新数组
        for(var i=0; i<NbaTeam.length; i++){
            var html = "<tr><td class='gray1 gray2 bold'>" + NbaTeam[i].num +"</td>" +
                       "<td>"+"<img"+" "+'src='+NbaTeam[i].iurl+" "+"/>" + NbaTeam[i].name +"</td>" +
                       "<td>" + NbaTeam[i].win +"</td>" +"<td>" + NbaTeam[i].lose +"</td>"+
                       "<td>" + NbaTeam[i].dis +"</td></tr>";  
            goodsDOM.push(html);  //推送html到goodsDOM数组
        }
        $('#oTable').append(goodsDOM); //将循环完的goodsDOM 添加到 id为goods 的标签下。
        $('#oTable tr:odd').addClass("gray");
        $('#oTable tr:even').find('td').removeClass("gray2");
        $("#oTable tr:eq(8)").addClass("blue-border");
        
//        $("#oTable tr td:eq(0)").addClass("green");
//        $("#oTable tr td:eq(4)").addClass("green");
            
            
//        $("#oTable").find("tr").has("td").eq(0).addClass("green");
//        alert(goodsDOM[6].tr);
    },
    error: function(res){
        alert("请求失败,请检查你的网络设置");
    },
    });
