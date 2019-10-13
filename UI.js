

class UI {
	constructor() {
		this.profileUI = Array.from(document.querySelectorAll(".profile"));
		console.log(this.profileUI);
	}

	showProfile({ url, index, title, embed_url }) {
		this.profileUI[index].innerHTML = `
						<div class="border rounded mb-3 align-self-center">
						
						<img class="img-fluid card-img-top rounded " src="${url}">
						<div class="card-body card2  round">
						<div class="align">
						<a href="${embed_url}" target="_blank" class="btn btn-info"><figure>${title}</figure></a>
						</div>
						</div>
						</div>
						
                    `;
	}
}
    

{/* <div class="card" style="width: 18rem;">
						<img class="img-fluid card-img-top" src="${url}" width="200px" height="200px">
						<div class="card-body">
                        	<figure>${title}</figure>
							<a href="${embed_url}" target="_blank">Details</a>
						</div>
					</div> */}