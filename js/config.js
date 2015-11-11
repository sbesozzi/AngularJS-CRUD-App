let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true
    })

    .state('root.home', {
      url: '/',
      controller: 'PageController',
      templateUrl: 'templates/layout.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;