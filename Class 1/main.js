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
$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w',
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

foodieApp.controller('restaurantController',function($scope,$routeParams) {
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
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg',
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '4.1',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '4.0',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.5',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.4',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.3',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.2',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	},{
		name: 'Pizza World',
		address: 'Phase-2, 3B-2',
		location: 'Mohali',
		category: 'Snacks, Softdrinks, Pizzas',
		vote: '3.1',
		cuisines: 'Modern Indian',
		cost: '750',
		hours: '10 morning to 11 PM (Mon-Sun)',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5sfg58Oi0tLOa_1kZvnovp0bp4ez498EQNpFGE1LUmKZgE3Y4w'
	}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
})
