//定位菜单
$(function(){
	var oNav = $('#nav'),
		oNav_SH =oNav.offset();
	$(document).on('scroll',function(){
		var	oDoc_SH = $(document).scrollTop();
//        alert(c);
		if(oDoc_SH>=80)
        {
            oNav.css({'position':'fixed','top':'0px','display':'block'})
        }
        else
        {
            oNav.css({'display':'none'})
        }
		})
	})