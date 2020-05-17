data = JSON.parse(data);

function createCard(){
	let card = document.createElement('div');
	card.className = 'card';

	let profile = document.createElement('img');
	profile.className = 'card-img-top';
	profile.src = "...";
	profile.alt = "";


	document.getElementById('cards').appendChild(card);
}

function test(n){
	let container = document.getElementById('cards')

	container.innerHTML += "<div class='card'>";
	container.innerHTML += "<img src='...' class='card-img-top' alt=''";
	container.innerHTML += "<div class='card-body'>";
	//
	container.innerHTML += "<h5 class='card-title'>" + data.posts[n]['title'] + "</h5>";
	container.innerHTML += "<p class='card-text'>";
	// 
	container.innerHTML += data.posts[n]['content'];
	container.innerHTML += "</p>";
	container.innerHTML += "</div>";
	container.innerHTML += "<ul class='list-group list-group-flush'>";
	//
	container.innerHTML += "<li class='list-group-item'>" 
	+ data.teachers[data.posts[n]['teacher']]['name'] 
	+ " "
	+ data.teachers[data.posts[n]['teacher']]['email']
	+ "</li>";
	//
	container.innerHTML += "<li class='list-group-item'>" + data.teachers[data.posts[n]['teacher']]['field'] + "</li>";
	//
	container.innerHTML += "<li class='list-group-item'>" + data.posts[n]['from'] + "</li>";
	container.innerHTML += "<li class='list-group-item'>" 
	+ 'Entrega '
	+ data.posts[n]['date'] 
	+ "</li>";
	container.innerHTML += "</ul>";
	container.innerHTML += "<div class='card-body'>";
	//
	container.innerHTML += "<a href='" + data.teachers[data.posts[n]['teacher']]['profile'] + "' class='card-link'>Perfil Face</a>";
	//
	container.innerHTML += "<a href='" + data.posts[n]['url'] + "' class='card-link'>Link atividade</a>";
	container.innerHTML += "</div>";
	container.innerHTML += "</div>";
	container.innerHTML += "</div>";
}

for(let i = 0; i < data.posts.length; i++){
	test(i);
	//createCard();
}