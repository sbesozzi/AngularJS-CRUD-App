let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('root', {
      abstract: true
    });

};

config.$inject = ['stateProvider', '$urlRouterProvider'];

export default config;