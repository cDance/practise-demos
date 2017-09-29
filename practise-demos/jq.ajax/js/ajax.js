//$.ajax({
//    url: './com.cDance.data.json',
//    type :'GET',
//    success: function(res){
//        console.log(res);  
//        var list = res.data.list;
//        var goodsDOM = []; //定义一个新数组
//        for(var i=0; i<list.length; i++){
//            var html = "<li><span>商品名：" + list[i].name + "   "+ "</span><span>条形码：" + list[i].sku + "  " +"</span><span>价格：￥" + (list[i].price/100).toFixed(2)
//            + "</span></li>";
//            goodsDOM.push(html);  //推送html到goodsDOM数组
//        }
//        $('#goods').append(goodsDOM); //将循环完的goodsDOM 添加到 id为goods 的标签下。
//    },
//    error: function(res){
//        console.log("请求失败,请检查你的网络设置");
//    },
//    });


$.ajax({
    url: './ajaxnba.json',
    type :'GET',
    success: function(res){
//       $('body').("请求成功,正在跳转...");
        var NbaTeam = res.data.NbaTeam;
        var goodsDOM = []; //定义一个新数组
        for(var i=0; i<NbaTeam.length; i++){
            var html = "<li>" + NbaTeam[i].num + " " + NbaTeam[i].name  + "  " +NbaTeam[i].win + " "+NbaTeam[i].lose + " "+NbaTeam[i].dis  +"</li>";
            goodsDOM.push(html);  //推送html到goodsDOM数组
        }
        $('#goods').append(goodsDOM); //将循环完的goodsDOM 添加到 id为goods 的标签下。
    },
    error: function(res){
        alert("请求失败,请检查你的网络设置");
    },
    });
