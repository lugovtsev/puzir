$(document).ready(function() {	
	$('#toCreate').attr('disabled',true);
	function createArr ()
	{
		var arr_length = Math.floor(Math.random() * 4 + 7); // возвращает случайное целое число от 7 до 10
		$('#unsort_array').css('width',64*arr_length+'px')
		var unsort_arr = new Array();
		var div_unsort = $('#unsort_array');
		for (var i = 0; i < arr_length; i++)
		{
			(function(i) {			 
				setTimeout(function() {
					unsort_arr[i] = Math.floor(Math.random() * 51);	// возвращает случайное целое число от 0 до 50
					div_unsort.append("<div id = \"el-"+i+"\" class = \"unsort_el animated rotateIn\">" + unsort_arr[i] + "</div>");
					$('#first_array').append("<div class = unsort_el >" + unsort_arr[i] + "</div>");					
				},i*150);
			})(i);
		}
		
		return unsort_arr;
	}
	
	var unsort_arr = createArr();

	//$('#toSort').removeAttr('disabled');
	$('#toCreate').click(function() {
		$('#unsort_array, #first_array').text("");
		
		var unsort_arr = createArr();
		//$('#toSort').removeAttr('disabled');
	});

	
	
	$('#toSort').click(function() {
		//$('#toSort').attr('disabled',true);
		var sort_arr = unsort_arr;		var count = sort_arr.length-1;
	for (var i = 0; i < count; i++)	    { 
	(function(i) {			 
			setTimeout(function() {
	
		for (var j = 0; j <= count-i; j++){
			(function(j) {			 
			setTimeout(function() {
			var k = j - 1;
			var l = j+1;
	        if (sort_arr[j]> sort_arr[j+1]) {
	           var max = sort_arr[j];
	           sort_arr[j] = sort_arr[j+1];			   
	           sort_arr[j+1] = max;
			   $('#el-'+k).css('background','white');
				$('#el-'+j).text(sort_arr[j]).css('background','red');
				$('#el-'+l).text(sort_arr[j+1]).css('background','red');
			}
			else {
				$('#el-'+k).css('background','white');
				$('#el-'+j).css('background','yellow');
				$('#el-'+l).css('background','yellow');
			}
			
			//removeClass('rotateIn').removeClass('zoomInDown').addClass('zoomInDown');

			},j*200);
			})(j);
		
		}
		$('#el-'+j).text(sort_arr[j]).css({'background':'gray !important'});
		},i*kolvo*200);
			})(i);
			//kolvo--;
		if (i==count-1)	{
			$('#first_array').css('visibility','visible');//show(1000);
		}
	}
	});
});

