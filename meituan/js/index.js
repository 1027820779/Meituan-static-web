$(function(){
//点击关闭广告
    $(".a_close").click(function(){
        $(".add_block").fadeOut(400);
    });

//    轮播图（6）
    var num=0;
    function run(){
        num++;
        if(num==6){
            num=0;
        }
        $(".fra ul li").eq(num).fadeIn("slow").siblings().stop().css({display:"none"});
        $(".sp_1").html(num+1);
    }
    var timer=setInterval(run,2000);

//鼠标移入停止
    $(".nav_slider_box").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(run,2000);
    });
//    手动切换
//    右切换
    $(".pre").click(function(){
        num++;
        if(num==6){
            num=0;
        }
        $(".fra ul li").eq(num).fadeIn("slow").siblings().stop().css({display:"none"});
        $(".sp_1").html(num+1);
    });
//    左切换
    $(".next").click(function(){
       num--;
        if(num==-1){
            num=5;
        }
        $(".fra ul li").eq(num).fadeIn("slow").siblings().stop().css({display:"none"});
        $(".sp_1").html(num+1);
    });

//    无缝滚动
    var num_one=0;
    function running(){
        num_one++;
        if(num_one==3){
            $(".right_slider_box ul").css({left:"0px"});
            num_one=1;
        }
        var l=num_one * -197;
        $(".right_slider_box ul").animate({left:l+"px"},500);
    }
    var s_timer=setInterval(running,1500);
    $(".right_slider_box").hover(function(){
        clearInterval(s_timer);
    },function(){
        s_timer=setInterval(running,1500);
    });

    $(".s_pre").click(function(){
        num_one++;
        if(num_one==3){
            $(".right_slider_box ul").css({left:"0px"});
            num_one=1;
        }
        var l=num_one * -197;
        $(".right_slider_box ul").animate({left:l+"px"},500);
    });
//    左切换
    $(".s_next").click(function(){
        num_one--;
        if(num_one==-1){
            $(".right_slider_box ul").css({left:"-394px"});
            num_one=1;
        }
        var l=num_one * -197;
        $(".right_slider_box ul").animate({left:l+"px"},500);
    });


//    名店抢购倒计时
    var s1=5;
    var s2=10;
    var m1=4;
    var m2=0;
    var h2=2;
    function time_run(){
        s2--;
        if(s2==-1){
            s2=9;
            s1--;
        }
        if(s1==-1){
            s1=5;
            m2--;
        }
        if(m2==-1){
            m2=9;
            m1--;
        }
        if(m1==-1){
            m1=5;
            h2--;
        }
        if(h2==0){
            clearInterval(time_timer);
        }
        $(".h2").html(h2);
        $(".m1").html(m1);
        $(".m2").html(m2);
        $(".s1").html(s1);
        $(".s2").html(s2);

    }
    var time_timer=setInterval(time_run,1000);



//    名店抢购滚动图
    var slide_one=0;
    function s_running(){
        slide_one++;
        if(slide_one==3){
            $(".m_slider_inner ul").css({left:"0px"});
            slide_one=1;
        }
        var l=slide_one * -1170;
        $(".m_slider_inner ul").animate({left:l+"px"},1000);
    }
    //timer
   var slider_timer=setInterval(s_running,2300);

    $(".m_slider_inner").hover(function(){
        clearInterval(slider_timer);
    },function(){
        slider_timer=setInterval(s_running,2300);
    });

    $(".ss_pre").click(function(){
        slide_one++;
        if(slide_one==3){
            $(".m_slider_inner ul").css({left:"0px"});
            slide_one=1;
        }
        var l=slide_one * -1170;
        $(".m_slider_inner ul").animate({left:l+"px"},800);
    });
//    左切换
    $(".ss_next").click(function(){
        slide_one--;
        if(slide_one==-1){
            $(".m_slider_inner ul").css({left:"-2340px"});
            slide_one=1;
        }
        var l=slide_one * -1170;
        $(".m_slider_inner ul").animate({left:l+"px"},800);
    });
//tab最下面
    $(".all_comment_help div ul li").click(function(){
        var $num=$(this).index();
        $(".all_comment_help div ul li").eq($num).css({background:"#eee"}).siblings(".all_comment_help div ul li").css({background:"#f9f9f9"});
        $(".comment_help_link").eq($num).css({display:"block"}).siblings(".comment_help_link").css({display:"none"});
    });




})