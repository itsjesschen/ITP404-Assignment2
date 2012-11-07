var script = document.createElement('script');
script.src = "http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_number=1&date=Future&keywords=linkin+park&callback=processJSONP";
document.body.appendChild(script);

function processJSONP(data) {
	console.log(data);
	for ( var i = 0; i < data.data.length; i++){
	var templateString = document.getElementById('fb-page-template').innerHTML;

	var template = Handlebars.compile(templateString);
	//console.log(data.data[i]);
	var html = template(data.data[i]);

	templateString = document.getElementById('more-info-template').innerHTML;
	template = Handlebars.compile(templateString);
	//console.log(data.data[i]);
	var innerhtml = template(data.data[i]);

	document.getElementById('fb-page').innerHTML += html;
	document.getElementById('fb-page').innerHTML += "<button type=\"button\" class =\"moreinfo\"> MORE INFO</button>"
	document.getElementById('fb-page').innerHTML += "<div class= \"extrainfo\" style=\"display: none;\">" + innerhtml + "</div>";
	}
}

$('#fb-page').on('click','.moreinfo', function(e) {

console.log(e.currentTarget);
var $this = $(this);
var disp = $this.next('.extrainfo').css('display'); 
if (disp === 'none'){ //not displayed 
	console.log('clicked');
	$this.next('.extrainfo').slideDown(300);
	$this.html("LESS INFO");
	}
	else {//if (disp === 'block'){//displayed
		$this.next('.extrainfo').slideUp(300);
		$this.html("MORE INFO");
	}
});

