
var activity1 = {
	"name":"MMM",
	"people": 10,
	"introduction":"this is a competition of our own organization, other people are not suggested to join.",
	"champion": {
		"name": "XXX",
		"avatar": "../img/avatar1.jpg"
	},
	"district":"Beijing",
	"activity":"2016-06-01 to 2016-06-22",
	"type":"singlePK",
	"id":"act_01"
};

var activity2 = {
	"name":"Let's run",
	"people": 8,
	"introduction":"this is a competition of our own organization, other people are not suggested to join.",
	"champion": {
		"name": "XXX",
		"avatar": "../img/avatar1.jpg"
	},
	"district":"Shanghai",
	"activity":"2016-07-01 to 2016-07-12",
	"type":"MultiPeople Competition",
	"id":"act_02"
}

var activity3 = {
	"name":"Color Run",
	"people": 64,
	"introduction":"this is a competition of our own organization, other people are not suggested to join.",
	"champion": {
		"name": "XXX",
		"avatar": "../img/avatar1.jpg"
	},
	"district":"Shanghai",
	"activity":"2016-08-01 to 2016-08-12",
	"type":"Target Competition",
	"id":"act_03"
}

var activity4 = {
	"name":"Round Riding",
	"people": 565,
	"introduction":"this is a competition of our own organization, other people are not suggested to join.",
	"champion": {
		"name": "XXX",
		"avatar": "../img/avatar1.jpg"
	},
	"district":"Shanghai",
	"activity":"2016-08-01 to 2016-08-12",
	"type":"MultiPeople Competition",
	"id":"act_04"
}


function createActivity(activity){
//	var ul = $("#activities");
//	var ul = document.getElementById("activities");
	var num = activity.people;
	var new_li;
	if(0<num&&num<10){
		new_li = $("<li></li>").attr("class","unit activity-blue");
	}else if(10<=num&&num<50){
		new_li = $("<li></li>").attr("class","unit activity-green");
	}else if(50<=num&&num<200){
		new_li = $("<li></li>").attr("class","unit activity-orange");
	}else if(200<=num){
		new_li = $("<li></li>").attr("class","unit activity-pink");
	}else{
		alert("the people number cannot be negative");
		return;
	}
	new_li.attr("id", activity.id);
	new_li.mouseenter(function(){
		$(this).removeClass("active");
		$(this).addClass("active");
	});
	new_li.mouseleave(function(){
		$(this).removeClass("active");
	})
	
	var new_title = $("<div></div>").attr("class","activity-title").appendTo(new_li);
	var new_body = $("<div></div>").attr("class","activity-body").appendTo(new_li);
	var new_foot = $("<div></div>").attr("class","activity-foot").appendTo(new_li);
	
	$("<h3></h3>").html(activity.people+" people").appendTo(new_title);
	$("<p></p>").html(activity.name).appendTo(new_title);
	
	$("<p></p>").html("introduction").attr("class", "head-intro").appendTo(new_body);
	$("<p></p>").html(activity.introduction).appendTo(new_body);
	var new_body_ul = $("<ul></ul>").appendTo(new_body);
	$("<li></li>").html(activity.district).appendTo(new_body_ul);
	$("<li></li>").html(activity.type).appendTo(new_body_ul);
	$("<li></li>").html(activity.activity).appendTo(new_body_ul);


	var new_like = $("<button></button>").attr({
		"type":"button",
		"class": "btn btn-primary join"
	});
	new_like.html("join").appendTo(new_foot);
	var new_detail = $("<button></button>").attr({
		"type":"button",
		"class":"btn btn-primary detail"
	});
	new_detail.html("detail").appendTo(new_foot);
	return new_li;
}

function my_create_activity(activity){
	var activity = createActivity(activity);
	var tmp = activity.find(".join");
	tmp.removeClass("join");
	tmp.addClass("delete");
	tmp.html("delete");
	return activity
}

function my_join_activity(activity) {
	var activity = createActivity(activity);
	var tmp = activity.find(".join");
	tmp.removeClass("join");
	tmp.addClass("exit");
	tmp.html("exit");
	return activity
}


