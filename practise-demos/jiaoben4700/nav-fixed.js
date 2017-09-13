//定位菜单
$(function(){
	var a = $('#nav'),
		b =a.offset();
	$(document).on('scroll',function(){
		var	c = $(document).scrollTop();
//        alert(c);
		if(c>=80)
        {
            a.css({'position':'fixed','top':'0px','display':'block'})
        }
        else
        {
            a.css({'display':'none'})
        }
		})
	})