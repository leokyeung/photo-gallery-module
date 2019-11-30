const Sequelize = require('sequelize');

var sequelize = new Sequelize('lemonloft', 'loftuser', 'password', {
    host: 'localhost',
    dialect: mysql,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Listing = sequelize.define('listings', {
    'listing_id': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    'description': {
        type: Sequelize.STRING(200),
        allowNull: false
    }
});

const Listing_Gallery = sequelize.define('listing_images', {
    'id': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    'image_url': {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    'image_info': {
        type: Sequelize.STRING(100),
    },
    'listing_id': {
        type: Sequelize.INTEGER,
    }

});

module.exports.db = sequelize;
module.exports.Listing = Listing;
module.exports.Listing_Gallery = Listing_Gallery;