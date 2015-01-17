
/* ------------------------------------------------------- 

* Filename:     AngularJS Routing
* Website:      http://www.shanidkv.com
* Description:  Shanidkv AngularJS blog
* Author:       Muhammed Shanid shanidkannur@gmail.com

---------------------------------------------------------*/

var shanidkvApp = angular.module('shanidkvApp', ['ngRoute']);

// configure routes

shanidkvApp.config(function($routeProvider) {
    
    $routeProvider

        .when('/', {
            templateUrl : 'pages/home.html'
        })

        .when('/about', {
            templateUrl : 'pages/about.html'
        })

        .when('/services', {
            templateUrl : 'pages/services.html'
        });
});


