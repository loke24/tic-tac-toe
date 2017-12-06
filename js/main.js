/*$(function(){
	  var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
		
		source: availableTags
	});
});*/


$(document).ready(function(){
	var n=1;

  
	
	$('.button-func').click(function(){
			
		
		
		if(n=='1')
		{
			$(this).text('X');
			$(this).attr('value','1');
			var value=$(this).attr('value');
			console.log(value); 
			n=0;
			$(this).addClass('color-change1');	
			
		}
		else
		{
			$(this).text('O');
			$(this).attr('value','0');
			var value=$(this).attr('value');
			console.log(value); 
			n=1
			$(this).addClass('color-change2');
		}
		
		
		if(($('.five').attr('value')=='1')){
				
				if(($('.one').attr('value')=='1')&&(($('.nine').attr('value')=='1'))){
					var x=1;
					var color="winner";
				}
				if(($('.three').attr('value')=='1')&&(($('.seven').attr('value')=='1'))){
					var x=1;
					var color="winner";
				}
				if(($('.two').attr('value')=='1')&&(($('.eight').attr('value')=='1'))){
					var x=1;
					var color="winner";
				}
				if(($('.four').attr('value')=='1')&&(($('.six').attr('value')=='1'))){
					var x=1;
					var color="winner";
				}
		}
		if(($('.five').attr('value')=='0')){
				if(($('.one').attr('value')=='0')&&(($('.nine').attr('value')=='0')))
				{
					var o=0;
					var color="winner";
				}
				if(($('.three').attr('value')=='0')&&(($('.seven').attr('value')=='0'))){
					var o=0;
					var color="winner";
				}
				if(($('.two').attr('value')=='0')&&(($('.eight').attr('value')=='0'))){
					var x=0;
					var color="winner";
				}
				if(($('.four').attr('value')=='0')&&(($('.six').attr('value')=='0'))){
					var x=0;
					var color="winner";
				}
				
		}
		if(($('.one').attr('value')=='0')){
			if(($('.two').attr('value')=='0')&&(($('.three').attr('value')=='0')))
				{
					var o=0;
					var color="winner";
				}
				if(($('.four').attr('value')=='0')&&(($('.seven').attr('value')=='0')))
				{
					var o=0;
					var color="winner";
				}
		}
		if(($('.one').attr('value')=='1')){
			if(($('.two').attr('value')=='1')&&(($('.three').attr('value')=='1')))
				{
					var x=1;
					var color="winner";
				}
				if(($('.four').attr('value')=='1')&&(($('.seven').attr('value')=='1')))
				{
					var x=1;
					var color="winner";
				}
		}
		if(($('.nine').attr('value')=='0')){
			if(($('.three').attr('value')=='0')&&(($('.six').attr('value')=='0')))
				{
					var o=0;
					var color="winner";
				}
				if(($('.eight').attr('value')=='0')&&(($('.seven').attr('value')=='0')))
				{
					var o=0;
					var color="winner";
				}
		}
		if(($('.nine').attr('value')=='1')){
			if(($('.three').attr('value')=='1')&&(($('.six').attr('value')=='1')))
				{
					var x=1;
					var color="winner";
				}
				if(($('.eight').attr('value')=='1')&&(($('.seven').attr('value')=='1')))
				{
					var x=1;
					var color="winner";
				}
		}
		
		
		if(color=='winner')
		{
			if(x==1)
			{
				$('span').text("X")
			console.log("theri");
			$('.modal').modal();	
			}
			else if(o==0)
			{
				$('span').text("O")
				console.log("boooo");
				$('.modal').modal();
			}
			
		}
		
		
		
	});
	
	
	$('.rep').click(function(){
		$('.modal').modal();
		console.log("ok");
		
	});
	
	
	$('.rep-auto').click(function(e){
		e.preventDefault();
		var hre =this.href;
		console.log(hre);
		
		
		$('.main-inner button').text('');
		$('.main-inner button').removeClass('color-change1 color-change2');
		$('.mainnn').load(hre).hide().fadeIn('slow');
		
		
	});
/*	$('.btn-click').click(function(){
		location.reload();	
	});*/
});
 