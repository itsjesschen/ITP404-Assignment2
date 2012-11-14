<?php

class Twitter_Controller extends Base_Controller {


	public function action_index(){
		return View::make('home.search');
	}

	public function action_results(){
		$searchID = Input::get('userID');
		$searchID = urlencode($searchID);

		$Twitter = new Twitter($searchID);
		$Tweets = $Twitter->SearchForUser($searchID);

		$data = array(
			'ID' => $searchID,
			'tweets' => $Tweets
		);
					// echo HTML::image('img/01_background.jpg');//, $alt_text);
		return View::make( 'home.results', $data);
	}
}