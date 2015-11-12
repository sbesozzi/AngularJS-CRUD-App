let ListController = function($scope, FindService) {

  FindService.getFinds().then( (res) => {
    $scope.finds = res.data.results;
  });

};

ListController.$inject = ['$scope', 'FindService'];

export default ListController;