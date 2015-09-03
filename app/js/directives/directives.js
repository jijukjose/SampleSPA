
eventsApp.directive('customInputField', function() {
  return {
    restrict: 'E',
    template: '<div><label for={{id}}>{{name}}</label>'+
              '<input id={{id}} type={{type}} placeholder={{display}} ng-model="model" ng-disabled="false"/></div>',
    scope: {
        id:'@',
        name:'@',
        type:'@',
        display:'@',
        model:'='
    },
    replace:false,
    controller: function($scope){

        console.log($scope.id);
        console.log($scope.name);
        console.log($scope.type);
        console.log($scope.display);
        console.log($scope.model);
    },
    link: function(scope,element,attr){

            console.log(attr.id);
            console.log(attr.name);
            console.log(attr.type);
            console.log(attr.model);
        }
  };
});