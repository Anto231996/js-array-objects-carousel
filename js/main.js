const city = [
    {
        nameCity: 'Antarctica',
        image: 'Antarctica.jpg',
    },
    {
        nameCity: 'Antelope Canyon, Arizona',
        image: 'Antelope-Canyon-Arizona.jpg',
    },
    {
        nameCity: 'Faroe Islands',
        image: 'Faroe-Islands.jpg',
    },
    {
        nameCity: 'Machu Picchu, Peru',
        image: 'Machu-Picchu-Peru.jpg',
    },
    {
        nameCity: 'Reynisfjara, Iceland',
        image: 'Reynisfjara-Iceland.jpg',
    }
];

let itemsCityContent = "";

let thumbnailsCityContent = "";

    for (let i = 0; i < city.length; i++){
        itemsCityContent += 
        `
        <div class="items-city">
            <img src="img/${city[i].image}" alt="${city[i].nameCity}">
            <div class="city-description">
                <h1>${city[i].nameCity}</h1>
            </div>
        </div>
        `;

        thumbnailsCityContent += 
        `
        <div class="thumbnail-city">
            <img src="img/${city[i].image}" alt="${city[i].nameCity}">
        </div>
        `;
}

const itemsCityElement = document.querySelector(".my-carousel-images");
itemsCityElement.innerHTML = itemsCityContent;

const thumbnailsCityElement = document.querySelector(".my-thumbnails");
thumbnailsCityElement.innerHTML += thumbnailsCityContent;


let itemActive = 0;

document.getElementsByClassName("items-city")[itemActive].classList.add("active");

document.getElementsByClassName("thumbnail-city")[itemActive].classList.add("active");


const previousButton = document.querySelector(".my-previous");

previousButton.addEventListener('click', function(){
    document.getElementsByClassName("items-city")[itemActive].classList.remove("active");

    document.getElementsByClassName("thumbnail-city")[itemActive].classList.remove("active");

    if( itemActive === 0){
        itemActive = city.length - 1;
    } else {
        itemActive--;
    }

    document.getElementsByClassName("items-city")[itemActive].classList.add("active");

    document.getElementsByClassName("thumbnail-city")[itemActive].classList.add("active");
})

const nextButton = document.querySelector(".my-next");

nextButton.addEventListener('click', function(){
    document.getElementsByClassName("items-city")[itemActive].classList.remove("active");

    document.getElementsByClassName("thumbnail-city")[itemActive].classList.remove("active");

    if( itemActive === city.length - 1){
        itemActive = 0;
    } else {
        itemActive++;
    }

    document.getElementsByClassName("items-city")[itemActive].classList.add("active");

    document.getElementsByClassName("thumbnail-city")[itemActive].classList.add("active");
})


setInterval (myfunction, 3000);

function myfunction(){
    document.getElementsByClassName("items-city")[itemActive].classList.remove("active");

    document.getElementsByClassName("thumbnail-city")[itemActive].classList.remove("active");

    if( itemActive === city.length - 1){
        itemActive = 0;
    } else {
        itemActive++;
    }

    document.getElementsByClassName("items-city")[itemActive].classList.add("active");

    document.getElementsByClassName("thumbnail-city")[itemActive].classList.add("active");
}