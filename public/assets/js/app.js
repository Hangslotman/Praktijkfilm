var app = angular.module('praktijkfilm', [ 'ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
		.state({name: 'home',url: '/home',templateUrl: 'view/home.html'})

		.state({name: 'praktijk',url: '/praktijk',templateUrl: 'view/praktijk.html'})
		// .state({name: 'mensendieck',url: '/mensendieck',templateUrl: 'view/ofentherapie.html'})
		.state({name: 'bedrijven',url: '/bedrijven',templateUrl: 'view/bedrijven.html'})

		.state({name: 'video',url: '/video',templateUrl: 'view/video.html'})

		.state({name: 'tarieven',url: '/tarieven',templateUrl: 'view/tarieven.html'})

		.state({name: 'contact',url: '/contact',templateUrl: 'view/contact.html'})

		$urlRouterProvider.otherwise('/home');

});

//angular.module('praktijkfilm', ['uiGmapgoogle-maps']).config(
    //['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        //GoogleMapApiProvider.configure({
            //china: true
        //});
    //}]
//);