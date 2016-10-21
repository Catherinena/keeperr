/**
 * Created by zhengyunzhi on 16/10/18.
 */

//button change style
var arr =  $(".nav-buttons");
for(var i=0; i<arr.length;i++){
    $(arr[i]).mouseenter(function(){
        $(this).addClass("btn-primary");
        $(this).removeClass("btn-link")
    });
    $(arr[i]).mouseleave(function(){
        $(this).addClass("btn-link");
        $(this).removeClass("btn-primary");
    });
}
//end