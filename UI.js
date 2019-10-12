// class UI {
// 	constructor() {
// 		this.profileUI1 = document.querySelector("#profile1");
// 		this.profileUI2 = document.querySelector("#profile2");
// 		this.profileUI3 = document.querySelector("#profile3");
// 		this.profileUI4 = document.querySelector("#profile4");
// 		this.profileUI5 = document.querySelector("#profile5");
// 		// this.profileUI = Array.from(document.querySelectorAll("#profile"));
// 		// this.title = document.querySelector(".title2");
// 	}

// 	// show profile on UI

	// showProfile1(user1) {
	// 	this.profileUI1.innerHTML = `
	// 	<div class= "card card-body mb-3">
    //         <div class= "row">
    //             <div class="col-md-3">
    //                 <img class="img-fluid mb-2" src="${user1}">
    //             </div>
    //         </div>
    //     </div>

	// 	`;
    //     console.log(user1);
	// }
// 	showProfil2(user2) {
// 		this.profileUI2.innerHTML = `
// 		<div class= "card card-body mb-3">
//             <div class= "row">
//                 <div class="col-md-3">
//                     <img class="img-fluid mb-2" src="${user2}">
//                 </div>
//             </div>
//         </div>

// 		`;
//         console.log(user2);
// 	}
// 	showProfil3(user3) {
// 		this.profileUI3.innerHTML = `
// 		<div class= "card card-body mb-3">
//             <div class= "row">
//                 <div class="col-md-3">
//                     <img class="img-fluid mb-2" src="${user3}">
//                 </div>
//             </div>
//         </div>

// 		`;
//         console.log(user3);
// 	}
// 	showProfil4(user4) {
// 		this.profileUI4.innerHTML = `
// 		<div class= "card card-body mb-3">
//             <div class= "row">
//                 <div class="col-md-3">
//                     <img class="img-fluid mb-2" src="${user4}">
//                 </div>
//             </div>
//         </div>

// 		`;
//         console.log(user4);
// 	}
// 	showProfil5(user5) {
// 		this.profileUI5.innerHTML = `
// 		<div class= "card card-body mb-3">
//             <div class= "row">
//                 <div class="col-md-3">
//                     <img class="img-fluid mb-2" src="${user5}">
//                 </div>
//             </div>
//         </div>

// 		`;
//         console.log(user5);
// 	}
	

	
// }




/*********************************************************** */
// this.title.innerHTML = `<div class= "card card-body mb-3">
		//     <div class= "row">
		//         <div class="col-md-3">
		//         <h6>title: ${user.title}</h6>

		//         </div>`;

		// this.profileUI.forEach(show => {
		// 	show.innerHTML=`
		// <div class= "card card-body mb-3">
		//     <div class= "row">
		//         <div class="col-md-3">
		//         <img class="img-fluid mb-2" src="${user}">

		//         </div>

		// `
		// })
		// for (let i = 0; i < this.profileUI.length; i++) {
			// this.profileUI[i].innerHTML = `
            // <div class= "card card-body mb-3">
            //     <div class= "row">
            //         <div class="col-md-3">
            //             <img class="img-fluid mb-2" src="${user}">
            //         </div>
            //     </div>
            // </div>`;
		// }
        // console.log(this.profileUI);
        //*********************************************************** */

class UI {
	constructor() {
		this.profileUI = Array.from(document.querySelectorAll(".profile"));
		console.log(this.profileUI);
	}

	showProfile({ url, index, title, embed_url }) {
		this.profileUI[index].innerHTML = `
            
                        <img class="img-fluid" src="${url}">
                        <figure>${title}</figure>
                        <a href="${embed_url}" target="_blank">Details</a>
                    `;
	}
}
    

    // <div class= "card card-body mb-3" style="max-width: 20rem;>
    //             <div class= "d-flex">
    //                 <div class="col-md-3">
    //                     <img class="img-fluid mb-2" src="${url}">
    //                     <figure>${title}</figure>
    //                     <a href="${embed_url}" target="_blank">Details</a>
    //                 </div>
    //             </div>
    //         </div>`;
        