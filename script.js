function initialiseQuestionSet(){

	var queSet = "<ul>";
	queSet += "<li class='option-item'>" + "test option" +"</li>";
	queSet += "</ul>";

	$('.options-container').append(queSet);
}

initialiseQuestionSet();