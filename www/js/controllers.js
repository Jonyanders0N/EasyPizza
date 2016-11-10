angular.module('app.controllers', [])
  
.controller('homeCtrl', ['HomeService', '$scope', '$ionicNavBarDelegate', '$ionicHistory', function (HomeService, $scope, $ionicNavBarDelegate, $ionicHistory) {

		HomeService.obterHome().then(function(dados){
			$scope.listaDeHome = dados;
		})
		$ionicNavBarDelegate.showBackButton(false);
}])
   
.controller('menuCtrl', ['$scope', '$stateParams',function ($scope, $stateParams) {


}])
  
.controller('pedidosCtrl', ['PedidoService', '$scope', '$rootScope',function (PedidoService, $scope, $rootScope) {
	if($rootScope.login){
		console.log($rootScope.user.IdUsuario);
		$scope.listaDePedidos = [];
		PedidoService.getPedido($rootScope.user.IdUsuario).then(function(dados){
			$scope.listaDePedidos = dados;
			console.log(dados);
		})
	}else{
		
		console.log("else");
	}


}])

.controller('bebidasCtrl', ['BebidaService', '$scope',function (BebidaService, $scope) {

		BebidaService.obterBebidas().then(function(dados){
			$scope.listaDeBebidas = dados;
		})

}])
   
.controller('diversosCtrl', ['DiversoService', '$scope',function (DiversoService, $scope) {

		DiversoService.obterDiversos().then(function(dados){
			$scope.listaDeDiversos = dados;
		})

}])
   
.controller('loginCtrl', ['LoginService', '$scope', '$rootScope', '$ionicPopup', '$state', function(LoginService, $scope, $rootScope, $ionicPopup, $state) {

    $scope.showAlert = function(msg) {
	    var alertPopup = $ionicPopup.alert({
	      title: 'Pronto!',
	      template: msg,
	    });
	    alertPopup.then(function(res) {
	      console.log('Thanks');
	    });

    }; 

    $scope.fazerLogin = function(login,email) {  

    	var login = {"Email": login, "Senha": email};
    	
    	LoginService.obterDados(login)
    	.success(function(data){
    		$rootScope.login = true;
    		$rootScope.user = data;
    		console.log($rootScope.user);
    		console.log($scope.login);	
    		$scope.showAlert('Login efetuado com sucesso!');
    		$scope.loginEmail = "";
    		$scope.loginPassword = "";
    	})
    	.error(function(msg){
    		console.log("Não foi dessa vez");
    		$scope.showAlert('Usuário ou senha inválido!');
    	})
    };
}])
   
.controller('signupCtrl', ['SignupService', '$scope', '$state', '$ionicPopup', function (SignupService, $scope, $state, $ionicPopup) {

	$scope.sairPagina = function(){
		$state.go("menu.login");
	}

	$scope.signupUser = function(nome,email,senha,cpf,rg,dataN){

		var cadastro = {
						  "IdUsuario": 0,
						  "Nome": nome,
						  "Email": email,
						  "Senha": senha,
						  "CPF": cpf,
						  "RG": rg,
						  "DataNascimento": dataN
						};
		SignupService.addUser(cadastro)		
    	.success(function(data){
    		console.log("Cadastrado efetuado com sucesso!");
		    $scope.showAlert = function() {
		      var alertPopup = $ionicPopup.alert({
		        title: 'Sucesso!',
		        template: 'Cadastro efetuado com sucesso!',
		      });
		      alertPopup.then(function(res) {
		        console.log('Thanks');
		        $state.go("menu.login");
		      });
		    }; 
		    $scope.showAlert();   		
    	})
    	.error(function(msg){
    		console.log("Não foi dessa vez");
    	})		
	}

}])
   
.controller('saboresCtrl', ['ProdutoService','$scope', '$rootScope',function ( ProdutoService, $scope, $rootScope) {

	ProdutoService.obterProdutos().then(function(dados){
		$scope.listaDeProdutos = dados;
	})

}])
   
   
.controller('finalizarPedidoCtrl', ['PedidoService', '$scope', '$rootScope', '$ionicPopup', '$state', '$rootScope' ,function (PedidoService, $scope, $rootScope, $ionicPopup, $state, $rootScope) {
	//Código para mudar estado dos botões de opções de pagamento
	$scope.mostrarPagSeguro = false;
	$scope.mostrarCc = false;
	$scope.botaoPagSeguro = function(){
		$scope.mostrarPagSeguro = !$scope.mostrarPagSeguro;
		$scope.mostrarCc = false;
	}
	$scope.botaoCc = function(){
		$scope.mostrarCc = !$scope.mostrarCc;
		$scope.mostrarPagSeguro = false;
	}

	$scope.addPedido = function(){
		var dados = {"IdUsuario": $rootScope.user.IdUsuario,
					 "Itens": []				
		}
		for(var i = 0; i < $rootScope.pedido.length; i++){
		var itemPedido = {
			"IdProduto": $rootScope.pedido[i].Id,
			"Quantidade": $rootScope.pedido[i].Qtd
			}		

 			dados.Itens.push(itemPedido);

 		}
 		console.log(dados);

		PedidoService.addPedido(dados)
    	.success(function(data){
    		console.log("ok");
		    $scope.enviarAlert = function() {
		      var alertPopup = $ionicPopup.alert({
		        title: 'Pedido Realizado!',
		        template: 'Estamos preparando seu pedido!',
		      });
		      alertPopup.then(function(res) {
		        console.log('Thanks');
		        $rootScope.pedido = [];
		        $state.go("menu.carrinho");
		      });
		    };
		    $scope.enviarAlert();    		
	    	})

    	.error(function(msg){
    		console.log("Não foi dessa vez");
		    $scope.enviarAlert = function() {
		      var alertPopup = $ionicPopup.alert({
		        title: 'Pedido não Realizado!',
		        template: 'Houve um erro na elaboração do seu pedido!',
		      });
		      alertPopup.then(function(res) {
		        console.log('Thanks');
		        $rootScope.pedido = [];
		        $state.go("menu.carrinho");
		      });
		    };
		    $scope.enviarAlert();      		
    	})
	}
}])

.controller('carrinhoCtrl',['LoginService', '$scope', '$ionicPopup', '$timeout', '$rootScope', '$state',function(LoginService, $scope, $ionicPopup, $timeout, $rootScope, $state) {  
      $scope.showPopup = function() {
      	if($rootScope.login) $state.go("menu.finalizarPedido");
      	else{
	        $scope.data = {}

	        var myPopup = $ionicPopup.show({
	          template: '<input placeholder="Email" type="text" ng-model="data.Email">   <br> <input placeholder="Senha" type="password" ng-model="data.confirmPassword" > ',
	          title: 'Login',
	          subTitle: 'Efetue login para finalizar o pedido',

	          scope: $scope,
	          buttons: [
	            { text: 'Cancelar' },
	            {
	              text: '<b>Logar</b>',
	              type: 'button-positive',
	              onTap: function(e) {
	              	console.log($scope.data.Email);
	                if (!$scope.data.Email) {
	                  //don't allow the user to close unless he enters wifi password
	                  e.preventDefault();
	                } else {
	                  return $scope.data;
	                }
	              }
	            },
	          ]
	      });
	        myPopup.then(function(res){
	        	var login = {"Email": res.Email, "Senha": res.confirmPassword};
	        	LoginService.obterDados(login)
	        	.success(function(data){
	        		$rootScope.login = true;
	        		$rootScope.user = data;
	        		console.log($rootScope.user);
	        		$state.go("menu.finalizarPedido");
	        	})
	        	.error(function(msg){
	        		console.log("Não foi dessa vez");
	        	})
	        })

	        };
    }
}]);