fetch("public/assets/js/movies.json")
.then(function(response) {
    return response.json()
})
.then(function(json) {
    let count = 0;
    json.results.forEach(element => {
        let title = element.original_title;
        let description = element.overview;
        let poster = element.poster_path;
        let note = Math.floor(element.vote_average/2);
        console.log(note);
        console.log(typeof note);
        document.querySelector('.container').innerHTML += 
        `<div class="card">
            <div class="moviesPoster">
                <img src="${poster}" alt="affiche de ${title}">
            </div>
            <div class="content">
                <div class="moviesTitle">
                    <h2>${title}</h2>
                </div>
                <div class="moviesDescription">
                    <p>${description}</p>
                </div>
                <div class="moviesNote">
                    <p class="star1 greyStars">&#9733</p>
                    <p class="star2 greyStars">&#9733</p>
                    <p class="star3 greyStars">&#9733</p>
                    <p class="star4 greyStars">&#9733</p>
                    <p class="star5 greyStars">&#9733</p>
                </div>
            </div>
        </div>`
        
        // for (let i = 0; i < note; i++) {
            
        // }

        // if (note == 0) {
        //     document.querySelector("#star1").classList.add('greyStars');
        //     document.querySelector("#star2").classList.add('greyStars');
        //     document.querySelector("#star3").classList.add('greyStars');
        //     document.querySelector("#star4").classList.add('greyStars');
        //     document.querySelector("#star5").classList.add('greyStars');
        // }
        if (note == 1) {
            document.querySelectorAll(".star1")[count].classList.add('yellowStars');
            // document.querySelector("#star2").classList.add('greyStars');
            // document.querySelector("#star3").classList.add('greyStars');
            // document.querySelector("#star4").classList.add('greyStars');
            // document.querySelector("#star5").classList.add('greyStars');
        }
        else if (note == 2) {
            document.querySelectorAll(".star1")[count].classList.add('yellowStars');
            document.querySelectorAll(".star2")[count].classList.add('yellowStars');
            // document.querySelector("#star3").classList.add('greyStars');
            // document.querySelector("#star4").classList.add('greyStars');
            // document.querySelector("#star5").classList.add('greyStars');
        }
        else if (note == 3) {
            document.querySelectorAll(".star1")[count].classList.add('yellowStars');
            document.querySelectorAll(".star2")[count].classList.add('yellowStars');
            document.querySelectorAll(".star3")[count].classList.add('yellowStars');
            // document.querySelector("#star4").classList.add('greyStars');
            // document.querySelector("#star5").classList.add('greyStars');
        }
        else if (note == 4) {    
            document.querySelectorAll(".star1")[count].classList.add('yellowStars');
            document.querySelectorAll(".star2")[count].classList.add('yellowStars');
            document.querySelectorAll(".star3")[count].classList.add('yellowStars');
            document.querySelectorAll(".star4")[count].classList.add('yellowStars');
            // document.querySelector("#star5").classList.add('greyStars');
        }
        else if (note == 5) {
            document.querySelectorAll(".star1")[count].classList.add('yellowStars');
            document.querySelectorAll(".star2")[count].classList.add('yellowStars');
            document.querySelectorAll(".star3")[count].classList.add('yellowStars');
            document.querySelectorAll(".star4")[count].classList.add('yellowStars');
            document.querySelectorAll(".star5")[count].classList.add('yellowStars');
        }
        count++;
    })
})


