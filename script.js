function setQuestions(){

	var queSet = "<h3 class='question-set'>" + "question goes here"+ "</h3>";

	$('.question-container').append(queSet);
}

function setOptions(){

	var queSet = "<ul>";
	queSet += "<li class='option-item'>" + "test option" +"</li>";
	queSet += "</ul>";

	$('.options-container').append(queSet);
}

setQuestions();
setOptions();