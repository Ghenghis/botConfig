'use strict';

/**
 * @ngdoc function
 * @name botConfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the botConfApp
 */
angular.module('botConfApp')
  .controller('MainCtrl', ['$scope', 'DataService', '$location',  function ($scope, DataService, $location) {
    DataService.defaultConfig().then(function (result) {
      $scope.config = result;
    });

    $scope.saveToPc = function (data, filename) {

      if (!data) {
        console.error('No data');
        return;
      }

      if (!filename) {
        filename = 'download.json';
      }

      if (typeof data === 'object') {
        data = JSON.stringify(data, undefined, 2);
      }

      var blob = new Blob([data], {type: 'text/json'});

      // FOR IE:

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
      }
      else {
        var e = document.createEvent('MouseEvents'),
          a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initEvent('click', true, false, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
      }
    };

    /**
     * @TODO Save config
     * @TODO IMPORT config
     */
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  }]);
