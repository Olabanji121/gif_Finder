// init giphy
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
// 
searchPic.addEventListener('click', (e) => {

    e.preventDefault()
    dataFromAPI()
    gifs.style.display = "none";
    loading.style.display = "block";
    setTimeout(showGif, 5000);
    
    
})

const showGif = () => {
    gifs.style.display = "block";
    loading.style.display = "none";
}

const dataFromAPI = () => {
    // get input 
    // gifs.style.display = "block";
    const userText = btn.value.trim();
    console.log(userText);
    result.textContent =`Search Result for ${userText}`
        // make http call
    loading.style.display = "none";
		if (userText !== "") {
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
		} else {
            alert.style.display = "block";
            gifs.style.display = "none";
			console.log("input search text");
    }
    btn.value = "";
}



    