/**
 * Created by zhengyunzhi on 16/10/17.
 */

var person1 = {
    "name":"Tom",
    "description":"I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......",
    "avatar":"../img/avatar11.png",
    "link":"#1"
};
var person2 = {
    "name":"Prince",
    "description":"nothing to say...",
    "avatar":"../img/avatar12.png",
    "link":"#2"
};
var person3 = {
    "name":"Huluwa",
    "description":"still going slow and I am so lone love is a fair gen bu shang ta chang de la ",
    "avatar":"../img/avatar13.png",
    "link":"#3"
};
var person4 = {
    "name":"jiao shenme haone",
    "description":"hahahahhahahahaha???",
    "avatar":"../img/avatar14.png",
    "link":"#4"
};
var person5 = {
    "name":"Tom",
    "description":"I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......I am a flying fish......",
    "avatar":"../img/avatar15.png",
    "link":"#5"
};
var person6 = {
    "name":"Stan",
    "description":"you know how I hate coding!!!",
    "avatar":"../img/avatar16.png",
    "link":"#6"
};

// for followers and follows
function create_person_intro(person){
    var result = $("<div></div>").attr("class","row panel");
    var new_div = $("<div></div>").attr("class", "media col-lg-11 col-md-11 col-sm-8").appendTo(result);
    var new_link = $("<a></a>").attr({
        "class": "pull-left",
        "href": person.link
    }).appendTo(new_div);
    $("<img />").attr({
        "class":"media-object img-rounded",
        "src":person.avatar
    }).appendTo(new_link);
    var avatar_body = $("<div></div>").attr("class","media-body").appendTo(new_div);
    $("<h4></h4>").attr("class","media-heading").html(person.name).appendTo(avatar_body);
    $("<p></p>").html(person.description).appendTo(avatar_body);
    $("<button></button>").attr({"class":"btn btn-primary col-lg-1 col-md-1 col-sm-3"}).html("follow").appendTo(result);
    return result;
}