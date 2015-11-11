let AddController = function($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/finds';

  let Find = function (obj) {
    this.find     = obj.find;
    this.material = obj.material;
  };

  $scope.addFind = (obj) => {
    let f = new Find(obj);

    $http.post(url, f, PARSE.CONFIG).then( (res) => {
      $scope.find = {};
    });

  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;