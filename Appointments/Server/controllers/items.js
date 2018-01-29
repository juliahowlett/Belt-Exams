const Item = require('mongoose').model('Item');

module.exports = {
    index(request, response) {
        Item.find({}).populate('owner')
            .then(item => response.json(item))
            .catch(console.log);
    },
    show(request, response) {
        console.log('inside show item', request.params.item_id)
        Item.findById(request.params.item_id)
            .then(item => response.json(item))
            .catch(console.log);
    },
    showAll(request, response) {
        console.log('inside showAll')
        Item.find({ owner: request.params.id })
            .then(items => response.json(items))
            .catch(console.log)
    },

    create(request, response) {
        console.log(request.body);
        Item.create(request.body)
            .then(item => response.json(item))
            .catch(console.log);
    },

    /*     checkDate(request, response) {
            console.log(request.body);
            Item.find({ appdate: request.params.appdate }).count
                .then(count => results.length)
                .catch(console.log);
        }, */

    search(request, response) {
        console.log('Looking for a Match', request.params.search);
        Item.find({ complaint: request.params.search })
            .then(results => response.json(results))
            .catch(console.log);
    },
    destroy(request, response) {
        Item.findByIdAndRemove(request.params.item_id)
            .then(console.log)
            .catch(console.log)
    }


};