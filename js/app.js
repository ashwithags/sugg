angular.module('Flicker', ['ui.router', 'Flicker.controllers', 'Flicker.services', 'Flicker.directive', 'ng-fusioncharts'])
.config(function($stateProvider, $urlRouterProvider){
	   $urlRouterProvider.otherwise('login');

	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl : 'pages/login.html',
			controller : 'loginController'
		})
		.state('homepage',{
			url: '/home',
			templateUrl : 'pages/home.html'
        })
        .state('chart', {
            url: '/chart',
            templateUrl: 'pages/chart.html',
            controller: 'ChController'
        })
        .state('sug', {
            url: '/suggestion',
            templateUrl: 'pages/suggestion.html',
            controller: 'sgController'
        })
        .state('sugRm', {
            url: '/suggestion-readmore',
            templateUrl: 'pages/suggestionRm.html',
            controller: 'sgRmController'
        })
});
