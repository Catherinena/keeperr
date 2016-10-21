

var person = {
	"name":"koawitch",
	"distription":"love sleeping and hate staying night, but often have to code till midnight............(╯‵□′)╯︵┻━┻",
	"avatar":"../img/avatar2.jpg",
	"follow": 24,
	"follower": 125
};


function get_profile(person){
	var new_div = $("<div></div>").attr({"class": "thumbnail", "style":"max-width:300px"});
	$("<img></img>").attr({
		"class":"img-rounded",
		"src":person.avatar
		}).appendTo(new_div);
	var more_detail = $("<div></div>").attr("class", "caption text-center").appendTo(new_div);
	$("<h3></h3>").html(person.name).appendTo(more_detail);
	$("<p></p>").html(person.distription).appendTo(more_detail);
	$("<hr/>").appendTo(more_detail);
	var new_p = $("<p></p>").appendTo(more_detail);
	$("<label></label>").html("follow:").appendTo(new_p);
	$("<a></a>").attr("href","#1").html(person.follow).appendTo(new_p);
	$("<label></label>").html("follower:").attr("style", "margin-left: 60px;").appendTo(new_p);
	$("<a></a>").attr("href","follower.html").html(person.follower).appendTo(new_p);
	return new_div;
}

$("#modify_button .btn").attr("style", "width:"+$("#owner_profile").width);