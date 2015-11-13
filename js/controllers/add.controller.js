let AddController = function($scope, FindService, $state) {

  // let url = PARSE.URL + 'classes/finds';


  $scope.addFind = (obj) => {
    FindService.addFind(obj).then( (res) => {
      $scope.find = {};
      $state.go('root.list');

    });
  };

};

AddController.$inject = ['$scope', 'FindService', '$state'];

export default AddController;