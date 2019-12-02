const Models = require('./models.js');

module.exports = {
    getListings : ((req, res) => {
        Models.getListings((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        })

    }),
    getImages : ((req, res) => {
        Models.getImages((err, data) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.send(data);
            }
        })

    })

}