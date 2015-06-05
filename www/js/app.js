// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('alt', [
    'ionic', 
    'ngCordova',
    'ngStorage',
    'alt.tabs',
    'alt.login',
    'alt.newsfeed',
    'alt.events',
    'alt.scanner',
    'alt.ranking',
    'alt.profile'

  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('login', {
      url: "/login",
      templateUrl: "js/login/login.html",
      controller: "LoginCtrl"
    })

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'js/tabs/tabs.html',
      controller: 'TabsCtrl'
    })
  .state('tab.newsfeed', {
    url: '/newsfeed',
    views: {
      'tab-newsfeed': {
        templateUrl: 'js/newsfeed/newsfeed.html',
        controller: 'NewsfeedCtrl'
      }
    }
  })
    .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'js/events/events.html',
          controller: 'EventsCtrl'
        }
      }
    })
  .state('tab.scanner', {
      url: '/scanner',
      views: {
        'tab-scanner': {
          templateUrl: 'js/scanner/scanner.html',
          controller: 'ScannerCtrl'
        }
      }
    })
    .state('tab.ranking', {
      url: '/ranking',
      views: {
        'tab-ranking': {
          templateUrl: 'js/ranking/ranking.html',
          controller: 'RankingCtrl'
        }
      }
    })
    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'js/profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
