let SingleController = function($scope, $stateParams, $http, PARSE) {

  let url = PARSE.URL + 'classes/finds/' + $stateParams.id;

  $http.get(url, PARSE.CONFIG).then( (res) => {

    $scope.singleFind = res.data;
  });
  
  
};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default SingleController;