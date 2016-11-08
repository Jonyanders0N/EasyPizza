// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider){
  
})

.run(['$rootScope',
function ($rootScope) {

   $rootScope.login = false; 
   $rootScope.pedido = new Array();
   $rootScope.qtd = 0;
   $rootScope.total = 0;
   $rootScope.addCarrinho = function(item){
    var itemPedido =   {
            "Id"   : item.IdProduto,
            "Nome" : item.Nome,
            "Valor": item.Valor,
            "Qtd"  : 1, //sempre iniciar com 1
            "Total": item.Valor * 1
        }
        var achei = false;
        for(var i = 0;i < $rootScope.pedido.length;i++){
          if($rootScope.pedido[i].Id == item.IdProduto){
            $rootScope.pedido[i].Qtd++;
            $rootScope.pedido[i].Total = $rootScope.pedido[i].Qtd * $rootScope.pedido[i].Valor;
            achei = true;
          }
        }
        if(achei == false) $rootScope.pedido.push(itemPedido);
        $rootScope.total = 0;
        for(var i = 0; i < $rootScope.pedido.length; i++){
            $rootScope.total += $rootScope.pedido[i].Total;
        }
  }
    $rootScope.addQtd = function(item){
    console.log($rootScope.pedido[0].Id);

    for(var i = 0;i < $rootScope.pedido.length;++i){
      if($rootScope.pedido[i].Id === item.Id)
      {
        $rootScope.pedido[i].Qtd++;
        $rootScope.pedido[i].Total = $rootScope.pedido[i].Valor * $rootScope.pedido[i].Qtd;
        break;
      }
    }
    $rootScope.total = 0;
        for(var i = 0; i < $rootScope.pedido.length; i++){
            $rootScope.total += $rootScope.pedido[i].Total;
        }
  }

  $rootScope.removeQtd = function(item){
    for(var i = 0;i < $rootScope.pedido.length;i++){
      if($rootScope.pedido[i].Id === item.Id){
        if($rootScope.pedido[i].Qtd > 1){
          $rootScope.pedido[i].Qtd--;
          $rootScope.pedido[i].Total = $rootScope.pedido[i].Valor * $rootScope.pedido[i].Qtd;  
          $rootScope.total = 0;
          for(var i = 0; i < $rootScope.pedido.length; i++){
            $rootScope.total += $rootScope.pedido[i].Total;
          }        
        }
      }
    }
  } 

  $rootScope.removeItem = function(item){
    for(var i = 0;i < $rootScope.pedido.length;i++){
      if($rootScope.pedido[i].Id === item.Id){
        $rootScope.pedido.splice(i,1);
        $rootScope.total = 0;
        for(var i = 0; i < $rootScope.pedido.length; i++){
          $rootScope.total += $rootScope.pedido[i].Total;
        }           
      }
    }
  }
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})