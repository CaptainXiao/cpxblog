/**
 * Created by Captain on 3/9/17.
 */
var notFoundTemplate = require("html!../templates/404.html");
var notFoundController = require("../controllers/notFound")();

module.exports = {
    not_found: {
        url: '/not_found',
        template: notFoundTemplate,
        controller: notFoundController
    }
};

