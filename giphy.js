class Giphy {
	constructor() {
		this.client_key = "8wouiKluN5bVTdoivK7Gq2ZdCwKRG1Yn";
	}

	async getUser(user) {
		const PicRespone = await fetch(
			// `http://api.giphy.com/v1/gifs/search?q=${user}&api_key=${this.client_key}&limit=5`
			`https://api.giphy.com/v1/gifs/search?api_key=${this.client_key}&q=${user}&limit=8&offset=0&rating=G&lang=en`
		);
		const picFromGiphy = await PicRespone.json();

		return picFromGiphy;
	}
}
