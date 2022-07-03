const filmListe = [
    {
        filmAdi: "The Avengers: Age of Ultron",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        image: "https://tr.web.img3.acsta.net/medias/nmedia/18/85/49/05/20085945.jpg",
        type: "Action",
        type2: "Fantastic",
        rank: "8.0/10"
    },

    {
        filmAdi: "The Avengers: Infinity War",
        description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        image: "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFHZlphc250OUwuX1NMMTM3MV8uanBn.jpg",
        type: "Action",
        type2: "Fantastic",
        rank: "8.4/10"
    },

    {
        filmAdi: "The Avengers: End Game",
        description: "After the devastating events of Avengers: Sonsuzluk Savaşı (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        type: "Action",
        type2: "Fantastic",
        rank: "8.4/10"
    },

    {
        filmAdi: "Get Out",
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        image: "http://www.filmdoktoru.com/wp-content/uploads/2017/07/get-out-filmdoktoru.jpg",
        type: "Horror",
        type2: "Income",
        rank: "7.7/10"
    },

    {
        filmAdi: "The Saw",
        description: "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMyNTM5MDcyOV5BMl5BanBnXkFtZTcwMzkzMzY4Mg@@._V1_.jpg",
        type: "Horror",
        type2: "Income",
        rank: "7.6/10"
    },

    {
        filmAdi: "The Hobbit: An Unexpected Journey",
        description: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
        image: "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_FMjpg_UX1000_.jpg",
        type: "Fantastic",
        type2: "Adventure",
        rank: "7.8/10"
    },

    {
        filmAdi: "Jurassic Park",
        description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        image: "https://upload.wikimedia.org/wikipedia/tr/4/49/Jurassic_Park_film_posteri.jpg",
        type: "Fantastic",
        type2: "Adventure",
        rank: "8.2/10"
    },
    {
        filmAdi: "Toy Story",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        image: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1000_.jpg",
        type: "Fantastic",
        type2: "Adventure",
        rank: "8.3/10"
    },
    {
        filmAdi: "Kelebeğin Rüyası",
        description: "In a small Turkish town, two young tuberculous poets try to survive while publishing their poems. As they both fall in love, their life would never be the same.",
        image: "https://yt3.ggpht.com/ytc/AKedOLSuLpqqPOA3iUyDaqhikw50JeZz09eEJ3mQyxYF=s900-c-k-c0x00ffffff-no-rj",
        type: "",
        type2: "Adventure",
        rank: "7.7/10"
    }
]

const movieList = document.querySelector(".movie-lists");

showAll();

function showAll() {
    movieList.innerHTML = "";

    const filmsArray = JSON.parse(localStorage.getItem("Films"))
    if (filmsArray) {
        filmsArray.map(movies => showThem(movies.filmAdi, movies.image, movies.description, movies.rank));
    } else {
        filmListe.map(movies => showThem(movies.filmAdi, movies.image, movies.description, movies.rank));
    }
}

function register() {
    const newMovieName = document.querySelector(".newMovieName").value;
    const newMovieDesc = document.querySelector(".newMovieDesc").value;
    const newMovieImg = document.querySelector(".newMovieImg").value;
    const newMovieType1 = document.querySelector(".newMovieType1");
    const newMovieType2 = document.querySelector(".newMovieType2");
    const newMovieRank = document.querySelector(".newMovieRank").value;
    const type1 = newMovieType1.options[newMovieType1.selectedIndex].text;
    const type2 = newMovieType2.options[newMovieType2.selectedIndex].text;
    const newMovie = {
        filmAdi: newMovieName,
        description: newMovieDesc,
        image: newMovieImg,
        type: type1,
        type2: type2,
        rank: (newMovieRank + "/10")
    }
    filmListe.push(newMovie);
    localStorage.setItem("Films", JSON.stringify(filmListe));
    showAll();
}

function showThem(name, img, desc, imdb) {
    let movieObject = `<img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${desc}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a><span
            class="ms-5 btn btn-warning">${imdb}</span>
    </div>`;
    let proDom = document.createElement("div");
    proDom.classList.add("card", "mt-5", "card-width");
    proDom.innerHTML = movieObject;
    movieList.append(proDom);
}

function showAct() {
    movieList.innerHTML = "";
    filmsArray = JSON.parse(localStorage.getItem("Films"))
    filmsArray.filter(movies => {
        if (movies.type == "Action" || movies.type2 == "Action") {
            showThem(movies.filmAdi, movies.image, movies.description, movies.rank);
        }
    });
}

function showFant() {
    movieList.innerHTML = "";
    filmsArray = JSON.parse(localStorage.getItem("Films"))
    filmsArray.filter(movies => {
        if (movies.type == "Fantastic" || movies.type2 == "Fantastic") {
            showThem(movies.filmAdi, movies.image, movies.description, movies.rank);
        }
    });
}

function showAdv() {
    movieList.innerHTML = "";
    filmsArray = JSON.parse(localStorage.getItem("Films"))
    filmsArray.filter(movies => {
        if (movies.type == "Adventure" || movies.type2 == "Adventure") {
            showThem(movies.filmAdi, movies.image, movies.description, movies.rank);
        }
    });
}

function showHor() {
    movieList.innerHTML = "";
    filmsArray = JSON.parse(localStorage.getItem("Films"))
    filmsArray.filter(movies => {
        if (movies.type == "Horror" || movies.type2 == "Horror") {
            showThem(movies.filmAdi, movies.image, movies.description, movies.rank);
        }
    });
}


let count = 1;
function addMovie() {
    count++;
    const movieWindow = document.querySelector(".addMovie");
    if (count % 2 == 0) {

        movieWindow.style.display = "block";
        movieWindow.style.top = "100px";

    }

    else {
        movieWindow.style.display = "none";
        movieWindow.style.top = "0px";
    }
}