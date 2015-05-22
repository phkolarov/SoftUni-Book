app.directive('newsFeed', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/directive/news-feed.html',
        controller: 'NewsFeedCtrl'
    }
});