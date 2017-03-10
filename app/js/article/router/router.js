/**
 * Created by Captain on 3/9/17.
 */
var homeTemplate = require("html!../templates/home.html");
var homeController = require("../controllers/homeController");
var articleTemplate = require("html!../templates/article.html");
var articleController = require("../controllers/articleController");
var manageTemplate = require("html!../templates/manage.html");
var manageController = require("../controllers/manageController");

module.exports = {
    home: {
        url: '/home',
        views: {
            '': {
                template: homeTemplate,
                controller: homeController
            }
        }
    },
    artcile: {
        url: '/article',
        views: {
            '': {
                template: articleTemplate,
                controller: articleController
            }
        }
    },
    manage: {
        url: '/manage',
        views: {
            '': {
                template: manageTemplate,
                controller: manageController
            }
        }
    }
};

