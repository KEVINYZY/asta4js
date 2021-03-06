$(function () {

  Aj.init(function ($scope) {
    console.log($scope);

    $scope.data = {

    };
    $scope.caledData = {
      div: null,
      add: null
    };

    $scope.snippet("body").bind($scope.data, {
      tint: [
        Aj.form().asInt(),
        {
          _selector: "#prev",
          _transform: function(v){
            return "t:" + v;
          }
        }
      ],
      tdate: [
        Aj.form().asDatetime(),
          {
            _selector: "#tdate-prev",
            _render: function(target, newValue, oldValue){
              target.text(newValue);
            }
          }
      ],
    }).bind($scope.caledData, {
      div: "#div-caled",
      add: "#add-caled",
    });
    
    $scope.observe($scope.data, {
      tint: {
        _on_change: function(newValue, oldValue){
          $scope.caledData.div = newValue / 2;
          $scope.caledData.add = newValue + 1;
        }
      }
    });


  });

});
