<?php

function redirect($url) {
	header('Location: ' . $url);
}

function validateemail($email){
	$domains = array('yahoo.com', 'gmail.com', 'usc.edu', 'hotmail.com', 'aol.com');
	$email=trim($email);
	$isFound = strpos($email, "@");
	if(isset($isFound)){ //is found
		foreach($domains as $d){
			if (substr( $email, $isFound +1, strlen($email)) === $d ){
				return true;
			}
		}
	}
	return false;
}

?>