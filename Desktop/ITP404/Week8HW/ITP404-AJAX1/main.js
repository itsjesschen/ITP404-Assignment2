document.getElementById('twitter-users').onclick = function(e) {

	var userID = e.target.id;
	var xhr = new XMLHttpRequest();
	var url = 'load_tweets.php?id=' + userID;
	console.log(url);
	xhr.open('GET', url, true);
	document.getElementById('tweets').innerHTML = '<img src = "ajax-loader.gif">';
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			document.getElementById('tweets').innerHTML = xhr.responseText;
			console.log('ready!');
		}else if (xhr.status >= 400 ) {
			console.log('There was an error!');
		}

	}
	xhr.send(null);
};

$('#tweets').on("click", "li", function(e){
	$this = $(this);
	console.log($this);
	read($this);
});


// document.getElementById('slicknet').onclick = ajax();
// document.getElementById('jeffrey_way').onclick = ajax();
// document.getElementById('codylindley').onclick = ajax();
// document.getElementById('rmurphey').onclick = ajax();
var read = function(element){
	$(element).addClass("read");
	//element.className += " read" ;
	//console.log(element);
};