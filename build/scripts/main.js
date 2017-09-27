"use strict";angular.module("resumeApp",["ui.router","ui.bootstrap","ngAnimate","blogModule","articleModule"]).config(["$stateProvider","$urlRouterProvider",function(e,l){l.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"home.html"}).state("blog",{url:"/blog",templateUrl:"blog.html",controller:"blogController"}).state("article",{url:"/article/:id",templateUrl:"single-article.html",controller:"articleController"})}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBRUFBLFNBQ0tDLE9BQVEsYUFFRCxZQUNBLGVBQ0EsWUFDQSxhQUNBLGtCQUdQQyxRQUFVLGlCQUFrQixxQkFBc0IsU0FBV0MsRUFBZ0JDLEdBRTFFQSxFQUFtQkMsVUFBVyxTQUM5QkYsRUFDS0csTUFBTyxRQUNKQyxJQUFLLFFBQ0xDLFlBQWEsY0FFaEJGLE1BQU8sUUFDSkMsSUFBSyxRQUNMQyxZQUFhLFlBQ2JDLFdBQVksbUJBRWZILE1BQU8sV0FDSkMsSUFBSyxlQUNMQyxZQUFhLHNCQUNiQyxXQUFZIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5hbmd1bGFyXHJcbiAgICAubW9kdWxlKCAncmVzdW1lQXBwJyxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICd1aS5yb3V0ZXInLFxyXG4gICAgICAgICAgICAndWkuYm9vdHN0cmFwJyxcclxuICAgICAgICAgICAgJ25nQW5pbWF0ZScsXHJcbiAgICAgICAgICAgICdibG9nTW9kdWxlJyxcclxuICAgICAgICAgICAgJ2FydGljbGVNb2R1bGUnXHJcbiAgICAgICAgXSApXHJcbiAgICBcclxuICAgIC5jb25maWcoIFsgJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIGZ1bmN0aW9uICggJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciApIHtcclxuICAgICAgICBcclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCAnL2hvbWUnICk7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICAgICAgLnN0YXRlKCAnaG9tZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9ob21lJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgLnN0YXRlKCAnYmxvZycsIHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9ibG9nJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYmxvZy5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdibG9nQ29udHJvbGxlcidcclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgIC5zdGF0ZSggJ2FydGljbGUnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXJ0aWNsZS86aWQnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdzaW5nbGUtYXJ0aWNsZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdhcnRpY2xlQ29udHJvbGxlcidcclxuICAgICAgICAgICAgfSApXHJcbiAgICB9IF0gKTsiXX0=
