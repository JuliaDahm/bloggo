function RouterConfig($routeProvider){
  $routeProvider  //same as writing $routeProvider.when('/').... *called fluent style*
    .when('/', {
      template: '<home></home>'
    })
    .when('/signup', {
      template: '<signup></signup>'
    })
    .when('/login', {
      template: '<login></login>'
    })
    .when('/profile', {
      template: '<profile></profile>'
    })
    .when('/create', {
      template: '<post-creator></post-creator>'
    })
    .when('/edit/:postId', {
      template: '<post-editor></post-editor>'
    })
    .when('/read/:postId', {
      template: '<post-reader></post-reader>'
    })
    .otherwise({
      redirectTo: '/'
    });
    //when you are on this url, do this thing. ex. when on home route, show home component
}

RouterConfig.$inject = ['$routeProvider']; //what to show and what url to show that at
//ex. go to /sign_up and show sign-up component


module.exports = RouterConfig;
