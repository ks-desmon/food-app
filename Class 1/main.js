var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		$location.url('home')
	}
})

foodieApp.controller('mainController',function($scope) {
$scope.restaurants =
[{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g',
	id:'1'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '4.1',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG',
	id:'2'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '4.0',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebKhnLof60nAwBioUu7z5PA8Kyw8PEcrZzCKxdYMxxvWYOQX-',
	id:'3'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '3.5',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6Gl66Atqdz20OV2-qiD9r5PXGUUG8enLWyl2T4TpzkFK1Yor9Q',
	id:'4'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '3.4',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g',
	id:'5'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '3.3',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQDkVIQHUQXrwm-H-WBGj6SinWJfUj1PwyCHqNpW5qC6S_wY',
	id:'6'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '3.2',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebKhnLof60nAwBioUu7z5PA8Kyw8PEcrZzCKxdYMxxvWYOQX-',
	id:'7'
},{
	name: 'Pizza World',
	address: 'Phase-2, 3B-2',
	location: 'Mohali',
	category: 'Snacks, Softdrinks, Pizzas',
	vote: '3.1',
	cuisines: 'Modern Indian',
	cost: '750',
	hours: '10 morning to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
	id:'8'
}]
})

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = restaurants = [{
		name: 'Farzi Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g',
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '4.1',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
		image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '4.0',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebKhnLof60nAwBioUu7z5PA8Kyw8PEcrZzCKxdYMxxvWYOQX-'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebKhnLof60nAwBioUu7z5PA8Kyw8PEcrZzCKxdYMxxvWYOQX-'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.5',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6Gl66Atqdz20OV2-qiD9r5PXGUUG8enLWyl2T4TpzkFK1Yor9Q'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6Gl66Atqdz20OV2-qiD9r5PXGUUG8enLWyl2T4TpzkFK1Yor9Q'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.4',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.3',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdSt0JYxVCqLYGTRGO0kVrgCsmxciVe5zIr7UYh8qizpj1e5pD5g'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.2',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebKhnLof60nAwBioUu7z5PA8Kyw8PEcrZzCKxdYMxxvWYOQX-'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebKhnLof60nAwBioUu7z5PA8Kyw8PEcrZzCKxdYMxxvWYOQX-'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.1',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
},
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	}]
	$scope.ingredients = [];
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key bb6f14f82ab24374ac60508ef17f6823',
				'Content-Type': 'foodieApp'
			},
			'data': data
		}).then(function (response)  {
	var ingredients = response.data.outputs[0].data.concepts;
	for (var i =0;i < ingredients.length;i++) {
	$scope.ingredients.push(ingredients[i].name);
	}
}, function (xhr) {
	        	console.log(xhr);
	        })

	}

})
