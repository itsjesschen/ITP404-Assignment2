<!doctype html>
<html>
<head>
	<title>Twitter Search App</title>
</head>
<body>

	<div id = "container">
		<h1>Twitter Search Page</h1>
		<form action = "<?php echo URL::to('twitter/results') ?>" method = "get">
			<input type = "text" name="userID">
			<input type = "submit" value = "Search">
		</form>
	</div>
</body>
</html>