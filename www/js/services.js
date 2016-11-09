angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('ProdutoService', ['$http', function($http){

	var url = "http://easypizza.azurewebsites.net/api/produto/all/1";

	return{
		obterProdutos: function(){
			return $http.get(url).then(function(response){
				return response.data;
			});
		}
	}
}])

.service('BebidaService', ['$http', function($http){

	var url = "http://easypizza.azurewebsites.net/api/produto/all/2";

	return{
		obterBebidas: function(){
			return $http.get(url).then(function(response){
				return response.data;
			});
		}
	}
}])

.service('DiversoService', ['$http', function($http){

	var url = "http://easypizza.azurewebsites.net/api/produto/all/3";

	return{
		obterDiversos: function(){
			return $http.get(url).then(function(response){
				return response.data;
			});
		}
	}
}])

.service('HomeService', ['$http', function($http){

	var url = "http://easypizza.azurewebsites.net/api/produto/all/4";

	return{
		obterHome: function(){
			return $http.get(url).then(function(response){
				return response.data;
			});
		}
	}
}])

.service('LoginService', ['$http', '$httpParamSerializer', function($http, $httpParamSerializer){

	var url = "http://easypizza.azurewebsites.net/api/usuario/get";

	return{
		obterDados: function(dados){
		return $http({
		    method: "POST",
		    url : 'http://easypizza.azurewebsites.net/api/usuario/get',
		    data: $httpParamSerializer(dados),
		    headers: {
		        "Content-Type" : "application/x-www-form-urlencoded"
		    }
		    })
		}
	}
}])

.service('SignupService', ['$http', '$httpParamSerializer', function($http, $httpParamSerializer){

	return{
		addUser: function(dados){
		return $http({
		    method: "POST",
		    url : 'http://easypizza.azurewebsites.net/api/usuario/add',
		    data: $httpParamSerializer(dados),
		    headers: {
		        "Content-Type" : "application/x-www-form-urlencoded"
		    }
		    })
		}
	}
}])

.service('PedidoService', ['$http', '$httpParamSerializer', function($http, $httpParamSerializer){

	return{
		addPedido: function(dados){
		return $http({
		    method: "POST",
		    url : 'http://easypizza.azurewebsites.net/api/pedido/add',
		    data: $httpParamSerializer(dados),
		    headers: {
		        "Content-Type" : "application/x-www-form-urlencoded"
		    }
		    })
		},
		getPedido: function(id){
			return $http.get("http://easypizza.azurewebsites.net/api/pedido/get/" + id)
		}
	}
}]);



