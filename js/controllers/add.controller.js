let AddController = function($scope, FindService) {

  // let url = PARSE.URL + 'classes/finds';


  $scope.addFind = (obj) => {
    FindService.addFind(obj).then( (res) => {
      $scope.find = {};
    });
  };

};

AddController.$inject = ['$scope', 'FindService'];

export default AddController;