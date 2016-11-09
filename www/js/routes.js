angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('menu.home', {
    url: '/pageHome',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.bebidas', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bebidas.html',
        controller: 'bebidasCtrl'
      }
    }
  })

  .state('menu.diversos', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diversos.html',
        controller: 'diversosCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.sabores', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sabores.html',
        controller: 'saboresCtrl'
      }
    }
  })

  .state('menu.carrinho', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrinho.html',
        controller: 'carrinhoCtrl'
      }
    }
  })

  .state('menu.finalizarPedido', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/finalizarPedido.html',
        controller: 'finalizarPedidoCtrl'
      }
    }
  })

  .state('menu.pedidos', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pedidos.html',
        controller: 'pedidosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/pageHome')

  

});