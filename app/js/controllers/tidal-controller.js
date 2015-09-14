
tidalApp.controller('tidalCtrl', function($scope){

    $scope.select=function(index) {
        $scope.selectedIndex = index;
    }
    $scope.user={};
    $scope.datepickerOptions ={
        format: 'yyyy-mm-dd',
        language: 'en',
        autoclose: true,
        weekStart: 0
        };

      $scope.date = '2000-03-12';
});