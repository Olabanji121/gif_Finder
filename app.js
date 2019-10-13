// init giphy and UI
const giphy = new Giphy();
const ui = new UI()

// search input
const searchPic = document.getElementById("btnSearch");
const btn = document.getElementById("search");
const alert = document.querySelector(".alert");
const loading = document.getElementById("loading");
const result = document.querySelector(".result");
const gifs = document.getElementById("gifs");

loading.style.display= 'none'
alert.style.display = "none";

// search input event listener;
searchPic.addEventListener('click', (e) => {
	
	e.preventDefault();
	if (btn.value === "" ) {
		gifs.style.display = "none";
		alert.style.display = "block";
		result.textContent = `Nothing Found`;
		setTimeout(clearResult, 3000);
	} else {
		dataFromAPI();
		gifs.style.display = "none";
		loading.style.display = "block";
		result.style.display = "block";
		setTimeout(showGif, 3000);
	}
    setTimeout(clearAlert, 3000);
    
})

const clearResult = () => {
	
		result.style.display = "none"
	
}
const clearAlert = () => {
	if (alert) {
		alert.style.display = "none";
	}
	
}
const showGif = () => {
	
    gifs.style.display = "block";
    loading.style.display = "none";
}

const dataFromAPI = () => {
    
	const userText = btn.value.trim();
	// let letters = /^[A-Za-z]+$/; 
	console.log(userText);
		result.textContent = `Search Result for ${userText}`
        // make http call
	loading.style.display = "none";
	// result.style.display = "block";
		if (userText !== "" ) {
			giphy.getUser(userText)
				.then(result => {
					console.log(result.data);
					result.data.forEach((dat, index) => {
						// console.log(dat.images.original.url)
						const {
							images: {
								original: { url }
							},
							title,
							embed_url
						} = dat;
						ui.showProfile({ title, index, url, embed_url });
						// ui.showProfile({title, index, images: images.original.url});
					});
				})
				.catch(err => console.log(err));
		}
		else {
            alert.style.display = "block";
			gifs.style.display = "none";
			result.textContent = `Nothing Found`;
			// setTimeout(clearResult, 3000);
			console.log("input search text");
    }
    btn.value = "";
}



    