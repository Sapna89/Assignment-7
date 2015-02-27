//var bingKey = 'hAT9e1YCAw+R0rZ8m4GcE87+Zi391S3LkfWmhy1kpxA'; 
var url = 'http://api.bing.net/qson.aspx?Query='; 
var endUrl = '&JsonType=callback&JsonCallback=?';
//var userInput = $('input').val();

$('input').on('keyup', function(){
	$.ajax({
		url: url + $(this).val() + endUrl,
		type: 'GET',
		dataType: 'jsonp'
	}).done(function(response) {
		console.log(response);
		var results = response.SearchSuggestion.Section;
		
		$('#results').empty();
		$.each(results, function(i, value){
			var html = $('<ul>'+ '<a>' + value.Text + '</a>' + '</ul>');
			$('#results').append(html);
			$('a').attr('href', encodeURI("http://www.bing.com/ + value.Text"));
		});
	});
});


// function getSearches(query) {
// 	var q = query;
// 	//var url =  + '&JsonType=callback&JsonCallback=?');
		    

// 	console.log(url);

// 	$.ajax({
// 		url: url + userInput + '&JsonType=callback&JsonCallback=?',
// 		dataType: 'jsonp',
// 		type: 'GET'
// 	})

// 	.done(function(response) {
// 		console.log(response);
// 		render(response.SearchSuggestion.Section);
// 	});
// }


// function render(searches) {
// 	var results = $('#results');
// 	$(results).empty();
// 	var section = $('section');
// 	for(var i = 0; i < searches.length; i++) {
// 		results.append(searches[i]); 
// 		var text1 = $("<div></div>").text(searches[i].Text);
// 		$(section).append(text1);
// 		console.log(searches[i].Text);
// 	}
// }