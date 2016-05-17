/// <reference path="./../typings/tsd.d.ts" />
angular.module('AppNH')
  .config(($stateProvider:angular.ui.IStateProvider) => {
      $stateProvider.state('rtd', {
                    url: '/r',
                    templateUrl: 'app/Controllers/routed.html',
                    controller :  'routedController'
                })
  })
 