/**
 * Created by Captain on 3/9/17.
 */
var homeTemplate = require("html!../templates/home.html");
var homeController = require("../controllers/home")();
var articleTemplate = require("html!../templates/article.html");
var articleController = require("../controllers/article")();
var manageTemplate = require("html!../templates/manage.html");
var manageController = require("../controllers/manage")();

module.exports = {
    home: {
        url: '/home',
        template: homeTemplate,
        controller: homeController
    },
    article: {
        url: '/article',
        template: articleTemplate,
        controller: articleController
    },
    manage: {
        url: '/manage',
        template: manageTemplate,
        controller: manageController
    }
};

