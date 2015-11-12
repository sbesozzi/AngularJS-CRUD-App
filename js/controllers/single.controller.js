let SingleController = function($scope, $stateParams, FindService, $state) {

  FindService.getFind($stateParams.id).then( (res) => {
    $scope.singleFind = res.data;
  });


  $scope.deleteMe = function (obj) {
    FindService.delete(obj).then( (res) => {
      console.log(res);
      $state.go('root.list');
    });
  };

};

SingleController.$inject = ['$scope', '$stateParams', 'FindService', '$state'];

export default SingleController;