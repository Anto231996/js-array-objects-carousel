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
thumbnailsCityElement.innerHTML = thumbnailsCityContent;