app.directive('newsFeed', function(){

    return{
        restrict: 'A',
        templateUrl: 'partials/news-feed.html',
        controller: 'NewsFeedCtrl',
        replace: true
    }
});