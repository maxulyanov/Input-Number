$(function(){

	// Кнопка +
	$('.number-plus').on('click', function(){
		$(this).attr('unselectable', false).css('MozUserSelect','none');
		var thisVal = $(this).parent().find('.number-field').val();
		thisVal++;
		computation(this, thisVal);
	});

	// Кнопка -
	$('.number-minus').on('click', function(){
		var thisVal = $(this).parent().find('.number-field').val();
		thisVal--;
		if(!thisVal) thisVal = 1;
		computation(this, thisVal);
	});

	// Ввод с клавиатуры
	$('.number-field').keypress(function(event){
		if(event.charCode < 48 || event.charCode > 57) return false;
		var thisVal = $(this).parent().find('.number-field').val(); 
		if(thisVal < 1) thisVal = 1;
		test(thisVal);
		computation(this, thisVal);
	})
 
	// Результат
	function computation(elem, val){
		$(elem).parent().find('.number-field').val(val);
		$(elem).parent().find('.number-field').attr('value', val);
	}

});