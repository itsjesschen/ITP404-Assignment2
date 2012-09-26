
//$('.content').first().hide();// which wrap set to get, index

$('.content').hide().first().show();

$('.label').on('mouseover', function() {
console.log('clicked');
var $this = $(this);
var disp = $this.next('.content').css('display');
if (disp === 'none'){ //not displayed 
	console.log('clicked');
			//$('.nav').slideDown(300); ..this is hardcoded
			// This doesn't "find" the next nav, this finds the next object only if it has "nav"
			$('.content').hide();
			$('.label').removeClass('active');
			$this.next('.content').slideDown(300);// this lets us only do the one that's clicked
			$this.addClass('active');
		}
		else {//if (disp === 'block'){//displayed
			$this.next('.content').slideUp(300);// this lets us only do the one that's clicked
			$this.removeClass('active');
		}
});