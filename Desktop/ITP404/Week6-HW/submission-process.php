<?php
	require('functions.php');

	if (!isset($_POST['submit'])) {
		redirect('form.php');
	}
?>

<html>
<head>
	<title></title>
</head>
<body>

<?php
	if (isset($_POST['submit'])) {
		$name = $_POST['name']; // query string parameter
		$email = $_POST['email'];
		$message = $_POST['message'];

		if (validateemail($email) && !empty($name) && !empty($message)){
			echo "<p>Thanks you, $name, for your submission.</p>";	
		}else{
					header('Location: form.php');
		}

	}
 	else {
		header('Location: form.php');
	}
?>

</body>
</html>
