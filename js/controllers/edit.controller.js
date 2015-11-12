let EditController = function($scope, $stateParams, FindService, $state) {

  FindService.getFind($stateParams.id).then( (res) => {
    $scope.singleFind = res.data;
  });

  $scope.updateFind = function (obj) {
    FindService.update(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');

    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'FindService', '$state'];

export default EditController;