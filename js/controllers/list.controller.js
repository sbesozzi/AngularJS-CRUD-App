let ListController = function($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/finds';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.finds = res.data.results;
  });

};

ListController.$inject = ['$scope', '$http', 'PARSE'];

export default ListController;