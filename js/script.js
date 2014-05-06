$(function(){

	// Кнопка +
	$('.number-plus').on('click', function(){
		var thisInput = $(this).parent().find('.number-field');
		var thisVal = $(thisInput).val();
		thisVal++;

		$(thisInput).stop(true, true).animate({
			backgroundColor: '#9bcb1e',
		},400).stop(true,true).animate({
			backgroundColor: '#FFF',
		},400);

		computation(this, thisVal);
	});

	// Кнопка -
	$('.number-minus').on('click', function(){
		var thisInput = $(this).parent().find('.number-field');
		var thisVal = $(thisInput).val();
		thisVal--; 

		if(!thisVal) thisVal = 1;
		$(thisInput).stop(true, true).animate({
			backgroundColor: '#ea6856',
		},400).stop(true,true).animate({
			backgroundColor: '#FFF',
		},400);

		computation(this, thisVal);
	});

	// Ввод с клавиатуры
	$('.number-field').keypress(function(event){
		if(event.charCode < 48 || event.charCode > 57) return false;
		var thisVal = $(this).parent().find('.number-field').val(); 
		if(thisVal < 1) thisVal = 1;
		computation(this, thisVal);
	})
 
	// Результат
	function computation(elem, val){
		$(elem).parent().find('.number-field').val(val);
		$(elem).parent().find('.number-field').attr('value', val);
	}

});