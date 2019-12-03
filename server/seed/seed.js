const faker = require('faker');
const Listing = require('../db.js').Listing;
const Listing_Gallery = require('../db.js').Listing_Gallery;

//Generate 10 random image listing in an array
var randomImage = (listingNumber) => {
    var array = [];
    for (var i = 0; i <= 9; i++) {
        //helper function which generates random picture
        let randomNum = Math.floor(Math.random() * 127) + 1;
        let imgLink = `https://lemonloft-gallery.s3-us-west-1.amazonaws.com/images/img${randomNum}.jpg`;
        let adj = faker.commerce.productAdjective();
        let roomSynonyms = ['room', 'space', 'area', 'loft'];
        let room = roomSynonyms[Math.floor(Math.random() * roomSynonyms.length)];

        var object = {
            image_url: imgLink,
            image_info: `${adj} ${room}`,
            listing_id: listingNumber
        }
        array.push(object);
    }
    return array;
}

// Creates the listing
(function seed() {
    for (let i = 1; i <= 100; i++) {
        let number = Math.floor(Math.random() * 6) + 2;
        let adjective = faker.commerce.productAdjective();
        let city = faker.address.city();
        let listingInfo = {
            description: `${number} ${adjective} rooms in ${city}`
        }

        let images = randomImage(i);
        Listing.create(listingInfo)
            .then(() => {
                Listing_Gallery.bulkCreate(images);
                console.log("Success!");
            })
            .catch((err) => {
                console.log("Something went wrong", err);
            });
    }
})()