/*jslint node: true */
'use strict';

app.config(function ($stateProvider) {

    $stateProvider.state('loader', {
      template: '<loader></loader>',
      url: '/',
      controller: function($scope, repositories) {
        $scope.repositories = repositories;
      },
      resolve: {
        repositories: function(SettingsFactory) {
          return SettingsFactory.getRecentRepos()
            .then(function(repos) {
              console.log("RESOLVE loader: ", repos);
              return repos;
            });
        }
      }
    });

});

app.directive('loader', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/ui-routes/loader/loader.html',
    controller: function ($scope, $state, DirTreeFactory, DropDirectoryFactory, SettingsFactory) {
      // $scope.fileTree = DirTreeFactory.getTree(DropDirectoryFactory.getDir());
      console.log("Loader $scope.filetree", $scope.fileTree);

      $scope.setRepo = function (str) {
        SettingsFactory.setCurrentRepo(str);
        $state.go('main');
      };

    }
  };
});