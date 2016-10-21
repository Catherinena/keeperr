/**
 * Created by zhengyunzhi on 16/10/18.
 */

var moment1 = {
    "name": "Tom",
    "avatar": "../img/avatar1.jpg",
    "time":"2016/10/12 23:12",
    "content": "Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. ",
    "love": true,
    "love_num":123
};

var moment2 = {
    "name": "cc",
    "avatar": "../img/avatar3.jpg",
    "time":"2016/10/12 22:12",
    "content": "Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. ",
    "love": true,
    "love_num":123
};

var moment3 = {
    "name": "lala",
    "avatar": "../img/avatar12.png",
    "time":"2016/10/12 21:22",
    "content": "Koalas typically inhabit open eucalypt woodlands, and the leaves of these trees make up most of their diet. Because this eucalypt diet has limited nutritional and caloric content, koalas are largely sedentary and sleep up to 20 hours a day. ",
    "love": true,
    "love_num":123
};

var moment4 = {
    "name": "witch",
    "avatar": "../img/avatar15.png",
    "time":"2016/10/11 23:12",
    "content": "none",
    "love": false,
    "love_num":122
};

function get_moments(moment){
    var new_moment = $("<div></div>").attr("class", "events");
    var avatar = $("<div></div>").attr("class","pull-left").appendTo(new_moment);
    $("<img />").attr({
        "class":"events-object img-rounded community",
        "src":moment.avatar
    }).appendTo(avatar);
    var body = $("<div></div>").attr("class", "events-body").appendTo(new_moment);
    $("<h4></h4>").attr("class","events-heading").html(moment.name).appendTo(body);

    $("<p></p>").attr("class", "love_num").html(moment.love_num).appendTo(body);

    var path;
    if(moment.love==true){
        path = "../img/love.png";
    }else{
        path = "../img/love_not.png";
    }
    $("<img />").attr({
        "class":"love",
        "src": path
    }).appendTo(body);

    $("<p></p>").html("&nbsp-"+moment.time).appendTo(body)

    $("<p></p>").html(moment.content).appendTo(body);

    return new_moment;
}